import React, { Component } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { promotionUrl } from '../../routes';
import PromotionSingleResult from './PromotionSingleResult';
import { Promotion } from '../common/types';
import { fetchPromotions } from '../../store/promotions/actions-creators';

class PromotionsResults extends Component {
  componentDidMount() {
    this.props.fetchPromotions();
  }

  render() {
    const { promotions, urlCallback } = this.props;

    return promotions.map(promotion => (
      <PromotionSingleResult
        key={promotion.id}
        url={urlCallback}
        promotion={promotion}
      />
    ));
  }
}

PromotionsResults.defaultProps = {
  urlCallback: promotionUrl
};

PromotionsResults.propTypes = {
  promotions: arrayOf(shape(Promotion)).isRequired,
  fetchPromotions: func.isRequired,
  urlCallback: func
};

export default connect(
  state => ({
    promotions: state.promotions.data
  }),
  {
    fetchPromotions
  }
)(PromotionsResults);
