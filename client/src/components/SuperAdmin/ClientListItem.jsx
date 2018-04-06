import React, { Fragment } from 'react';
import { func, number, oneOfType, string } from 'prop-types';
import { Divider, IconButton, ListItem } from 'material-ui';
import Account from 'material-ui/svg-icons/action/account-box';
import List from 'material-ui/svg-icons/action/view-list';
import fakeClients from '../../api/clients';
import { $blueCool, $gray, $red } from '../../styles/variables';

const avatarSize = 50;
const padding = 16;

const innerDivStyle = {
  paddingLeft: padding + avatarSize + padding
};

const iconStyle = { height: avatarSize, width: avatarSize };

// todo: refactor "onPromotionsClick" to pass the "rightIconButton" as render function
const ClientListItem = ({ id, onClick, onPromotionsClick }) => {
  // todo: remove this when redux/apollo is setup
  const { firstName, dateCreated, isActive } = fakeClients.find(
    client => client.id === parseInt(id, 10)
  );

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

ClientListItem.propTypes = {
  id: oneOfType([string, number]).isRequired,
  onClick: func.isRequired,
  onPromotionsClick: func.isRequired
};

export default ClientListItem;
