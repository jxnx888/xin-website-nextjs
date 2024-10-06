/**
 * @type {NonNullable<import('next').NextConfig['i18n']>}
 */
const i18nConfig = {
  locales: ['en', 'cn'],
  defaultLocale: 'en',
  localeDetection: false,
};

module.exports = i18nConfig;
