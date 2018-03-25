import pathToRegexp from 'path-to-regexp';

const r = path => pathToRegexp.compile(path);

export const homeUrl = r('/');

export const signInUrl = r('/entrar');

export const signUpUrl = r('/registrar');

export const promotionUrl = r('/promo/:id');

export const dayUrl = r('/dia/:day');

export const adminUrl = r('/admin/:slug?');

export const adminSlugs = {
    cuenta: 'cuenta',
    promociones: 'promociones'
}