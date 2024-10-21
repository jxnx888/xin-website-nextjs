import { Resource, createInstance, i18n as I18nType } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

export async function initTranslations({
                                         locale,
                                         i18n,
                                         locales,
                                         defaultLocale,
                                         resources,
                                         namespaces,
                                       }: {
  locale?: string;
  i18n?: I18nType;
  locales?: string[];
  defaultLocale?: string;
  resources?: Resource;
  namespaces?: string[];
}) {
  i18n = i18n || createInstance();

  i18n.use(initReactI18next);
  if (!resources) {
    i18n.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../public/locales/${language}/${namespace}.js`),
      ),
    );
  }

  await i18n.init({
    lng: locale,
    resources,
    fallbackLng: defaultLocale,
    supportedLngs: locales,
    defaultNS: namespaces ? namespaces[0] : 'common',
    fallbackNS: namespaces ? namespaces[0] : 'common',
    ns: namespaces ?? ['common'],
    preload: resources ? [] : locales,
  });

  return {
    i18n,
    resources: i18n.services.resourceStore.data,
    t: i18n.t,
  };
}
