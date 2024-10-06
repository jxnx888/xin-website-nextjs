import { NextMiddleware, NextRequest } from 'next/server';
import i18n from "@/i18next.config";

/* to copy in every app's middleware */
export const commonMiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - png and svg files
     * - site.webmanifest file
     */
    "/((?!api/|_next/|_next/|favicon\\.ico|robots\\.txt|.*\\.png|.*\\.svg|site\\.webmanifest).*)",
  ],
};

// Get the preferred locale, similar to the above or using a library
export const getLocale = (request: NextRequest): string =>{
  const { nextUrl : {pathname} } = request;
  // 从 URL 中获取路径的第一级（即语言代码部分）
  const pathLocale = pathname.split('/')[1];
  // 如果 URL 中有合法的语言代码，返回它
  if (i18n.locales.includes(pathLocale)) {
    return pathLocale;
  }
  // 否则，返回默认语言
  return i18n.defaultLocale;
}


export const composeMiddleware = (
  ...middlewareFn: NextMiddleware[]
): NextMiddleware => {
  return async (req, event) => {
    for (const middleware of middlewareFn) {
      const response = (await middleware(req, event)) ?? undefined;

      if (response !== undefined) {
        return response;
      }
    }

    return;
  };
};

export const isNextRoute = (req: NextRequest): boolean => {
  return (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/')
  );
};

const PUBLIC_FILE = /\.(.*)$/;

export const isStaticFileRoute = (req: NextRequest): boolean => {
  return PUBLIC_FILE.test(req.nextUrl.pathname);
};

export const isVercelRoute = (req: NextRequest): boolean => {
  return req.nextUrl.pathname.startsWith('/monitoring');
};
