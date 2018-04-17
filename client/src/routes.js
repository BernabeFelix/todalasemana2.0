import pathToRegexp from 'path-to-regexp';

const r = path => pathToRegexp.compile(path);

export const homeUrl = r('/');

export const signInUrl = r('/entrar');

export const signUpUrl = r('/registrar');

export const promotionUrl = r('/promo/:id');

export const promotionsUrl = r('/promociones/:id?');

export const newPromotionUrl = r('/nueva-promocion');

export const dayUrl = r('/dia/:day');

export const adminUrl = r('/admin');

export const superAdminUrl = r('/super-admin');

export const accountUrl = r('/cuenta');

export const clientsUrl = r('/clientes/:id?');

export const companyUrl = r('/:companySlugName');
