import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
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
  state = {
    sideNavOpen: false
  };

  toggleDrawer = () => {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
  };

  render() {
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
              <SignIn />
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

export default Header;
