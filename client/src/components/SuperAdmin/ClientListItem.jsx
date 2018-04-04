import React, { Fragment } from 'react';
import { func, number, oneOfType, string } from 'prop-types';
import { Divider, ListItem } from 'material-ui';
import Account from 'material-ui/svg-icons/action/account-box';
import Pause from 'material-ui/svg-icons/av/pause-circle-outline';
import fakeClients from '../../api/clients';
import { $blueCool, $red } from '../../styles/variables';

const avatarSize = 50;
const padding = 16;

const innerDivStyle = {
  paddingLeft: padding + avatarSize + padding
};

const iconStyle = { height: avatarSize, width: avatarSize };

const ClientListItem = ({ id, onClick }) => {
  // todo: remove this when redux/apollo is setup
  const { firstName, dateCreated, isActive } = fakeClients.find(
    client => client.id === parseInt(id, 10)
  );

  return (
    <Fragment>
      <ListItem
        primaryText={firstName}
        leftIcon={
          isActive ? (
            <Account style={iconStyle} color={$blueCool} />
          ) : (
            <Pause style={iconStyle} color={$red} />
          )
        }
        secondaryText={`Creado en ${dateCreated}`}
        secondaryTextLines={2}
        innerDivStyle={innerDivStyle}
        onClick={onClick}
      />
      <Divider inset />
    </Fragment>
  );
};

ClientListItem.propTypes = {
  id: oneOfType([string, number]).isRequired,
  onClick: func.isRequired
};

export default ClientListItem;
