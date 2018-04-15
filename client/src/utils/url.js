import settings from '../../settings.json';

export const hasSlashAtTheEnd = str => str.lastIndexOf('/') === str.length - 1;

export const getRootUrl = () => settings.rootUrl;
