import { Menu, MenuItem, Paper } from 'material-ui';
import React from 'react';
import { shape } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Add from 'material-ui/svg-icons/content/add';
import List from 'material-ui/svg-icons/action/view-list';
import Account from 'material-ui/svg-icons/action/account-box';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import { accountUrl, newPromotionUrl, promotionsUrl } from '../../routes';
import { Match } from '../../types';
import { $blueCool, $red } from '../../styles/variables';

const style = {
  margin: '16px 32px 16px 0'
};

const AdminMenu = ({ match }) => (
  //  todo: add active state
  <Paper style={style}>
    <Menu>
      <Link to={match.url + newPromotionUrl()}>
        <MenuItem
          primaryText="Nueva Promocion"
          leftIcon={<Add color={$blueCool} />}
        />
      </Link>
      <Link to={match.url + promotionsUrl()}>
        <MenuItem primaryText="Promociones" leftIcon={<List />} />
      </Link>
      <Link to={match.url + accountUrl()}>
        <MenuItem primaryText="Cuenta" leftIcon={<Account />} />
      </Link>

      <MenuItem primaryText="Salir" leftIcon={<Power color={$red} />} />
    </Menu>
  </Paper>
);

AdminMenu.propTypes = { match: shape(Match).isRequired };

export default withRouter(AdminMenu);
