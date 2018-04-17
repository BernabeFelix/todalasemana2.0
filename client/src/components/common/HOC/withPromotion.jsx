import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import { Promotion } from '../types';
import { getDisplayName } from '../SnackBar/withSnackBar';
import withPromotions from './withPromotions';

const getPromotion = (state, { id }) =>
  state.promotions.data.length
    ? { promotion: state.promotions.data.find(promo => promo.id === id) }
    : { promotion: {} };

const withPromotion = WrappedComponent => {
  const WithPromotion = ({ promotion, ...props }) => (
    <WrappedComponent {...props} promotion={promotion} />
  );

  WithPromotion.displayName = `WithPromotion(${getDisplayName(
    WrappedComponent
  )})`;

  WithPromotion.defaultProps = {
    promotion: {}
  };

  WithPromotion.propTypes = {
    promotion: shape(Promotion)
  };

  return withPromotions(connect(getPromotion)(WithPromotion));
};

export default withPromotion;
