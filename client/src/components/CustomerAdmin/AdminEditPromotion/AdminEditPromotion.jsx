import React from 'react';
import { string } from 'prop-types';
import fakePromotions from '../../../api/promotions';
import NewEditPromotion from '../NewEditPromotion';

const AdminEditPromotion = ({ id }) => {
  // todo: remove this when redux/apollo is setup
  const promotion = fakePromotions.find(promo => promo.id === parseInt(id, 10));

  return <NewEditPromotion {...promotion} />;
};

AdminEditPromotion.propTypes = {
  id: string.isRequired
};

export default AdminEditPromotion;
