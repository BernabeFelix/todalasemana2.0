import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Auth from '../../../api/auth/Auth';
import UserMenu from './UserMenu';
import SideNav from '../SideNav/SideNav';
import Day from './Day';
import { homeUrl, signInUrl } from '../../../routes';

const Logo = () => (
  <Link to={homeUrl()}>
    <div className="header-left-logo-img" />
  </Link>
);

const SignIn = () => (
  <div className="header-right-nav">
    <Link to={signInUrl()}>
      <FlatButton
        label="Entrar"
        className="header-right-nav-btn"
        hoverColor="transparent"
        rippleColor="transparent !important"
      />
    </Link>
  </div>
);

class Header extends React.Component {
  constructor() {
    super();
    Auth.auth.onAuthStateChanged(this.handleSessionChange);
  }

  state = {
    sideNavOpen: false
  };

  handleSessionChange = async user => {
    if (user && user.emailVerified) {
      this.setState({
        userEmail: user.email
      });
    }
  };

  toggleDrawer = () => {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
  };

  logout = async () => {
    const auth = new Auth();
    await auth.logout();

    this.setState(
      {
        userEmail: null
      },
      () => this.props.history.push(signInUrl())
    );
  };

  render() {
    const { userEmail } = this.state;
    return (
      <Fragment>
        <AppBar
          title={<Logo />}
          iconElementLeft={
            <IconButton className="header-left-icon">
              <NavigationMenu />
            </IconButton>
          }
          className="header"
          onLeftIconButtonClick={this.toggleDrawer}
          iconElementRight={
            <Fragment>
              <div className="header-right-nav hide-sm">
                <Day dayName="lunes" showDivider />
                <Day dayName="martes" showDivider />
                <Day dayName="miercoles" showDivider />
                <Day dayName="jueves" showDivider />
                <Day dayName="viernes" showDivider />
                <Day dayName="sabado" showDivider />
                <Day dayName="domingo" />
              </div>
              {userEmail ? (
                <UserMenu email={userEmail} logout={this.logout} />
              ) : (
                <SignIn />
              )}
            </Fragment>
          }
        />

        <SideNav
          open={this.state.sideNavOpen}
          onCloseDrawer={this.toggleDrawer}
        />
      </Fragment>
    );
  }
}

Header.propTypes = {
  history: shape(History).isRequired
};

export default withRouter(Header);
