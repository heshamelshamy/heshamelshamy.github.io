/**
 * ==============================================================================
 * PORTFOLIO APPLICATION CORE JAVASCRIPT
 * Hesham Elshamy · M.Sc. Bauingenieurwesen / BIM Consultant
 * Handles:
 * - Multilingual switching (DE, EN, AR) with automatic RTL direction handling
 * - Theme switching (Light / Dark workstation modes)
 * - Scroll reveal micro-animations
 * - Skill bar fill animations
 * - Mobile navigation drawer
 * - Impressum modal dialog
 * - One-click clipboard email copy
 * ==============================================================================
 */

(() => {
  'use strict';

  // --- DOM Elements ---
  const htmlRoot = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const langButtons = document.querySelectorAll('[data-set-lang]');
  const legalModal = document.getElementById('legalModal');
  const openLegalModalButtons = document.querySelectorAll('[data-open-legal]');
  const closeLegalModalButtons = document.querySelectorAll('[data-close-legal]');
  const copyEmailButtons = document.querySelectorAll('[data-copy-email]');
  const currentYearSpan = document.getElementById('currentYear');

  // SVG Icons for Theme Toggle
  const sunIcon = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
  const moonIcon = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;

  // Helper to safely read from localStorage
  const readStorage = (key, fallback) => {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  };

  // Helper to safely write to localStorage
  const writeStorage = (key, val) => {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      // Storage unavailable or disabled
    }
  };

  /**
   * Translates the page according to selected language
   * @param {string} lang - 'de', 'en', or 'ar'
   * @param {boolean} persist - whether to save to localStorage
   */
  const setLanguage = (lang, persist = false) => {
    const validLanguages = ['de', 'en', 'ar'];
    const selectedLang = validLanguages.includes(lang) ? lang : 'de';

    // Check if translations dictionary exists
    if (!window.portfolioTranslations || !window.portfolioTranslations[selectedLang]) {
      console.warn(`Translations for language "${selectedLang}" not found.`);
      return;
    }

    const t = window.portfolioTranslations[selectedLang];

    // 1. Set root lang attribute
    htmlRoot.setAttribute('lang', selectedLang);

    // 2. Set RTL / LTR direction and classes
    if (selectedLang === 'ar') {
      htmlRoot.setAttribute('dir', 'rtl');
      htmlRoot.classList.add('rtl');
    } else {
      htmlRoot.setAttribute('dir', 'ltr');
      htmlRoot.classList.remove('rtl');
    }

    // 3. Update active state of language switcher buttons
    langButtons.forEach((btn) => {
      const btnLang = btn.getAttribute('data-set-lang');
      const isActive = btnLang === selectedLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // 4. Update page title and meta description
    if (t.meta) {
      if (t.meta.title) document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && t.meta.description) {
        metaDesc.setAttribute('content', t.meta.description);
      }
    }

    // 5. Update all elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const path = el.getAttribute('data-i18n');
      const value = resolveObjectPath(t, path);
      if (value !== undefined) {
        el.textContent = value;
      }
    });

    // 6. Update all elements with [data-i18n-html]
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const path = el.getAttribute('data-i18n-html');
      const value = resolveObjectPath(t, path);
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    // 7. Update all attributes with [data-i18n-attr]
    // Format: "attr1:key1,attr2:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const attrDefs = el.getAttribute('data-i18n-attr').split(',');
      attrDefs.forEach((def) => {
        const [attr, path] = def.trim().split(':');
        if (attr && path) {
          const value = resolveObjectPath(t, path);
          if (value !== undefined) {
            el.setAttribute(attr, value);
          }
        }
      });
    });

    // 8. Persist choice if requested
    if (persist) {
      writeStorage('portfolio-lang', selectedLang);
    }
  };

  /**
   * Resolves nested property path like 'hero.headline' on object
   */
  const resolveObjectPath = (obj, path) => {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : undefined;
    }, obj);
  };

  /**
   * Applies dark or light theme
   * @param {string} theme - 'dark' or 'light'
   * @param {boolean} persist - whether to save to localStorage
   */
  const setTheme = (theme, persist = false) => {
    const activeTheme = theme === 'dark' ? 'dark' : 'light';
    htmlRoot.setAttribute('data-theme', activeTheme);
    htmlRoot.style.colorScheme = activeTheme;

    if (themeToggle) {
      themeToggle.innerHTML = activeTheme === 'dark' ? sunIcon : moonIcon;
      themeToggle.setAttribute('aria-label', activeTheme === 'dark' ? 'Zu hellem Design wechseln' : 'Zu dunklem Design wechseln');
      themeToggle.setAttribute('title', activeTheme === 'dark' ? 'Zu hellem Design wechseln' : 'Zu dunklem Design wechseln');
    }

    if (persist) {
      writeStorage('portfolio-theme', activeTheme);
    }
  };

  // --- Scroll Reveal Animations (IntersectionObserver) ---
  const initScrollAnimations = () => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      revealObserver.observe(el);
    });

    // Animate skill progress bars when visible
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    if (skillBars.length > 0) {
      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetWidth = entry.target.getAttribute('data-skill-level') || '90%';
            entry.target.style.width = targetWidth;
            skillObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      skillBars.forEach(bar => skillObserver.observe(bar));
    }
  };

  // --- Clipboard Copy Feature ---
  const initCopyEmail = () => {
    copyEmailButtons.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = btn.getAttribute('data-email') || 'heshamelshamy2000@gmail.com';
        const tooltip = btn.querySelector('.copy-tooltip') || btn;
        const originalText = tooltip.textContent;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(email);
          } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }

          // Feedback
          const currentLang = htmlRoot.getAttribute('lang') || 'de';
          const copiedMsg = (window.portfolioTranslations && window.portfolioTranslations[currentLang]?.contact?.copiedNotice) || 'Kopiert!';
          
          if (tooltip !== btn) {
            tooltip.textContent = copiedMsg;
            tooltip.classList.add('opacity-100');
            setTimeout(() => {
              tooltip.textContent = originalText;
              tooltip.classList.remove('opacity-100');
            }, 2200);
          } else {
            btn.textContent = copiedMsg;
            setTimeout(() => {
              btn.textContent = originalText;
            }, 2200);
          }
        } catch (err) {
          console.error('Failed to copy email: ', err);
          window.location.href = `mailto:${email}`;
        }
      });
    });
  };

  // --- Legal / Impressum Modal Handling ---
  const initLegalModal = () => {
    if (!legalModal) return;

    const openModal = () => {
      legalModal.classList.remove('hidden');
      legalModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      legalModal.classList.add('hidden');
      legalModal.classList.remove('flex');
      document.body.style.overflow = '';
    };

    openLegalModalButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    closeLegalModalButtons.forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !legalModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  };

  // --- Mobile Navigation Drawer Handling ---
  const initMobileNav = () => {
    if (!menuToggle || !mobileNav) return;

    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileNav.classList.toggle('hidden');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close when clicking any nav link inside mobile drawer
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.add('hidden');
      });
    });
  };

  // --- Initialization on DOM Ready ---
  const init = () => {
    // 1. Language determination: stored -> default 'de'
    const storedLang = readStorage('portfolio-lang', 'de');
    setLanguage(storedLang, false);

    // Bind language button clicks
    langButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-set-lang');
        setLanguage(lang, true);
      });
    });

    // 2. Theme determination: stored -> system preference -> 'dark'
    const storedTheme = readStorage('portfolio-theme', null);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme, false);

    // Bind theme toggle button
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme, true);
      });
    }

    // 3. Current year in footer
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    // 4. Initialize features
    initScrollAnimations();
    initCopyEmail();
    initLegalModal();
    initMobileNav();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
