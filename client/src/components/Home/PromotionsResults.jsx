import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { promotionUrl } from '../../routes';
import PromotionSingleResult from './PromotionSingleResult';
import { Promotion } from '../common/types';
import withPromotions from '../common/HOC/withPromotions';

const PromotionsResults = ({ promotions, urlCallback }) =>
  promotions.map(promotion => (
    <PromotionSingleResult
      key={promotion.id}
      url={urlCallback}
      {...promotion}
    />
  ));

PromotionsResults.defaultProps = {
  urlCallback: promotionUrl
};

PromotionsResults.propTypes = {
  promotions: arrayOf(shape(Promotion)).isRequired,
  urlCallback: func
};

export default withPromotions(PromotionsResults);
