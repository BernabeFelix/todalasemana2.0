import React from 'react';
import { func } from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { promotionUrl } from '../../routes';
import PromotionSingleResult from './PromotionSingleResult';

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

const PromotionsResults = ({ urlCallback }) => (
  <Query query={query}>
    {({ loading, data }) => {
      if (loading) return null;

      return data.promotions.map(promotion => (
        <PromotionSingleResult
          key={promotion.id}
          url={urlCallback}
          {...promotion}
        />
      ));
    }}
  </Query>
);

PromotionsResults.defaultProps = {
  urlCallback: promotionUrl
};

PromotionsResults.propTypes = {
  urlCallback: func
};

export default PromotionsResults;
