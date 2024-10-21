'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const getCookie = (name: string, documentCookie: string) => {
  const cookies = documentCookie;
  const cookieArray = cookies.split('; ');

  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split('=');
    if (cookiePair[0] === name) {
      return cookiePair[1];
    }
  }
  return null;
};

const knownLocales = ['fr', 'en', 'es', 'ca', 'id', 'tr'];

export function useCurrentLocale() {
  const params = useParams<{ lang: string }>();

  const currentLocale = useMemo(() => {
    let locale = 'en';
    if (knownLocales.includes(params.lang)) {
      locale = params.lang;
    } else if (typeof window !== 'undefined' && document.cookie) {
      const cookieLocale = getCookie('NEXT_LOCALE', document.cookie);
      if (cookieLocale && knownLocales.includes(cookieLocale)) {
        locale = cookieLocale;
      }
    }
    return locale;
  }, [params.lang]);

  return currentLocale;
}
