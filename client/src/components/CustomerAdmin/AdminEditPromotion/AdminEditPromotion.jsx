import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import NewEditPromotion from '../NewEditPromotion';
import { Promotion } from '../../common/types';
import withPromotion from '../../common/HOC/withPromotion';
import { editPromotion } from '../../../api/database/promotions';

class AdminEditPromotion extends Component {
  editPromotion = data => {
    editPromotion(this.props.id, data);
  };

  render() {
    const { promotion } = this.props;

    if (!promotion) return null;

    return <NewEditPromotion {...promotion} onSubmit={this.editPromotion} />;
  }
}

AdminEditPromotion.defaultProps = {
  promotion: null
};

AdminEditPromotion.propTypes = {
  id: string.isRequired,
  promotion: shape(Promotion)
};

export default withPromotion(AdminEditPromotion);
