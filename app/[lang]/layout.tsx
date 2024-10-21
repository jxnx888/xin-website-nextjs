import { SiteHeader } from "@/components/organisms/SiteHeader";
import { TranslationsProvider } from "@/Translation/TranslationsProvider";
import { initTranslations } from "@/Translation/util/initTranslations";
import { Viewport } from 'next';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

import "../../styles/globals.scss";

export const runtime = 'edge';

export const viewport: Viewport = {
  width: 'device-width',
};
type LayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

const i18nNamespaces = ['common'];

export default async function Layout({children, params}: LayoutProps) {
  const {resources} = await initTranslations({locale: params.lang || 'en', namespaces: i18nNamespaces});
  return (
    <html
      lang={params.lang}
    >
    <head>
      <link rel="shortcut icon" href="/favicon.ico"/>
      <title>Xin Ning :: Personal Website</title>
      <ColorSchemeScript/>
    </head>
    <body>
    <MantineProvider theme={theme}>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={params.lang}
        resources={resources}
      >
        <SiteHeader/>
        {children}
      </TranslationsProvider>
    </MantineProvider>
    </body>

    </html>
  );
}
