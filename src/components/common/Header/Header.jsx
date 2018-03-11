import React, { Fragment } from 'react';
import FlatButton from 'material-ui/FlatButton';
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
          onLeftIconButtonClick={this.toggleDrawer}
          iconElementRight={
            <FlatButton
              label="Martes"
              containerElement={<Link to="signin" />}
            />
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
