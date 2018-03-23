import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import Day from './Day';

const SideNav = props => (
  <Drawer
    docked={false}
    open={props.open}
    onRequestChange={props.onCloseDrawer}
    containerClassName="sidenav"
  >
    <Link to="/" onClick={props.onCloseDrawer}>
      <div className="logo">
        <h3>
          <span>
            Toda<span className="text-red">la</span>semana.com
          </span>
        </h3>
        <span className="slogan">Online & Mobile Marketing</span>
      </div>
    </Link>
    <Day dayName="lunes" onCloseDrawer={props.onCloseDrawer} />
    <Day dayName="martes" onCloseDrawer={props.onCloseDrawer} />
    <Day dayName="miercoles" onCloseDrawer={props.onCloseDrawer} />
    <Day dayName="jueves" onCloseDrawer={props.onCloseDrawer} />
    <Day dayName="viernes" onCloseDrawer={props.onCloseDrawer} />
    <Day dayName="sabado" onCloseDrawer={props.onCloseDrawer} />
    <Day dayName="domingo" onCloseDrawer={props.onCloseDrawer} />
  </Drawer>
);

SideNav.defaultProps = {
  open: false
};

SideNav.propTypes = {
  open: PropTypes.bool,
  onCloseDrawer: PropTypes.func.isRequired
};

export default SideNav;
