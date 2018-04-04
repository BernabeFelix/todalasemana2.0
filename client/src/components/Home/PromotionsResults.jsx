import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import fakePromotions from '../../api/promotions';
import { promotionUrl } from '../../routes';
import PromotionSingleResult from './PromotionSingleResult';
import { Promotion } from '../common/types';

const PromotionsResults = ({ promotions, urlCallback }) =>
  promotions.map(promotion => (
    <PromotionSingleResult
      key={promotion.id}
      url={urlCallback}
      {...promotion}
    />
  ));

PromotionsResults.defaultProps = {
  urlCallback: promotionUrl,
  promotions: fakePromotions
};

PromotionsResults.propTypes = {
  promotions: arrayOf(shape(Promotion)),
  urlCallback: func
};

export default PromotionsResults;
