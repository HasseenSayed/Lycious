/* ==========================================
   LYCIOUS — Interactive Scripts + i18n
   ========================================== */

// Add your hosted payment URL or order API endpoint here when ready.
const orderConfig = {
  backendEndpoint: '',
  paymentUrl: '',
  notificationEmail: 'info@lycious.nl'
};

// --- i18n Translation Dictionary ---
const translations = {
  en: {
    // Logo
    'logo.the': 'THE',
    'logo.company': 'COMPANY',

    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.product': 'Product',
    'nav.values': 'Our Values',
    'nav.stockists': 'Where to Buy',
    'nav.order': 'Order',
    'nav.cta': 'Get in Touch',

    // Hero
    'hero.badge': 'Website under development',
    'hero.subtitle': "Lychee, like you've rarely tasted.",
    'hero.tagline': 'We missed a drink that does justice to the real taste of lychee. So we made it ourselves. Subtly sweet. Fresh. Delicious.',
    'hero.cta_primary': 'Discover Our Drink',
    'hero.cta_order': 'Order Now',
    'hero.cta_secondary': 'Our Story',

    // About
    'about.label': 'Our Story',
    'about.title': 'Made with <em>Pure Attention</em>',
    'about.p1': 'At <strong>The Lycious Company</strong>, we believe that a great drink starts with a great fruit. We searched for a lychee drink that truly captured the natural, exotic sweetness of fresh lychee — and couldn\'t find one. So we decided to make it ourselves.',
    'about.quote': '"Made to pause for a moment. To treat yourself. Pure attention."',
    'about.p2': 'Every bottle of Lycious is crafted with real lychee puree, carefully balanced to be subtly sweet, refreshingly crisp, and absolutely delicious. No artificial colors — just natural goodness in a beautiful 275ml glass bottle.',
    'about.stat1': 'Per Bottle',
    'about.stat2': 'Real Lychee Puree',
    'about.stat3': 'kcal per 100ml',

    // Product
    'product.label': 'The Drink',
    'product.title': '<em>Lycious</em> Lychee Drink',
    'product.subtitle': 'Full & refreshing in taste — a premium lychee drink like no other.',
    'product.name': 'Lychee Drink',
    'product.desc': 'Crafted with real lychee puree and natural lychee coloring from beet and carrot concentrates. A refreshing experience in every sip.',
    'product.feat1_title': 'Real Lychee',
    'product.feat1_desc': 'Made with 5% lychee puree',
    'product.feat2_title': 'Natural Aroma',
    'product.feat2_desc': 'Natural flavoring only',
    'product.feat3_title': 'Low Calorie',
    'product.feat3_desc': 'Only 29 kcal per 100ml',
    'product.feat4_title': 'Glass Bottle',
    'product.feat4_desc': '100% recyclable packaging',
    'product.nutrition_title': 'Nutritional Values — per 100 ml',
    'product.energy': 'Energy',
    'product.fats': 'Fats',
    'product.carbs': 'Carbohydrates',
    'product.sugars': '— of which sugars',
    'product.salt': 'Salt',

    // Values
    'values.label': 'Why Lycious',
    'values.title': 'Our <em>Values</em>',
    'values.subtitle': 'Every detail matters when crafting the perfect lychee drink.',
    'values.card1_title': 'Authentic Taste',
    'values.card1_desc': 'We use real lychee puree to deliver the genuine, exotic sweetness you deserve, not artificial imitations.',
    'values.card2_title': 'Premium Quality',
    'values.card2_desc': 'From the recipe to the glass bottle to the label, every element is crafted with care and attention to detail.',
    'values.card3_title': 'Locally Produced',
    'values.card3_desc': 'Locally produced in Heemskerk, by two young entrepreneurs with passion for lychee.',

    // Stockists
    'stockists.label': 'Where to Buy',
    'stockists.title': '<em>Lycious</em> is available here',
    'stockists.subtitle': 'Order directly from us, or find Lycious at the shops listed below.',
    'stockists.badge_direct': 'Direct from Lycious',
    'stockists.direct_title': 'The Lycious Company',
    'stockists.direct_desc': 'Place an order through the website.',
    'stockists.direct_cta': 'Order bottles',

    // Order
    'order.label': 'Order',
    'order.title': 'Place a <em>Lycious</em> Order',
    'order.subtitle': 'Send us your details and preferred quantity. We will confirm availability, delivery, and payment.',
    'order.step1': 'Choose a quantity',
    'order.step2': 'Leave your details',
    'order.step3': 'Receive confirmation',
    'order.name': 'Name',
    'order.email': 'Email',
    'order.phone': 'Phone',
    'order.quantity': 'Bottles',
    'order.delivery': 'Delivery preference',
    'order.delivery_option': 'Delivery',
    'order.pickup_option': 'Pickup in Heemskerk',
    'order.payment': 'Payment preference',
    'order.invoice_option': 'Invoice / payment link',
    'order.online_option': 'Online checkout when available',
    'order.address': 'Delivery address',
    'order.notes': 'Notes',
    'order.remember': 'Remember my details on this device',
    'order.summary_label': 'Order request',
    'order.summary_note': 'No payment is taken until your order is confirmed.',
    'order.submit': 'Place Order',
    'order.bottle_single': 'bottle',
    'order.bottle_plural': 'bottles',
    'order.sending': 'Sending your order...',
    'order.email_fallback': 'Your email app is opening with the order details.',
    'order.success': 'Thank you. Your order request has been sent.',
    'order.error': 'We could not send the order automatically. Please try again or email info@lycious.nl.',
    'order.payment_redirect': 'Order received. Redirecting to checkout...',

    // CTA
    'cta.title': 'Try Lycious Today',
    'cta.desc': 'Experience the refreshing taste of premium lychee. Subtly sweet, delightfully fresh, absolutely delicious.',
    'cta.button': 'Contact Us',

    // Footer
    'footer.brand_desc': 'Premium lychee drink — full and refreshing in taste. Made with real lychee puree and natural ingredients.',
    'footer.links_title': 'Quick Links',
    'footer.contact_title': 'Contact',
    'footer.ingredients_title': 'About the Drink',
    'footer.ingredients': 'Ingredients: water, sugar, lychee puree (5%), food acid (citric acid), stabilizer (xanthan gum), sweeteners (erythritol, acesulfame-K), coloring concentrate (beet, carrot), salt, natural aroma.',
  },

  nl: {
    // Logo
    'logo.the': 'THE',
    'logo.company': 'COMPANY',

    // Nav
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.product': 'Product',
    'nav.values': 'Onze Waarden',
    'nav.stockists': 'Verkrijgbaar bij',
    'nav.order': 'Bestellen',
    'nav.cta': 'Neem Contact Op',

    // Hero
    'hero.badge': 'Website onder ontwikkeling',
    'hero.subtitle': 'Lychee, zoals je \'m zelden proeft.',
    'hero.tagline': 'We misten een drankje dat recht doet aan de echte smaak van lychee. Dus maakten we het zelf. Subtiel zoet. Fris. Heerlijk.',
    'hero.cta_primary': 'Ontdek Ons Drankje',
    'hero.cta_order': 'Bestel Nu',
    'hero.cta_secondary': 'Ons Verhaal',

    // About
    'about.label': 'Ons Verhaal',
    'about.title': 'Gemaakt met <em>Pure Aandacht</em>',
    'about.p1': 'Bij <strong>The Lycious Company</strong> geloven we dat een goed drankje begint met goed fruit. We zochten naar een Lychee Drink dat écht recht doet aan de natuurlijke, exotische zoetheid van verse lychee — en konden het niet vinden. Dus besloten we het zelf te maken.',
    'about.quote': '"Gemaakt om even stil te staan. Om jezelf te verwennen. Pure aandacht."',
    'about.p2': 'Elke fles Lycious is gemaakt met echte lychee puree, zorgvuldig gebalanceerd om subtiel zoet, verfrissend helder en absoluut heerlijk te zijn. Geen kunstmatige kleurstoffen — alleen natuurlijke goedheid in een prachtig 275ml glazen flesje.',
    'about.stat1': 'Per Flesje',
    'about.stat2': 'Echte Lychee Puree',
    'about.stat3': 'kcal per 100ml',

    // Product
    'product.label': 'Het Drankje',
    'product.title': '<em>Lycious</em> Lychee Drink',
    'product.subtitle': 'Vol & verfrissend van smaak — een premium Lychee Drink zoals geen ander.',
    'product.name': 'Lychee Drink',
    'product.desc': 'Gemaakt met echte lychee puree en natuurlijke kleuring van biet- en wortelconcentraat. Een verfrissende ervaring bij elke slok.',
    'product.feat1_title': 'Echte Lychee',
    'product.feat1_desc': 'Gemaakt met 5% lychee puree',
    'product.feat2_title': 'Natuurlijk Aroma',
    'product.feat2_desc': 'Alleen natuurlijke smaakstoffen',
    'product.feat3_title': 'Laag in Calorieën',
    'product.feat3_desc': 'Slechts 29 kcal per 100ml',
    'product.feat4_title': 'Glazen Fles',
    'product.feat4_desc': '100% recyclebare verpakking',
    'product.nutrition_title': 'Voedingswaarde — per 100 ml',
    'product.energy': 'Energie',
    'product.fats': 'Vetten',
    'product.carbs': 'Koolhydraten',
    'product.sugars': '— waarvan suikers',
    'product.salt': 'Zout',

    // Values
    'values.label': 'Waarom Lycious',
    'values.title': 'Onze <em>Waarden</em>',
    'values.subtitle': 'Elk detail telt bij het maken van het perfecte Lychee Drink.',
    'values.card1_title': 'Authentieke Smaak',
    'values.card1_desc': 'We gebruiken echte lychee puree voor de echte, exotische zoetheid die je verdient, geen kunstmatige imitaties.',
    'values.card2_title': 'Premium Kwaliteit',
    'values.card2_desc': 'Van het recept tot het glazen flesje tot het etiket, elk element is met zorg en aandacht voor detail gemaakt.',
    'values.card3_title': 'Lokaal Geproduceerd',
    'values.card3_desc': 'Lokaal geproduceerd in Heemskerk, door twee jonge ondernemers met passie voor lychee.',

    // Stockists
    'stockists.label': 'Verkrijgbaar bij',
    'stockists.title': '<em>Lycious</em> is hier verkrijgbaar',
    'stockists.subtitle': 'Bestel direct bij ons, of vind Lycious bij de verkooppunten hieronder.',
    'stockists.badge_direct': 'Direct bij Lycious',
    'stockists.direct_title': 'The Lycious Company',
    'stockists.direct_desc': 'Plaats je bestelling via de website.',
    'stockists.direct_cta': 'Bestel flesjes',

    // Order
    'order.label': 'Bestellen',
    'order.title': 'Plaats een <em>Lycious</em> bestelling',
    'order.subtitle': 'Stuur je gegevens en gewenste aantal door. Wij bevestigen beschikbaarheid, levering en betaling.',
    'order.step1': 'Kies een aantal',
    'order.step2': 'Laat je gegevens achter',
    'order.step3': 'Ontvang bevestiging',
    'order.name': 'Naam',
    'order.email': 'E-mail',
    'order.phone': 'Telefoon',
    'order.quantity': 'Flesjes',
    'order.delivery': 'Leveringsvoorkeur',
    'order.delivery_option': 'Bezorgen',
    'order.pickup_option': 'Afhalen in Heemskerk',
    'order.payment': 'Betaalvoorkeur',
    'order.invoice_option': 'Factuur / betaallink',
    'order.online_option': 'Online checkout zodra beschikbaar',
    'order.address': 'Bezorgadres',
    'order.notes': 'Opmerkingen',
    'order.remember': 'Onthoud mijn gegevens op dit apparaat',
    'order.summary_label': 'Bestelaanvraag',
    'order.summary_note': 'Er wordt pas betaald nadat je bestelling is bevestigd.',
    'order.submit': 'Plaats Bestelling',
    'order.bottle_single': 'flesje',
    'order.bottle_plural': 'flesjes',
    'order.sending': 'Je bestelling wordt verzonden...',
    'order.email_fallback': 'Je e-mailapp wordt geopend met de bestelgegevens.',
    'order.success': 'Bedankt. Je bestelaanvraag is verzonden.',
    'order.error': 'We konden de bestelling niet automatisch verzenden. Probeer opnieuw of mail naar info@lycious.nl.',
    'order.payment_redirect': 'Bestelling ontvangen. Je wordt doorgestuurd naar checkout...',

    // CTA
    'cta.title': 'Probeer Lycious Vandaag',
    'cta.desc': 'Ervaar de verfrissende smaak van premium lychee. Subtiel zoet, heerlijk fris, absoluut lekker.',
    'cta.button': 'Neem Contact Op',

    // Footer
    'footer.brand_desc': 'Premium Lychee Drink, vol en verfrissend van smaak. Gemaakt met echte lychee puree en natuurlijke ingrediënten.',
    'footer.links_title': 'Snelle Links',
    'footer.contact_title': 'Contact',
    'footer.ingredients_title': 'Over het Drankje',
    'footer.ingredients': 'Ingrediënten: water, suiker, lychee puree (5%), voedingszuur (citroenzuur), stabilisator (xanthaan gom), zoetstoffen (erythritol, acesulfame-K), kleurend concentraat (biet, wortel), zout, natuurlijk aroma.',
  }
};


