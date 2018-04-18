import React, { Component } from 'react';
import { shape, string } from 'prop-types';
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

      this.props.openSnackBar('Guardado correctamente', Intent.SUCCESS);
    } catch (e) {
      this.props.openSnackBar('Sucedio un error, por favor intente de nuevo');
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
  ...SnackBarTypes
};

export default withPromotion(withSnackBar(AdminEditPromotion));
