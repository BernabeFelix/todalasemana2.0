import { number, string } from 'prop-types';

export const Promotion = {
  id: number.isRequired,
  description: string.isRequired,
  imgUrl: string.isRequired,
  title: string.isRequired
};
