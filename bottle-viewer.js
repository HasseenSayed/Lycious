const viewer = document.querySelector('[data-bottle-viewer]');

if (viewer) {
  const interactiveViewerQuery = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');
  const viewerStatus = viewer.querySelector('[data-model-status]');
  let viewerStarted = false;

  const syncViewerMode = () => {
    const canUseInteractiveViewer = interactiveViewerQuery.matches && !navigator.connection?.saveData;
    viewer.classList.toggle('is-static', !canUseInteractiveViewer);
    viewerStatus?.setAttribute('aria-hidden', String(!canUseInteractiveViewer));

    if (!canUseInteractiveViewer || viewerStarted) return;

    viewerStarted = true;
    initBottleViewer(viewer).catch(error => {
      console.error('Bottle model failed to load:', error);
      viewer.classList.add('is-error');
    });
  };

  syncViewerMode();
  interactiveViewerQuery.addEventListener('change', syncViewerMode);
}

async function initBottleViewer(viewerElement) {
  const modelSrc = viewerElement.getAttribute('data-model-src');
  const status = viewerElement.querySelector('[data-model-status]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!modelSrc) {
    throw new Error('Missing model source');
  }

  const [
    THREE,
    { OrbitControls },
    { GLTFLoader },
    { RoomEnvironment }
  ] = await Promise.all([
    import('three'),
    import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js'),
    import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js'),
    import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/environments/RoomEnvironment.js')
  ]);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.35, 4.8);

  const patternImage = await loadImage('images/pattern-bg.png').catch(() => null);
  const backdrop = createProductBackdrop(THREE, viewerElement, patternImage);
  scene.background = backdrop.texture;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setClearColor(0xFAF8F4, 0);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const environment = pmremGenerator.fromScene(
    new RoomEnvironment(),
    0.04
  ).texture;

  scene.environment = environment;

  viewerElement.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 3;
  controls.maxDistance = 6.5;
  controls.target.set(0, 0.1, 0);
  controls.autoRotate = !prefersReducedMotion.matches;
  controls.autoRotateSpeed = 0.9;

  scene.add(
    new THREE.HemisphereLight(0xfff8ef, 0x6f3428, 0.4)
  );

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
  keyLight.position.set(3.5, 5, 4);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xf5dce0, 0.3);
  rimLight.position.set(-3, 2.6, -2);
  scene.add(rimLight);

  const loader = new GLTFLoader();
  const gltf = await new Promise((resolve, reject) => {
    loader.load(modelSrc, resolve, undefined, reject);
  });

  const model = gltf.scene;

  configureBottleMaterials(THREE, model);
  normalizeModel(THREE, model);

  scene.add(model);

  const resize = () => {
    const { width, height } = viewerElement.getBoundingClientRect();
    const nextWidth = Math.max(Math.round(width), 1);
    const nextHeight = Math.max(Math.round(height), 1);

    renderer.setSize(nextWidth, nextHeight, false);
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    backdrop.update(nextWidth, nextHeight);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(viewerElement);
  resize();

  const syncMotionPreference = () => {
    controls.autoRotate = !prefersReducedMotion.matches;
  };

  prefersReducedMotion.addEventListener('change', syncMotionPreference);
  status?.setAttribute('aria-hidden', 'true');
  viewerElement.classList.add('is-loaded');

  const render = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();
}

function normalizeModel(THREE, model) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxAxis = Math.max(size.x, size.y, size.z);

  if (maxAxis > 0) {
    model.scale.multiplyScalar(2.25 / maxAxis);
  }

  model.position.sub(center);

  const scaledBox = new THREE.Box3().setFromObject(model);
  const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
  model.position.sub(scaledCenter);
}

function configureBottleMaterials(THREE, model) {
  model.traverse(child => {
    if (!child.isMesh) return;

    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material];

    materials.forEach(material => {
      if (!material) return;

      if (material.name === 'Clear_Glass_WEB') {

        if (material.normalMap) {
          material.normalScale.set(0.1, 0.1);
        }

        material.envMapIntensity = 1.25;
        material.needsUpdate = true;
      }

      if (material.name === 'Lycious Lychee WEB') {
      // Work around nested transmission issue only
        material.transmission = 0;
        material.needsUpdate = true;
        material.side = THREE.FrontSide;
        material.needsUpdate = true;
      }
      if (material.name === 'Label') {
        material.side = THREE.FrontSide;
        material.needsUpdate = true;
      }
    });
  });
}

function createProductBackdrop(THREE, viewerElement, patternImage) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const update = (width, height) => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const productElement = viewerElement.closest('.product');
    const productStyle = productElement
      ? getComputedStyle(productElement)
      : null;
    const patternStyle = productElement
      ? getComputedStyle(productElement, '::before')
      : null;
    const patternSize = parseFloat(patternStyle?.backgroundSize) || 600;
    const patternOpacity = parseFloat(patternStyle?.opacity) || 0.08;

    canvas.width = Math.max(Math.round(width * pixelRatio), 1);
    canvas.height = Math.max(Math.round(height * pixelRatio), 1);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.fillStyle = productStyle?.backgroundColor || '#F2E8E1';
    context.fillRect(0, 0, width, height);

    if (patternImage && productElement) {
      const viewerRect = viewerElement.getBoundingClientRect();
      const productRect = productElement.getBoundingClientRect();
      const offsetX = positiveModulo(viewerRect.left - productRect.left, patternSize);
      const offsetY = positiveModulo(viewerRect.top - productRect.top, patternSize);

      context.globalAlpha = patternOpacity;

      for (let y = -offsetY; y < height; y += patternSize) {
        for (let x = -offsetX; x < width; x += patternSize) {
          context.drawImage(patternImage, x, y, patternSize, patternSize);
        }
      }

      context.globalAlpha = 1;
    }

    const shadowRadius = Math.min(width * 0.36, 180);
    const shadowY = height * 0.84;
    const shadow = context.createRadialGradient(
      width / 2,
      shadowY,
      0,
      width / 2,
      shadowY,
      shadowRadius
    );

    shadow.addColorStop(0, 'rgba(61, 26, 19, 0.14)');
    shadow.addColorStop(0.48, 'rgba(61, 26, 19, 0.06)');
    shadow.addColorStop(1, 'rgba(61, 26, 19, 0)');
    context.fillStyle = shadow;
    context.fillRect(0, shadowY - shadowRadius, width, shadowRadius * 2);

    texture.needsUpdate = true;
  };

  return { texture, update };
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function positiveModulo(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}
