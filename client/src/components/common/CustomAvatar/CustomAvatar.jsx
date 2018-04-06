import React from 'react';
import { number, string } from 'prop-types';
import { Avatar } from 'material-ui';

const style = {
  borderRadius: 0,
  width: 'auto',
  height: 'auto',
  position: 'absolute'
};

const CustomAvatar = ({ padding, src, size }) => (
  <Avatar
    src={src}
    style={{
      ...style,
      top: padding / 2,
      left: padding,
      maxWidth: size,
      maxHeight: 88 - padding
    }}
  />
);

CustomAvatar.defaultProps = {
  size: 150,
  padding: 16
};

CustomAvatar.propTypes = {
  size: number,
  padding: number,
  src: string.isRequired
};

export default CustomAvatar;
