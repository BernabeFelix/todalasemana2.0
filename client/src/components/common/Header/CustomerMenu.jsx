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
    <MenuItem
      containerElement={<Link to={adminNewPromoUrl()} />}
      primaryText="Nueva promoción"
      leftIcon={<Add color={$blueCool} />}
      onClick={closeMenu}
    />
    <MenuItem
      containerElement={<Link to={adminPromotionsUrl()} />}
      primaryText="Promociones"
      leftIcon={<List />}
      onClick={closeMenu}
    />
    <MenuItem
      containerElement={<Link to={adminAccountUrl()} />}
      primaryText="Cuenta"
      leftIcon={<Account />}
      onClick={closeMenu}
    />
    <Divider />
    <MenuItem
      containerElement={<Link to={signInUrl()} />}
      primaryText="Salir"
      leftIcon={<Power color={$red} />}
      onClick={logout}
    />
  </Menu>
);

CustomerMenu.propTypes = {
  closeMenu: func.isRequired,
  logout: func.isRequired
};

export default CustomerMenu;
