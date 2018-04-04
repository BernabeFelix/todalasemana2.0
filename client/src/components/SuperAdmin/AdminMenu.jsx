import { Menu, MenuItem, Paper } from 'material-ui';
import React from 'react';
import { shape } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import List from 'material-ui/svg-icons/action/view-list';
import ClientList from 'material-ui/svg-icons/action/supervisor-account';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import { clientsUrl, promotionsUrl } from '../../routes';
import { Match } from '../common/types';
import { $red } from '../../styles/variables';

const style = {
  margin: '16px 32px 16px 0'
};

const AdminMenu = ({ match }) => (
  //  todo: add active state
  <Paper style={style}>
    <Menu>
      <Link to={match.url + promotionsUrl()}>
        <MenuItem primaryText="Todas Promociones" leftIcon={<List />} />
      </Link>

      <Link to={match.url + clientsUrl()}>
        <MenuItem primaryText="Clientes" leftIcon={<ClientList />} />
      </Link>

      <MenuItem primaryText="Salir" leftIcon={<Power color={$red} />} />
    </Menu>
  </Paper>
);

AdminMenu.propTypes = { match: shape(Match).isRequired };

export default withRouter(AdminMenu);
