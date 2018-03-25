import { Menu, MenuItem, Paper } from 'material-ui';
import React from 'react';
import { Link } from 'react-router-dom';
import { adminSlugs, adminUrl } from '../../routes';

const style = {
  margin: '16px 32px 16px 0'
};

const AdminMenu = () => (
  <Paper style={style}>
    <Menu>
      <Link to={adminUrl({ slug: adminSlugs.promociones })}>
        <MenuItem primaryText="Promociones" />
      </Link>
      <Link to={adminUrl({ slug: adminSlugs.cuenta })}>
        <MenuItem primaryText="Cuenta" />
      </Link>

      <MenuItem primaryText="Salir" />
    </Menu>
  </Paper>
);

export default AdminMenu;
