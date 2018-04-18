import React, { Component, Fragment } from 'react';
import { shape, string, bool } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import { withRouter } from 'react-router-dom';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import CustomerMenu from './CustomerMenu';
import AdminMenu from './AdminMenu';
import Auth from '../../../api/auth/Auth';
import { $blueCool, $red } from '../../../styles/variables';
import { homeUrl } from '../../../routes';

class UserMenu extends Component {
  state = {
    open: false
  };

  openMenu = event => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  logout = async () => {
    const auth = new Auth();
    await auth.logout();

    this.props.history.push(homeUrl());
  };

  render() {
    const { userName, isAdmin } = this.props;

    return (
      <Fragment>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          onRequestClose={this.closeMenu}
        >
          {isAdmin ? (
            <AdminMenu closeMenu={this.closeMenu} logout={this.logout} />
          ) : (
            <CustomerMenu closeMenu={this.closeMenu} logout={this.logout} />
          )}
        </Popover>
        <div className="header-right-nav">
          <FlatButton
            label={userName}
            className="header-right-nav-btn"
            hoverColor="transparent"
            rippleColor="transparent !important"
            labelPosition="before"
            icon={<AccountCircle color={$blueCool} hoverColor={$red} />}
            onClick={this.openMenu}
          />
        </div>
      </Fragment>
    );
  }
}

UserMenu.defaultProps = {
  isAdmin: false
};

UserMenu.propTypes = {
  userName: string.isRequired,
  isAdmin: bool,
  history: shape(History).isRequired
};

export default withRouter(UserMenu);
