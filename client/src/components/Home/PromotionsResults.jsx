import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import fakePromotions from '../../api/promotions';
import { promotionUrl, companyUrl } from '../../routes';
import PromotionSingleResult from './PromotionSingleResult';
import { Promotion } from '../common/types';

const PromotionsResults = ({ promotions, urlCallback }) =>
  promotions.map(promotion => (
    <PromotionSingleResult
      key={promotion.id}
      url={urlCallback}
      companyUrl={companyUrl}
      {...promotion}
    />
  ));

PromotionsResults.defaultProps = {
  urlCallback: promotionUrl,
  companyUrl,
  promotions: fakePromotions
};

PromotionsResults.propTypes = {
  promotions: arrayOf(shape(Promotion)),
  urlCallback: func,
  companyUrl: func
};

export default PromotionsResults;
