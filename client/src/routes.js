import pathToRegexp from 'path-to-regexp';

const r = path => pathToRegexp.compile(path);

export const homeUrl = r('/');

export const signInUrl = r('/entrar');

export const signUpUrl = r('/registrar');

export const promotionUrl = r('/promo/:id');

export const promotionsUrl = r('/promotions/:id?');

export const dayUrl = r('/dia/:day');

export const adminUrl = r('/admin');

export const accountUrl = r('cuenta')