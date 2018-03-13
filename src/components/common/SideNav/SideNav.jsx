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
            Toda<span className="text-orange">la</span>semana.com
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

/*


        <Link to="/lunes" title="Lunes">
          <MenuItem className="menu-item">Lunes</MenuItem>
        </Link>
        <Link to="/martes" title="martes">
          <MenuItem className="menu-item">Martes</MenuItem>
        </Link>
        <Link to="/miercoles" title="miercoles">
          <MenuItem className="menu-item">Miercoles</MenuItem>
        </Link>
        <Link to="/jueves" title="jueves">
          <MenuItem className="menu-item">Jueves</MenuItem>
        </Link>
        <Link to="/viernes" title="viernes">
          <MenuItem className="menu-item">Viernes</MenuItem>
        </Link>
        <Link to="/sabado" title="sabado">
          <MenuItem className="menu-item">Sabado</MenuItem>
        </Link>
        <Link to="/domingo" title="Domingo">
          <MenuItem className="menu-item">Domingo</MenuItem>
        </Link>
*/

export default SideNav;
