import { Divider, IconButton, ListItem } from 'material-ui';
import React, { Component, Fragment } from 'react';
import { func, oneOfType, string } from 'prop-types';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import withSnackBar, { SnackBarTypes } from '../common/SnackBar/withSnackBar';
import CustomAvatar from '../common/CustomAvatar/CustomAvatar';
import { $blueCool, $red } from '../../styles/variables';
import withPromotion from '../common/HOC/withPromotion';
import { Intent } from '../common/types';

const $avatarSize = 150;
const $padding = 16;
const $itemHeight = 88;
const $borderMargin = 1;

const activeBorder = {
  left: 0,
  position: 'absolute',
  paddingTop: $borderMargin / 2,
  paddingBottom: $borderMargin / 2,
  top: 0,
  height: $itemHeight - $borderMargin
};

const innerDivStyle = {
  height: $itemHeight,
  paddingLeft: $padding + $avatarSize + $padding
};

class AdminPromotion extends Component {
  deletePromo = () => {
    //    todo: replace this by real delete
    this.props.openSnackBar(Intent.SUCCESS, 'Promotion deleted');
  };

  render() {
    const { promotion, onClick } = this.props;

    const { description, imgUrl, isActive, title } = promotion;

    return (
      <Fragment>
        <ListItem
          primaryText={title}
          secondaryText={description}
          secondaryTextLines={2}
          innerDivStyle={innerDivStyle}
          onClick={onClick}
          leftAvatar={
            <CustomAvatar src={imgUrl} size={$avatarSize} padding={$padding} />
          }
          rightIconButton={
            <IconButton touch onClick={this.deletePromo} tooltip="Eliminar">
              <DeleteIcon color={$red} />
            </IconButton>
          }
        >
          <div
            style={{
              ...activeBorder,
              borderLeft: `10px solid ${isActive ? $blueCool : $red}`
            }}
          />
        </ListItem>
        <Divider inset />
      </Fragment>
    );
  }
}

AdminPromotion.propTypes = {
  id: oneOfType([string]).isRequired,
  onClick: func.isRequired,
  ...SnackBarTypes
};

// todo: add react-compose
export default withPromotion(withSnackBar(AdminPromotion));
