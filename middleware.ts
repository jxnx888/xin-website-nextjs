import i18n from './i18next.config'
import {composeMiddleware} from "@/utils/middleware/utils";
import {withI18n} from "@/utils/middleware/withI18n";

export const config = {
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
    '/((?!api/|_next/|_next/|favicon\\.ico|robots\\.txt|.*\\.png|.*\\.svg|site\\.webmanifest).*)',
  ],
}

export const middleware = composeMiddleware(
  withI18n(i18n)
)
