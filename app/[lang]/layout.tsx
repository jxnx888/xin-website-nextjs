import { AntdRegistry } from '@ant-design/nextjs-registry';
import "../../styles/globals.css";

import { Viewport } from 'next';

import { userRegionHandler } from '@/utils/userRegion';
import {Header} from "@/components/header";

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


export default async function Layout({ children, params }: LayoutProps) {

  return (
    <html
      lang={params.lang}
    >
    <head>
      <link rel="shortcut icon" href="/favicon.ico"/>
      <title>Xin Ning :: Personal Website</title>
    </head>
    <body>
    <Header />
    <AntdRegistry>
      {children}
    </AntdRegistry>
    </body>

    </html>
  );
}
