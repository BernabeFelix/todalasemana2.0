import React, { Component } from 'react';
import NewEditPromotion from './NewEditPromotion';
import { addPromotion } from '../../api/database/promotions';

class NewPromotion extends Component {
  onSubmit = data => {
    addPromotion(data);
  };

  render() {
    return <NewEditPromotion onSubmit={this.onSubmit} />;
  }
}

export default NewPromotion;
