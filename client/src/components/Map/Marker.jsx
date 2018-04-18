import React from 'react';
import { string } from 'prop-types';

const Marker = ({ title }) => (
  <div
    style={{
      width: '30px',
      color: 'black',
      height: '30px',
      fontSize: '18px',
      borderRadius: '50%',
      backgroundColor: 'green'
    }}
  >
    {title}
  </div>
);

Marker.propTypes = {
  title: string.isRequired
};

export default Marker;
