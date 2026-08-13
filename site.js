(() => {
  'use strict';

  const root = document.documentElement;
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const motionToggle = document.getElementById('motionToggle');
  const menuToggle = document.getElementById('menuToggle');
  const primaryNavigation = document.getElementById('primary-navigation');
  const cinematicHero = document.querySelector('.hero-cinematic');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const moonIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"></path></svg>';
  const sunIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>';

  const readPreference = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const savePreference = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The portfolio remains fully usable if browser storage is unavailable.
    }
  };

  const applyLanguage = (language, persist = false) => {
    const activeLanguage = language === 'en' ? 'en' : 'de';
    root.lang = activeLanguage;
    root.classList.toggle('lang-de', activeLanguage === 'de');
    root.classList.toggle('lang-en', activeLanguage === 'en');

    document.querySelectorAll('[data-alt-de][data-alt-en]').forEach((image) => {
      image.alt = activeLanguage === 'de' ? image.dataset.altDe : image.dataset.altEn;
    });

    if (persist) savePreference('portfolio-lang', activeLanguage);

    if (langToggle) {
      const showEnglish = activeLanguage === 'de';
      langToggle.textContent = showEnglish ? 'EN' : 'DE';
      langToggle.setAttribute('aria-pressed', String(!showEnglish));
      langToggle.setAttribute('aria-label', showEnglish ? 'Switch to English' : 'Auf Deutsch wechseln');
      langToggle.setAttribute('title', showEnglish ? 'Switch to English' : 'Auf Deutsch wechseln');
    }
  };

  const applyTheme = (theme, persist = false) => {
    const activeTheme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = activeTheme;
    root.style.colorScheme = activeTheme;

    if (persist) savePreference('portfolio-theme', activeTheme);
    if (themeColor) themeColor.content = activeTheme === 'dark' ? '#111417' : '#f5f3ef';
    if (themeToggle) {
      const switchToLight = activeTheme === 'dark';
      themeToggle.innerHTML = `<span class="theme-icon" aria-hidden="true">${switchToLight ? sunIcon : moonIcon}</span>`;
      themeToggle.setAttribute('aria-pressed', String(activeTheme === 'dark'));
      themeToggle.setAttribute('aria-label', switchToLight ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('title', switchToLight ? 'Switch to light theme' : 'Switch to dark theme');
    }
  };

  const applyHeroMotion = (state, persist = false) => {
    if (!cinematicHero || !motionToggle) return;
    const activeState = state === 'paused' ? 'paused' : 'playing';
    cinematicHero.classList.toggle('is-motion-paused', activeState === 'paused');
    motionToggle.dataset.motion = activeState;
    motionToggle.setAttribute('aria-pressed', String(activeState === 'paused'));
    motionToggle.setAttribute('aria-label', activeState === 'paused' ? 'Resume visual motion' : 'Pause visual motion');
    motionToggle.setAttribute('title', activeState === 'paused' ? 'Resume visual motion' : 'Pause visual motion');
    if (persist) savePreference('portfolio-hero-motion', activeState);
  };

  const initialLanguage = root.lang === 'en' ? 'en' : 'de';
  const initialTheme = root.dataset.theme === 'dark' ? 'dark' : 'light';
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const savedHeroMotion = readPreference('portfolio-hero-motion');
  applyLanguage(initialLanguage);
  applyTheme(initialTheme);
  applyHeroMotion(prefersReducedMotion ? 'paused' : (savedHeroMotion || 'playing'));

  langToggle?.addEventListener('click', () => applyLanguage(root.lang === 'de' ? 'en' : 'de', true));
  themeToggle?.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
  motionToggle?.addEventListener('click', () => applyHeroMotion(motionToggle.dataset.motion === 'paused' ? 'playing' : 'paused', true));
  menuToggle?.addEventListener('click', () => {
    const isOpen = primaryNavigation?.classList.toggle('is-open') ?? false;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });
  primaryNavigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    primaryNavigation.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));
  const currentYear = document.getElementById('currentYear');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  // Expose minimal hooks for future pages without duplicating the interaction logic.
  window.portfolioPreferences = { applyLanguage, applyTheme, applyHeroMotion, readPreference };
})();
