import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Promotion } from '../types';
import { getDisplayName } from '../SnackBar/withSnackBar';
import withPromotions from './withPromotions';

const getPromotion = (state, { id }) =>
  state.promotions.data.length
    ? { promotion: state.promotions.data.find(promo => promo.id === id) }
    : { promotion: {} };

const withPromotion = WrappedComponent => {
  const WithPromotion = ({ promotion, updatePromotions, ...props }) => (
    <WrappedComponent
      {...props}
      promotion={promotion}
      updatePromotion={updatePromotions}
    />
  );

  WithPromotion.displayName = `WithPromotion(${getDisplayName(
    WrappedComponent
  )})`;

  WithPromotion.defaultProps = {
    promotion: {}
  };

  WithPromotion.propTypes = {
    promotion: shape(Promotion),
    updatePromotions: func.isRequired
  };

  return withPromotions(connect(getPromotion)(WithPromotion));
};

export default withPromotion;
