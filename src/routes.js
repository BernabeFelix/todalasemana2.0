import pathToRegexp from 'path-to-regexp';

const r = path => pathToRegexp.compile(path);

export const aboutUrl = r('/about');

export const homeUrl = r('/');

export const promotionUrl = r('/promotion/:id');
