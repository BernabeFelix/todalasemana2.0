import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { promotionUrl } from '../../routes';
import PromotionSingleResult from './PromotionSingleResult';
import { Promotion } from '../common/types';

const PromotionsResults = ({ query, urlCallback }) =>
  query.promotions
    ? query.promotions.map(promotion => (
        <PromotionSingleResult
          key={promotion.id}
          url={urlCallback}
          {...promotion}
        />
      ))
    : null;

PromotionsResults.defaultProps = {
  urlCallback: promotionUrl,
  query: { promotions: [] }
};

PromotionsResults.propTypes = {
  query: shape({
    promotions: arrayOf(shape(Promotion))
  }),
  urlCallback: func
};

const query = gql`
  query {
    promotions {
      id
      title
      imgUrl
      isActive
      description
    }
  }
`;

export default graphql(query, { name: 'query' })(PromotionsResults);
