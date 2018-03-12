import React, { Fragment } from 'react';
// import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import SideNav from '../SideNav/SideNav';

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
          title="Toda la semana"
          className="header"
          iconElementLeft={<img className="navbar-left-logo-img" alt="" />}
          onLeftIconButtonClick={this.toggleDrawer}
          iconElementRight={
            <Fragment>
              <div className="header-right-nav">
                <Link to="/lunes" className="header-right-nav-btn">
                  LUNES
                </Link>
                <span className="header-right-nav-divider"> | </span>
                <Link to="/martes" className="header-right-nav-btn">
                  Martes
                </Link>
                <span className="header-right-nav-divider"> | </span>
                <Link to="/miercoles" className="header-right-nav-btn">
                  Miercoles
                </Link>
                <span className="header-right-nav-divider"> | </span>
                <Link to="/jueves" className="header-right-nav-btn">
                  Jueves
                </Link>
                <span className="header-right-nav-divider"> | </span>
                <Link to="/viernes" className="header-right-nav-btn">
                  Viernes
                </Link>
                <span className="header-right-nav-divider"> | </span>
                <Link to="/sabado" className="header-right-nav-btn">
                  Sabado
                </Link>
                <span className="header-right-nav-divider"> | </span>
                <Link to="/domingo" className="header-right-nav-btn">
                  Domingo
                </Link>
              </div>
              <div className="header-right-nav">
                <Link to="/entrar" className="header-right-nav-btn">
                  Entrar
                </Link>
              </div>
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
