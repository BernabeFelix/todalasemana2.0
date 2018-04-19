import React, { Fragment } from 'react';
import { func, shape } from 'prop-types';
import { Divider, IconButton, ListItem } from 'material-ui';
import Account from 'material-ui/svg-icons/action/account-box';
import List from 'material-ui/svg-icons/action/view-list';
import { $blueCool, $gray, $red } from '../../styles/variables';
import { Customer } from '../common/types';

const avatarSize = 50;
const padding = 16;

const innerDivStyle = {
  paddingLeft: padding + avatarSize + padding
};

const iconStyle = { height: avatarSize, width: avatarSize };

// todo: refactor "onPromotionsClick" to pass the "rightIconButton" as render function
const CustomerListItem = ({ customer, onClick, onPromotionsClick }) => {
  const { firstName, dateCreated, isActive } = customer;

  return (
    <Fragment>
      <ListItem
        primaryText={firstName}
        leftIcon={
          <Account style={iconStyle} color={isActive ? $blueCool : $red} />
        }
        secondaryText={`Creado en ${dateCreated}`}
        secondaryTextLines={2}
        innerDivStyle={innerDivStyle}
        onClick={onClick}
        rightIconButton={
          <IconButton
            touch
            onClick={onPromotionsClick}
            tooltip="Ver promociones"
          >
            <List color={$gray} />
          </IconButton>
        }
      />
      <Divider inset />
    </Fragment>
  );
};

CustomerListItem.propTypes = {
  onClick: func.isRequired,
  onPromotionsClick: func.isRequired,
  customer: shape(Customer).isRequired
};

export default CustomerListItem;
