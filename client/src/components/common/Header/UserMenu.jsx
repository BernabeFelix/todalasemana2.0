import React, { Component, Fragment } from 'react';
import { func, shape } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import { withRouter } from 'react-router-dom';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import withCustomer from '../HOC/withCustomer';
import CustomerMenu from './CustomerMenu';
import AdminMenu from './AdminMenu';
import { $blueCool, $red } from '../../../styles/variables';
import { Customer } from '../types';

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

  render() {
    const { customer } = this.props;
    customer.isAdmin = true; // TODO change for the actual value from database once it is implemented
    const { firstName, isAdmin } = customer;
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
            <AdminMenu closeMenu={this.closeMenu} logout={this.props.logout} />
          ) : (
            <CustomerMenu
              closeMenu={this.closeMenu}
              logout={this.props.logout}
            />
          )}
        </Popover>
        <div className="header-right-nav">
          <FlatButton
            label={firstName}
            className="header-right-nav-btn"
            hoverColor="transparent"
            rippleColor="transparent !important"
            labelPosition="before"
            icon={<AccountCircle color={$blueCool} hoverColor={$red} />}
            labelStyle={{ fontSize: 12 }}
            onClick={this.openMenu}
          />
        </div>
      </Fragment>
    );
  }
}

UserMenu.propTypes = {
  customer: shape(Customer).isRequired,
  logout: func.isRequired
};

export default withCustomer(withRouter(UserMenu));
