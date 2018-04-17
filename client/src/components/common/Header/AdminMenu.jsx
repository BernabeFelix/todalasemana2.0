import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import List from 'material-ui/svg-icons/action/view-list';
import Account from 'material-ui/svg-icons/action/account-box';
import ClientList from 'material-ui/svg-icons/action/supervisor-account';
import { $red } from '../../../styles/variables';
import {
  signInUrl,
  superAdminPromosUrl,
  superAdminClientsUrl,
  adminAccountUrl
} from '../../../routes';

const AdminMenu = ({ closeMenu, logout }) => (
  <Menu>
    <MenuItem
      containerElement={<Link to={superAdminPromosUrl()} />}
      primaryText="Promociones"
      leftIcon={<List />}
      onClick={closeMenu}
    />
    <MenuItem
      containerElement={<Link to={superAdminClientsUrl()} />}
      primaryText="Clientes"
      leftIcon={<ClientList />}
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

AdminMenu.propTypes = {
  closeMenu: func.isRequired,
  logout: func.isRequired
};

export default AdminMenu;
