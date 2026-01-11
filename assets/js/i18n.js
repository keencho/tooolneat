// Toolneat - Internationalization (i18n)

(function() {
  'use strict';

  // Get current language from URL path (URL is the source of truth)
  const getLanguage = () => {
    const pathname = window.location.pathname;
    // URL path determines language - /en/ = English, otherwise Korean
    if (pathname.startsWith('/en/') || pathname === '/en') {
      return 'en';
    }
    return 'ko';
  };

  // Get base path for locales (상대경로)
  const getLocalesPath = () => {
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    if (depth === 0) return './locales';
    return '../'.repeat(depth) + 'locales';
  };

  // Current language
  let currentLang = getLanguage();
  let translations = {};

  // Load translations
  const loadTranslations = async (lang) => {
    try {
      const basePath = getLocalesPath();
      const response = await fetch(`${basePath}/${lang}.json`);

      if (!response.ok) {
        throw new Error(`Failed to load ${lang}.json`);
      }

      translations = await response.json();
      applyTranslations();
      updateLangButtons();

    } catch (error) {
      console.error('i18n load error:', error);

      // Fallback to Korean if English fails
      if (lang !== 'ko') {
        await loadTranslations('ko');
      }
    }
  };

  // Apply translations to DOM
  const applyTranslations = () => {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const value = getNestedValue(translations, key);
      if (value) el.textContent = value;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const value = getNestedValue(translations, key);
      if (value) el.placeholder = value;
    });

    // Custom text (for select options etc.)
    document.querySelectorAll('[data-i18n-text]').forEach(el => {
      const key = el.dataset.i18nText;
      const value = getNestedValue(translations, key);
      if (value) el.textContent = value;
    });

    // Title
    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      const key = titleEl.dataset.i18nTitle;
      const value = getNestedValue(translations, key);
      if (value) document.title = value;
    }

    // Meta description
    const descEl = document.querySelector('meta[data-i18n-desc]');
    if (descEl) {
      const key = descEl.dataset.i18nDesc;
      const value = getNestedValue(translations, key);
      if (value) descEl.setAttribute('content', value);
    }

    // Dispatch event for page-specific handlers
    document.dispatchEvent(new CustomEvent('i18nApplied', { detail: { lang: currentLang } }));
  };

  // Get nested object value by dot notation
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  // Update language toggle buttons
  const updateLangButtons = () => {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const btnLang = btn.dataset.lang;
      btn.classList.toggle('font-bold', btnLang === currentLang);
      btn.classList.toggle('text-blue-600', btnLang === currentLang);
      btn.classList.toggle('dark:text-blue-400', btnLang === currentLang);
    });
  };

  // Switch language - redirect to /en/ or / URL
  window.switchLanguage = (lang) => {
    const currentPath = window.location.pathname;
    const isOnEnglish = currentPath.startsWith('/en/') || currentPath === '/en';

    if (lang === 'en' && !isOnEnglish) {
      // Switch to English - add /en/ prefix
      window.location.href = '/en' + currentPath;
    } else if (lang === 'ko' && isOnEnglish) {
      // Switch to Korean - remove /en/ prefix
      if (currentPath === '/en' || currentPath === '/en/') {
        window.location.href = '/';
      } else {
        window.location.href = currentPath.replace(/^\/en/, '');
      }
    }
  };

  // Get translation value
  window.t = (key) => {
    return getNestedValue(translations, key) || key;
  };

  // Get current language
  window.getCurrentLang = () => currentLang;

  // Re-apply translations (called after dynamic components load)
  window.applyTranslations = applyTranslations;

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    loadTranslations(currentLang);
  });
})();
