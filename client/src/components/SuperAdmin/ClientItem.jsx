import React, { Fragment } from 'react';
import { func, number, oneOfType, string } from 'prop-types';
import { Divider, ListItem } from 'material-ui';
import Account from 'material-ui/svg-icons/action/account-box';
import fakeClients from '../../api/clients';

const avatarSize = 50;
const padding = 16;

const innerDivStyle = {
  paddingLeft: padding + avatarSize + padding
};

const ClientItem = ({ id, onClick }) => {
  // todo: remove this when redux/apollo is setup
  const { firstName, dateCreated } = fakeClients.find(
    client => client.id === parseInt(id, 10)
  );

  return (
    <Fragment>
      <ListItem
        primaryText={firstName}
        leftIcon={<Account style={{ height: avatarSize, width: avatarSize }} />}
        secondaryText={`Creado en ${dateCreated}`}
        secondaryTextLines={2}
        innerDivStyle={innerDivStyle}
        onClick={onClick}
      />
      <Divider inset />
    </Fragment>
  );
};

ClientItem.propTypes = {
  id: oneOfType([string, number]).isRequired,
  onClick: func.isRequired
};

export default ClientItem;
