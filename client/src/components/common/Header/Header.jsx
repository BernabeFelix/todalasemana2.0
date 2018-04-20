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
    sideNavOpen: false,
    userName: null
  };

  handleSessionChange = user => {
    // For now, this line controls what menu will be shown in header (either admin or customer)
    // TODO: refactor once we have roles in backend
    const isAdmin = false;
    this.setState({
      userName: user && user.emailVerified ? user.email : null,
      isAdmin
    });
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
        userName: null,
        isAdmin: null
      },
      () => this.props.history.push(signInUrl())
    );
  };

  render() {
    const { userName, isAdmin } = this.state;
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
              {userName ? (
                <UserMenu
                  userName={userName}
                  isAdmin={isAdmin}
                  logout={this.logout}
                />
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
