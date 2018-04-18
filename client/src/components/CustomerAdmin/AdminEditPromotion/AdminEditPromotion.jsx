import React, { Component } from 'react';
import { func, shape, string } from 'prop-types';
import NewEditPromotion from '../NewEditPromotion';
import { Intent, Promotion } from '../../common/types';
import withPromotion from '../../common/HOC/withPromotion';
import { editPromotion } from '../../../api/database/promotions';
import withSnackBar, {
  SnackBarTypes
} from '../../common/SnackBar/withSnackBar';

class AdminEditPromotion extends Component {
  editPromotion = async data => {
    try {
      await editPromotion(this.props.id, data);
      this.props.updatePromotion();

      this.props.openSnackBar(Intent.SUCCESS);
    } catch (e) {
      this.props.openSnackBar();
    }
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
  promotion: shape(Promotion),
  updatePromotion: func.isRequired,
  ...SnackBarTypes
};

export default withPromotion(withSnackBar(AdminEditPromotion));
