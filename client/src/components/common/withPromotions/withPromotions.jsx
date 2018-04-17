import React, { Component } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { fetchPromotions } from '../../../store/promotions/actions-creators';
import { Promotion } from '../types';
import { getDisplayName } from '../SnackBar/withSnackBar';

const withPromotions = WrappedComponent => {
  class WithPromotions extends Component {
    componentDidMount() {
      this.props.fetchPromotions();
    }

    render() {
      const { promotions } = this.props;

      return <WrappedComponent {...this.props} promotions={promotions} />;
    }
  }

  WithPromotions.displayName = `WithPromotions(${getDisplayName(
    WrappedComponent
  )})`;

  WithPromotions.propTypes = {
    promotions: arrayOf(shape(Promotion)).isRequired,
    fetchPromotions: func.isRequired
  };

  return connect(
    state => ({
      promotions: state.promotions.data
    }),
    {
      fetchPromotions
    }
  )(WithPromotions);
};

export default withPromotions;
