import createMiddleware from 'next-intl/middleware';
"use client";
const middleware = createMiddleware({

  locales: ['en', 'es'],

  defaultLocale: 'es'
});

export default middleware;

export const config = {

  matcher: ['/', '/(es|en)/:page*']
};