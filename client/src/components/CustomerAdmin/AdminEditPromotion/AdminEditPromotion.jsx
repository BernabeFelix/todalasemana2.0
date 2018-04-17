import React from 'react';
import { shape, string } from 'prop-types';
import NewEditPromotion from '../NewEditPromotion';
import { Promotion } from '../../common/types';
import withPromotion from '../../common/HOC/withPromotion';
import { editPromotion } from '../../../api/database/promotions';

const AdminEditPromotion = ({ promotion }) => {
  if (!promotion) return null;

  return <NewEditPromotion {...promotion} onSubmit={editPromotion} />;
};

AdminEditPromotion.defaultProps = {
  promotion: null
};

AdminEditPromotion.propTypes = {
  id: string.isRequired,
  promotion: shape(Promotion)
};

export default withPromotion(AdminEditPromotion);
