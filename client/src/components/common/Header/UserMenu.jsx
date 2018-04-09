import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Add from 'material-ui/svg-icons/content/add';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import List from 'material-ui/svg-icons/action/view-list';
import Account from 'material-ui/svg-icons/action/account-box';
import Auth from '../../../api/auth/Auth';
import { $blueCool, $red } from '../../../styles/variables';

import {
  adminNewPromoUrl,
  adminAccountUrl,
  adminPromotionsUrl
} from '../../../routes';

// TODO: add menu to go to admin sections

class UserMenu extends Component {
  // state = {
  //   openMenu: false
  // };

  // handleOpen = () => {
  //   this.setState({ openMenu: true });
  // };

  // handleOnRequestChange = () => {
  //   this.setState({ openMenu: false });
  // };

  logout = async () => {
    const auth = new Auth();
    await auth.logout();

    // Redirect to home ??
  };

  render() {
    const { userName, isAdmin } = this.props;
    if (isAdmin) {
      return <Fragment />;
    }

    return (
      <Fragment>
        <IconMenu
          iconButtonElement={
            <div className="header-right-nav">
              <FlatButton
                label={userName}
                className="header-right-nav-btn"
                hoverColor="transparent"
                rippleColor="transparent !important"
                onClick={this.handleOpen}
              />
            </div>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {/* onRequestChange={this.handleOnRequestChange} */}
          <Link to={adminNewPromoUrl()}>
            <MenuItem
              primaryText="Nueva Promocion"
              leftIcon={<Add color={$blueCool} />}
            />
          </Link>
          <Link to={adminPromotionsUrl()}>
            <MenuItem primaryText="Promociones" leftIcon={<List />} />
          </Link>
          <Link to={adminAccountUrl()}>
            <MenuItem primaryText="Cuenta" leftIcon={<Account />} />
          </Link>
          <Divider />
          <MenuItem
            primaryText="Salir"
            leftIcon={<Power color={$red} />}
            onClick={this.logout}
          />

          {/* <Link to={adminNewPromoUrl()}>
            <MenuItem primaryText="Nueva promoción" leftIcon={<Add />} />
          </Link>
          <Link to={adminAccountUrl()}>
            <MenuItem primaryText="Cuenta" leftIcon={<AccountCircle />} />
          </Link>
          <Divider />
          <MenuItem
            primaryText="Salir"
            leftIcon={<Power />}
            onClick={this.logout}
          /> */}
        </IconMenu>
      </Fragment>
    );
  }
}

UserMenu.defaultProps = {
  isAdmin: false
};

UserMenu.propTypes = {
  userName: string.isRequired,
  isAdmin: bool
};

export default UserMenu;

/* <FlatButton
                  label={userName}
                  className="header-right-nav-btn"
                  hoverColor="transparent"
                  rippleColor="transparent !important"
                  onClick={this.handleOpen}
                /> */
