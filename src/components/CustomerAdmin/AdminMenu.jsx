import { Menu, MenuItem, Paper } from 'material-ui';
import React from 'react';
import { Link } from 'react-router-dom';
import { adminCuentaUrl, adminPromotionsUrl } from '../../routes';

const style = {
  margin: '16px 32px 16px 0'
};

const AdminMenu = () => (
  <Paper style={style}>
    <Menu>
      <Link to={adminPromotionsUrl()}>
        <MenuItem primaryText="Promociones" />
      </Link>
      <Link to={adminCuentaUrl()}>
        <MenuItem primaryText="Cuenta" />
      </Link>

      <MenuItem primaryText="Salir" />
    </Menu>
  </Paper>
);

export default AdminMenu;
