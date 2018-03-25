import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

const FooterLink = props => (
  <Link to={props.url}>
    <FlatButton
      label={props.label}
      className="footer-link"
      hoverColor="transparent"
      rippleColor="transparent"
    />
  </Link>
);

FooterLink.propTypes = {
  url: string.isRequired,
  label: string.isRequired
};

export default FooterLink;
