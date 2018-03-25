import { List } from 'material-ui';
import React from 'react';
import { arrayOf, shape } from 'prop-types';
import fakePromotions from '../../api/promotions';
import { Promotion } from '../Home/types';
import AdminPromotion from './AdminPromotion';

const AdminPromotions = ({ promotions }) => {
  //  todo: create a 'no promotions message'
  if (!promotions) return null;

  return (
    <List style={{ backgroundColor: 'white' }}>
      {promotions.map(promo => <AdminPromotion key={promo.id} {...promo} />)}
    </List>
  );
};

AdminPromotions.defaultProps = {
  promotions: fakePromotions
};

AdminPromotions.propTypes = {
  promotions: arrayOf(shape(Promotion))
};

export default AdminPromotions;
