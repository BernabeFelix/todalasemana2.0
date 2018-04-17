import pathToRegexp from 'path-to-regexp';

const r = path => pathToRegexp.compile(path);

export const homeUrl = r('/');

export const signInUrl = r('/entrar');

export const signUpUrl = r('/registro');

export const promotionUrl = r('/promo/:id');

export const promotionsUrl = r('/promociones/:id?');

export const adminPromotionsUrl = r('/admin/promociones/:id?');

export const newPromotionUrl = r('/nueva-promocion');

export const dayUrl = r('/dia/:day');

export const adminUrl = r('/admin');

export const adminNewPromoUrl = r('/admin/nueva-promocion');

export const superAdminUrl = r('/super-admin');

export const superAdminPromosUrl = r('/super-admin/promociones');

export const superAdminClientsUrl = r('/super-admin/clientes');

export const accountUrl = r('/cuenta');

export const adminAccountUrl = r('/admin/cuenta');

export const clientsUrl = r('/clientes/:id?');

export const companyUrl = r('/:companySlugName');
