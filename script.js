/* ==========================================
   LYCIOUS — Interactive Scripts + i18n
   ========================================== */

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
    'nav.cta': 'Get in Touch',

    // Hero
    'hero.badge': 'Website under development',
    'hero.subtitle': "Lychee, like you've rarely tasted.",
    'hero.tagline': 'We missed a drink that does justice to the real taste of lychee. So we made it ourselves. Subtly sweet. Fresh. Delicious.',
    'hero.cta_primary': 'Discover Our Drink',
    'hero.cta_secondary': 'Our Story',

    // About
    'about.label': 'Our Story',
    'about.title': 'Made with <em>Pure Attention</em>',
    'about.p1': 'At <strong>The Lycious Company</strong>, we believe that a great drink starts with a great fruit. We searched for a lychee drink that truly captured the natural, exotic sweetness of fresh lychee — and couldn\'t find one. So we decided to make it ourselves.',
    'about.quote': '"Made to pause for a moment. To treat yourself. Pure attention."',
    'about.p2': 'Every bottle of Lycious is crafted with real lychee puree, carefully balanced to be subtly sweet, refreshingly crisp, and absolutely delicious. No artificial colors — just natural goodness in a beautiful 200ml glass bottle.',
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
    'values.card3_desc': 'Locally produced in Heemskerk, by 2 young entrepeneurs with passion for lychee.',

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
    'nav.cta': 'Neem Contact Op',

    // Hero
    'hero.badge': 'Website onder onwikkeling',
    'hero.subtitle': 'Lychee, zoals je \'m zelden proeft.',
    'hero.tagline': 'We misten een drankje dat recht doet aan de echte smaak van lychee. Dus maakten we het zelf. Subtiel zoet. Fris. Heerlijk.',
    'hero.cta_primary': 'Ontdek Ons Drankje',
    'hero.cta_secondary': 'Ons Verhaal',

    // About
    'about.label': 'Ons Verhaal',
    'about.title': 'Gemaakt met <em>Pure Aandacht</em>',
    'about.p1': 'Bij <strong>The Lycious Company</strong> geloven we dat een goed drankje begint met goed fruit. We zochten naar een Lychee Drink dat écht recht doet aan de natuurlijke, exotische zoetheid van verse lychee — en konden het niet vinden. Dus besloten we het zelf te maken.',
    'about.quote': '"Gemaakt om even stil te staan. Om jezelf te verwennen. Pure aandacht."',
    'about.p2': 'Elke fles Lycious is gemaakt met echte lychee puree, zorgvuldig gebalanceerd om subtiel zoet, verfrissend helder en absoluut heerlijk te zijn. Geen kunstmatige kleurstoffen — alleen natuurlijke goedheid in een prachtig 200ml glazen flesje.',
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
    'values.card3_desc': 'Lokaal geproduceerd in Heemskerk, door 2 jonge ondernemers met passie voor lychee.',

    // CTA
    'cta.title': 'Probeer Lycious Vandaag',
    'cta.desc': 'Ervaar de verfrissende smaak van premium lychee. Subtiel zoet, heerlijk fris, absoluut lekker.',
    'cta.button': 'Neem Contact Op',

    // Footer
    'footer.brand_desc': 'Premium Lychee Drink, vol en verfrissend van smaak. Gemaakt met echte lychee puree en natuurlijke ingrediënten.',
    'footer.links_title': 'Snelle Links',
    'footer.contact_title': 'Contact',
    'footer.ingredients_title': 'Over het Drankje',
    'footer.ingredients': 'Ingrediënten: water, suiker, lychee puree (5%), voedingszuur (citroenzuur), stabilisator (xanthaan gom), zoetstoffen (erythritol, acesulfame-K), kleurend concentraat (kool, wortel), zout, natuurlijk aroma.',
  }
};


document.addEventListener('DOMContentLoaded', () => {

  // --- i18n System ---
  let currentLang = localStorage.getItem('lycious-lang') || 'nl';

  const langToggle = document.getElementById('langToggle');
  const langCode = document.getElementById('langCode');

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

    // Subtle animation feedback
    langToggle.style.transform = 'scale(0.9)';
    setTimeout(() => { langToggle.style.transform = ''; }, 150);
  });

  // Apply saved language on load
  setLanguage(currentLang);


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
  let lastScroll = 0;

  const handleNavScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // --- Smooth Scroll for Nav Links ---
  const navLinks = document.getElementById('navLinks');
  const navHamburger = document.getElementById('navHamburger');

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
        navLinks.classList.remove('active');
        navHamburger.classList.remove('active');
      }
    });
  });

  // --- Mobile Menu Toggle ---
  navHamburger.addEventListener('click', () => {
    navHamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navHamburger.contains(e.target)) {
      navLinks.classList.remove('active');
      navHamburger.classList.remove('active');
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

});
