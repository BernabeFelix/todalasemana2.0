import React from 'react';
import { arrayOf, shape } from 'prop-types';
import PromotionSingleResult from './PromotionSingleResult';
import { Promotion } from './types';

const PromotionsResults = ({ promotions }) =>
  promotions.map(promotion => (
    <PromotionSingleResult key={promotion.id} {...promotion} />
  ));

PromotionsResults.defaultProps = {
  promotions: [
    {
      id: 1,
      description: 'Im the description',
      imgUrl: 'https://placebear.com/200/100',
      title: 'Im the title'
    }
  ]
};

PromotionsResults.propTypes = {
  promotions: arrayOf(shape(Promotion))
};

export default PromotionsResults;
