import { Avatar, Divider, ListItem } from 'material-ui';
import React, { Fragment } from 'react';
import { Promotion } from '../Home/types';

const avatarStyle = {
    borderRadius: 0
}

const AdminPromotion = ({ description, imgUrl, title }) => (
  <Fragment>
    <ListItem
      leftAvatar={<Avatar src={imgUrl} size={50} style={avatarStyle} />}
      primaryText={title}
      secondaryText={description}
      secondaryTextLines={2}
    />
    <Divider inset />
  </Fragment>
);

AdminPromotion.propTypes = Promotion;

export default AdminPromotion;
