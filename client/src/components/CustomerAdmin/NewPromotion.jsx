import React, { Component } from 'react';
import { func } from 'prop-types';
import NewEditPromotion from './NewEditPromotion';
import { addPromotion } from '../../api/database/promotions';
import withSnackBar, { SnackBarTypes } from '../common/SnackBar/withSnackBar';
import { Intent } from '../common/types';
import withPromotions from '../common/HOC/withPromotions';

class NewPromotion extends Component {
  addPromotion = async data => {
    try {
      await addPromotion(data);
      this.props.updatePromotions();

      this.props.openSnackBar(Intent.SUCCESS);
    } catch (e) {
      this.props.openSnackBar();
    }
  };

  render() {
    return <NewEditPromotion onSubmit={this.addPromotion} />;
  }
}

NewPromotion.propTypes = {
  ...SnackBarTypes,
  updatePromotions: func.isRequired
};

export default withPromotions(withSnackBar(NewPromotion));
