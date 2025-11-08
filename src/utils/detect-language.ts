const SUPPORTED_LOCALES = ['en', 'pt-br'] as const;
const DEFAULT_LOCALE = 'en';

function getLanguage(browserLang: string): string | null {
  const normalized = browserLang.toLowerCase().replace('_', '-');
  
  if (SUPPORTED_LOCALES.includes(normalized as any)) {
    return normalized;
  }
  
  const languageCode = normalized.split('-')[0];
  if (languageCode === 'pt') return 'pt-br';
  if (languageCode === 'en') return 'en';
  
  return null;
}

function getPreferredLanguage(): string | null {
  const languages = navigator.languages || [];

  for (const lang of languages) {
    const locale = getLanguage(lang);
    if (locale) return locale;
  }
  
  if (navigator.language) {
    return getLanguage(navigator.language);
  }
  
  return null;
}

function getLocaleFromUrl(): string {
  return window.location.pathname.startsWith('/pt-br') ? 'pt-br' : DEFAULT_LOCALE;
}

function getLocalePath(locale: string): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

export function detectAndRedirectLanguage(): void {
  const currentLocale = getLocaleFromUrl();
  const savedLocale = localStorage.getItem('locale');
  
  if (savedLocale === currentLocale) {
    return;
  }
  
  const browserLocale = getPreferredLanguage();
  if (!browserLocale || browserLocale === currentLocale) {
    return;
  }
  
  const currentPath = window.location.pathname;
  const shouldRedirect = currentPath === '/' || currentPath === '/en/';
  
  if (shouldRedirect) {
    window.location.href = getLocalePath(browserLocale);
  }
}

export function saveLocale(locale: string): void {
  localStorage.setItem('locale', locale);
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectAndRedirectLanguage);
  } else {
    detectAndRedirectLanguage();
  }
}

