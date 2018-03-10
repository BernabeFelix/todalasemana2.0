import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const Header = props => (
  <div>
    <AppBar
      title="Toda la semana"
      className="header"
      onLeftIconButtonClick={props.onToggleDrawer}
      iconElementRight={
        <FlatButton
          label="Sign In/ Sign Up"
          containerElement={<Link to="signin" />}
        />
      }
    />
  </div>
);

export default Header;

Header.propTypes = {
  onToggleDrawer: PropTypes.func.isRequired
};
