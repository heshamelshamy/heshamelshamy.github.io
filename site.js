(() => {
  'use strict';

  const root = document.documentElement;
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const motionToggle = document.getElementById('motionToggle');
  const cinematicHero = document.querySelector('.hero-cinematic');
  const themeColor = document.querySelector('meta[name="theme-color"]');

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
      themeToggle.setAttribute('aria-pressed', String(activeTheme === 'dark'));
      themeToggle.setAttribute('aria-label', activeTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('title', activeTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
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

  // Expose minimal hooks for future pages without duplicating the interaction logic.
  window.portfolioPreferences = { applyLanguage, applyTheme, applyHeroMotion, readPreference };
})();
