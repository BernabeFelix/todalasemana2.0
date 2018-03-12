import pathToRegexp from 'path-to-regexp';

const r = path => pathToRegexp.compile(path);

export const authUrl = r('/auth');

export const homeUrl = r('/');

export const signInUrl = r('/entrar');

export const aboutUrl = r('/quienes-somos');

export const servicesUrl = r('/servicios');

export const contactUrl = r('/contacto');

export const promotionUrl = r('/promo/:id');

export const dayUrl = r('/dia/:day');
