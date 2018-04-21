import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Add from 'material-ui/svg-icons/content/add';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import List from 'material-ui/svg-icons/action/view-list';
import Account from 'material-ui/svg-icons/action/account-box';
import { $blueCool, $red } from '../../../styles/variables';
import {
  signInUrl,
  adminNewPromoUrl,
  adminAccountUrl,
  adminPromotionsUrl
} from '../../../routes';

const CustomerMenu = ({ closeMenu, logout }) => (
  <Menu>
    <Link to={adminNewPromoUrl()}>
      <MenuItem
        primaryText="Nueva promoción"
        leftIcon={<Add color={$blueCool} />}
        onClick={closeMenu}
      />
    </Link>
    <Link to={adminPromotionsUrl()}>
      <MenuItem
        primaryText="Promociones"
        leftIcon={<List />}
        onClick={closeMenu}
      />
    </Link>
    <Link to={adminAccountUrl()}>
      <MenuItem
        primaryText="Cuenta"
        leftIcon={<Account />}
        onClick={closeMenu}
      />
    </Link>
    <Divider />
    <Link to={signInUrl()}>
      <MenuItem
        primaryText="Salir"
        leftIcon={<Power color={$red} />}
        onClick={logout}
      />
    </Link>
  </Menu>
);

CustomerMenu.propTypes = {
  closeMenu: func.isRequired,
  logout: func.isRequired
};

export default CustomerMenu;
