import React from 'react';
import PromotionSingleResult from '../Home/PromotionSingleResult';
import { Promotion } from '../Home/types';

const AdminPromotions = ({ promotions }) => (
  <div>
    {promotions.map(promotion => (
      <PromotionSingleResult key={promotion.id} {...promotion} />
    ))}
  </div>
);

AdminPromotions.propTypes = Promotion;

AdminPromotions.defaultProps = {
  promotions: [
    {
      id: 1,
      description: 'Im the description',
      imgUrl: 'https://placebear.com/200/100',
      title: 'Im the title'
    },
    {
      id: 2,
      description: 'Im the description',
      imgUrl: 'https://placebear.com/200/100',
      title: 'Im the title'
    },
    {
      id: 3,
      description: 'Im the description',
      imgUrl: 'https://placebear.com/200/100',
      title: 'Im the title'
    },
    {
      id: 4,
      description: 'Im the description',
      imgUrl: 'https://placebear.com/200/100',
      title: 'Im the title'
    }
  ]
};

export default AdminPromotions;
