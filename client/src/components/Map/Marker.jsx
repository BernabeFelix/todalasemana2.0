import React from 'react';
import { string } from 'prop-types';

const Marker = ({ title }) => {
  console.log(title);
  return (
    <div
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'green'
      }}
    >
      {title}
    </div>
  );
};

Marker.propTypes = {
  title: string.isRequired
};

export default Marker;
