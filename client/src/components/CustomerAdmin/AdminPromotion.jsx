import { Avatar, Divider, ListItem } from 'material-ui';
import React, { Fragment } from 'react';
import { string, number, oneOfType } from 'prop-types';
import fakePromotions from '../../api/promotions';

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

const AdminPromotion = ({ id }) => {
  if (!id) return null;

  // todo: remove this when redux/apollo is setup
  const { description, imgUrl, title } = fakePromotions.find(
    promo => promo.id === parseInt(id, 10)
  );

  return (
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
};

AdminPromotion.propTypes = {
  // promotion: Promotion.isRequired,
  id: oneOfType([string, number]).isRequired
};

export default AdminPromotion;
