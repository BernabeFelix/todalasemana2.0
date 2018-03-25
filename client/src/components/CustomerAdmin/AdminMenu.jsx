import { Menu, MenuItem, Paper } from 'material-ui';
import React from 'react';
import { shape } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { accountUrl, promotionsUrl } from '../../routes';
import { Match } from '../../types';

const style = {
  margin: '16px 32px 16px 0'
};

const AdminMenu = ({ match }) => (
  //  todo: add active state
  <Paper style={style}>
    <Menu>
      <Link to={match.url + promotionsUrl()}>
        <MenuItem primaryText="Promociones" />
      </Link>
      <Link to={match.url + accountUrl()}>
        <MenuItem primaryText="Cuenta" />
      </Link>

      <MenuItem primaryText="Salir" />
    </Menu>
  </Paper>
);

AdminMenu.propTypes = { match: shape(Match).isRequired };

export default withRouter(AdminMenu);
