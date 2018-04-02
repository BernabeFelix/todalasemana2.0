import { Menu, MenuItem, Paper } from 'material-ui';
import React from 'react';
import { shape } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import List from 'material-ui/svg-icons/action/view-list';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import { clientsUrl } from '../../routes';
import { Match } from '../../types';
import { $red } from '../../styles/variables';

const style = {
  margin: '16px 32px 16px 0'
};

const AdminMenu = ({ match }) => (
  //  todo: add active state
  <Paper style={style}>
    <Menu>
      <Link to={match.url + clientsUrl()}>
        <MenuItem primaryText="Clientes" leftIcon={<List />} />
      </Link>

      <MenuItem primaryText="Salir" leftIcon={<Power color={$red} />} />
    </Menu>
  </Paper>
);

AdminMenu.propTypes = { match: shape(Match).isRequired };

export default withRouter(AdminMenu);
