import { func, number, string } from 'prop-types';

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
  SUCCESS: 'SUCCESS'
};

export const NewPromotion = {
  description: string,
  imgUrl: string,
  title: string
};

export const Promotion = {
  id: number.isRequired,
  description: string.isRequired,
  imgUrl: string.isRequired,
  title: string.isRequired
};
