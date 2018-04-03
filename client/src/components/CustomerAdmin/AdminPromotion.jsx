import { Divider, IconButton, ListItem } from 'material-ui';
import React, { Component, Fragment } from 'react';
import { func, number, oneOfType, string } from 'prop-types';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import fakePromotions from '../../api/promotions';
import withSnackBar, { SnackBarStyles } from '../common/SnackBar/withSnackBar';
import CustomAvatar from '../common/CustomAvatar/CustomAvatar';

const avatarSize = 150;
const padding = 16;

const innerDivStyle = {
  paddingLeft: padding + avatarSize + padding
};

class AdminPromotion extends Component {
  deletePromo = () => {
    //    todo: replace this by real delete
    this.props.openSnackBar(`Promotion deleted`);
  };

  render() {
    const { id, onClick } = this.props;
    // todo: remove this when redux/apollo is setup
    const { description, imgUrl, title } = fakePromotions.find(
      promo => promo.id === parseInt(id, 10)
    );

    return (
      <Fragment>
        <ListItem
          leftAvatar={
            <CustomAvatar src={imgUrl} size={avatarSize} padding={padding} />
          }
          primaryText={title}
          secondaryText={description}
          secondaryTextLines={2}
          innerDivStyle={innerDivStyle}
          rightIconButton={
            <IconButton touch onClick={this.deletePromo} tooltip="Eliminar">
              <DeleteIcon color="#ee3335" />
            </IconButton>
          }
          onClick={onClick}
        />
        <Divider inset />
      </Fragment>
    );
  }
}

AdminPromotion.propTypes = {
  id: oneOfType([string, number]).isRequired,
  onClick: func.isRequired,
  ...SnackBarStyles
};

export default withSnackBar(AdminPromotion);
