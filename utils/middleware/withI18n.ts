import { NextConfig } from 'next';
import {
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';
import { getLocale, isNextRoute, isStaticFileRoute, isVercelRoute } from '@/utils/middleware/utils';
import i18n from '@/i18next.config';

export type I18NConfig = NonNullable<NextConfig['i18n']>;

export const withI18n = (
  i18nConfig: I18NConfig,
): NextMiddleware => async (request: NextRequest) => {
  console.log('middleware withI18n');
  if (isNextRoute(request) || isStaticFileRoute(request) || isVercelRoute(request)) {
    return;
  }
// Check if there is any supported locale in the pathname
  const { nextUrl: { pathname } } = request;
  console.log('pathname', pathname);
  // Check if the pathname is empty (i.e., the root URL)
  if (pathname === '/') {
    const { defaultLocale } = i18nConfig;
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.nextUrl.origin));
  }

  // 检查路径是否已经包含语言代码
  const hasLocaleInPath = i18n.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  // 如果路径中没有语言代码，重定向到默认语言的路径
  if (!hasLocaleInPath) {
    const locale = getLocale(request);
    const newPath = `/${locale}${pathname}`;
    return NextResponse.redirect(
      new URL(newPath, request.nextUrl.origin)
    );
  }
  return NextResponse.next();
};
