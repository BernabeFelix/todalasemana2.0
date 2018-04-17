import { bool, func, number, string } from 'prop-types';

export const Location = {
  pathname: string.isRequired
};

export const History = {
  push: func.isRequired
};

export const Match = {
  url: string.isRequired
};

export const Size = {
  width: number.isRequired
};

// intent
export const Intent = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  DEFAULT: 'DEFAULT'
};

export const NewPromotion = {
  description: string,
  imgUrl: string,
  title: string
};
export const PromotionDefaults = {
  company: '\u00A0'
};
export const Promotion = {
  id: string,
  description: string,
  imgUrl: string,
  isActive: bool,
  title: string,
  company: string
};

export const Client = {
  id: number.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
  address: string,
  zipCode: string,
  email: string,
  phone: string,
  service: string,
  dateCreated: string.isRequired
};

export const MarkerType = {
  title: string,
  location: string.isRequired
};