document.addEventListener('DOMContentLoaded', () => {

  // --- i18n System ---
  let currentLang = localStorage.getItem('lycious-lang') || 'nl';

  const langToggle = document.getElementById('langToggle');
  const langCode = document.getElementById('langCode');

  function getTranslation(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
  }

  function updateOrderSummary() {
    const quantityInput = document.getElementById('orderQuantity');
    const orderSummary = document.getElementById('orderSummary');
    if (!quantityInput || !orderSummary) return;

    const quantity = Math.max(parseInt(quantityInput.value, 10) || 1, 1);
    const bottleKey = quantity === 1 ? 'order.bottle_single' : 'order.bottle_plural';
    orderSummary.textContent = `${quantity} ${getTranslation(bottleKey)}`;
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lycious-lang', lang);
    document.documentElement.lang = lang;

    // Update toggle button
    langCode.textContent = lang.toUpperCase();

    // Update page title
    document.title = lang === 'en'
      ? 'Lycious — Premium Lychee Drink'
      : 'Lycious — Premium Lychee Drink';

    // Swap all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = translations[lang]?.[key];
      if (text) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });
  }

  // Toggle between EN <-> NL
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'nl' : 'en';
    setLanguage(newLang);
    updateOrderSummary();

    // Subtle animation feedback
    langToggle.style.transform = 'scale(0.9)';
    setTimeout(() => { langToggle.style.transform = ''; }, 150);
  });

  // Apply saved language on load
  setLanguage(currentLang);

  // --- Responsive Hero Video ---
  const heroVideo = document.querySelector('.hero-video');
  const desktopVideoQuery = window.matchMedia('(min-width: 769px)');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function syncHeroVideo() {
    if (!heroVideo) return;

    const shouldLoadVideo = desktopVideoQuery.matches && !reducedMotionQuery.matches && !navigator.connection?.saveData;
    const existingSource = heroVideo.querySelector('source');

    if (shouldLoadVideo && !existingSource) {
      const source = document.createElement('source');
      source.src = heroVideo.dataset.videoSrc;
      source.type = 'video/mp4';
      heroVideo.appendChild(source);
      heroVideo.load();
      heroVideo.play().catch(() => {});
      return;
    }

    if (!shouldLoadVideo && existingSource) {
      heroVideo.pause();
      existingSource.remove();
      heroVideo.removeAttribute('src');
      heroVideo.load();
    }
  }

  syncHeroVideo();
  desktopVideoQuery.addEventListener('change', syncHeroVideo);
  reducedMotionQuery.addEventListener('change', syncHeroVideo);


  // --- Scroll Reveal (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  const handleNavScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // --- Smooth Scroll for Nav Links ---
  const navLinks = document.getElementById('navLinks');
  const navHamburger = document.getElementById('navHamburger');

  function setMobileMenuOpen(isOpen) {
    navLinks.classList.toggle('active', isOpen);
    navHamburger.classList.toggle('active', isOpen);
    navHamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 80; // nav height
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // Close mobile menu
        setMobileMenuOpen(false);
      }
    });
  });

  // --- Mobile Menu Toggle ---
  navHamburger.addEventListener('click', () => {
    setMobileMenuOpen(!navLinks.classList.contains('active'));
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navHamburger.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
    }
  });

  // --- Parallax on Hero Background ---
  const heroBgImg = document.getElementById('heroBgImg');

  if (heroBgImg) {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;
      if (scrollY < heroHeight) {
        const translate = scrollY * 0.3;
        heroBgImg.style.transform = `translateY(${translate}px) scale(1.05)`;
      }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
  }

  // --- Counter Animation for Stats ---
  const statNumbers = document.querySelectorAll('.about-stat-number');

  const animateCounter = (el) => {
    const text = el.textContent;
    const match = text.match(/^([\d.]+)(.*)/);
    if (!match) return;

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const duration = 1500;
    const start = performance.now();
    const isFloat = text.includes('.');

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      const current = target * eased;
      el.textContent = (isFloat ? current.toFixed(match[1].split('.')[1]?.length || 0) : Math.round(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statsObserver.observe(el));

  // --- Order Form ---
  const orderForm = document.getElementById('orderForm');
  const orderStatus = document.getElementById('orderStatus');
  let savedOrderDetails = {};

  try {
    savedOrderDetails = JSON.parse(localStorage.getItem('lycious-order-details') || '{}');
  } catch {
    localStorage.removeItem('lycious-order-details');
  }

  if (orderForm) {
    ['name', 'email', 'phone', 'address'].forEach(field => {
      const input = orderForm.elements[field];
      if (input && savedOrderDetails[field]) {
        input.value = savedOrderDetails[field];
      }
    });

    const quantityInput = document.getElementById('orderQuantity');
    quantityInput.addEventListener('input', updateOrderSummary);
    updateOrderSummary();

    orderForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
      }

      const formData = new FormData(orderForm);
      const order = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        phone: formData.get('phone').trim(),
        quantity: Number(formData.get('quantity')),
        delivery: formData.get('delivery'),
        payment: formData.get('payment'),
        address: formData.get('address').trim(),
        notes: formData.get('notes').trim(),
        source: 'lycious.nl',
        createdAt: new Date().toISOString()
      };

      orderStatus.className = 'order-status';
      orderStatus.textContent = getTranslation('order.sending');

      if (formData.get('remember')) {
        localStorage.setItem('lycious-order-details', JSON.stringify({
          name: order.name,
          email: order.email,
          phone: order.phone,
          address: order.address
        }));
      } else {
        localStorage.removeItem('lycious-order-details');
      }

      try {
        if (orderConfig.backendEndpoint) {
          const response = await fetch(orderConfig.backendEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
          });

          if (!response.ok) {
            throw new Error(`Order endpoint returned ${response.status}`);
          }

          if (order.payment === 'online' && orderConfig.paymentUrl) {
            orderStatus.textContent = getTranslation('order.payment_redirect');
            window.location.href = orderConfig.paymentUrl;
            return;
          }

          orderStatus.classList.add('success');
          orderStatus.textContent = getTranslation('order.success');
          orderForm.reset();
          updateOrderSummary();
          return;
        }

        if (order.payment === 'online' && orderConfig.paymentUrl) {
          localStorage.setItem('lycious-pending-order', JSON.stringify(order));
          orderStatus.textContent = getTranslation('order.payment_redirect');
          window.location.href = orderConfig.paymentUrl;
          return;
        }

        const emailBody = [
          'New Lycious order request',
          '',
          `Name: ${order.name}`,
          `Email: ${order.email}`,
          `Phone: ${order.phone || '-'}`,
          `Quantity: ${order.quantity}`,
          `Delivery: ${order.delivery}`,
          `Payment: ${order.payment}`,
          `Address: ${order.address || '-'}`,
          `Notes: ${order.notes || '-'}`,
          `Created: ${order.createdAt}`
        ].join('\n');

        const mailtoUrl = `mailto:${orderConfig.notificationEmail}?subject=${encodeURIComponent('New Lycious order request')}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoUrl;
        orderStatus.classList.add('success');
        orderStatus.textContent = getTranslation('order.email_fallback');
      } catch (error) {
        console.error(error);
        orderStatus.classList.add('error');
        orderStatus.textContent = getTranslation('order.error');
      }
    });
  }

});
