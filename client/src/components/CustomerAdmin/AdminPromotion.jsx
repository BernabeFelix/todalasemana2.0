import { Avatar, Divider, ListItem } from 'material-ui';
import React, { Fragment } from 'react';
import { Promotion } from '../Home/types';

const avatarSize = 150;
const padding = 16;

const avatarStyle = {
  borderRadius: 0,
  width: 'auto',
  height: 'auto',
  maxWidth: avatarSize,
  maxHeight: 88 - padding
};

const innerDivStyle = {
  paddingLeft: padding + avatarSize + padding
};

const AdminPromotion = ({ description, imgUrl, title }) => (
  <Fragment>
    <ListItem
      leftAvatar={<Avatar src={imgUrl} style={avatarStyle} />}
      primaryText={title}
      secondaryText={description}
      secondaryTextLines={2}
      innerDivStyle={innerDivStyle}
    />
    <Divider inset />
  </Fragment>
);

AdminPromotion.propTypes = Promotion;

export default AdminPromotion;
