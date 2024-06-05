import createMiddleware from 'next-intl/middleware';
"use client";
const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['en', 'es'],

  // Default locale if no match
  defaultLocale: 'es'
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:page*']
};