import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Subheader from 'material-ui/Subheader';
// import ArrowDropRight from 'material-ui/svg-icons/navigation/arrow-downward';
import PropTypes from 'prop-types';
// import styles from './styles.scss';

// const styles = {
//   container: {
//     backgroundColor: '#b5e2f5'
//   }
// };
// console.log(styles);

const SideNav = props => (
  <div>
    {/* width={250} */}
    <Drawer
      docked={false}
      open={props.open}
      onRequestChange={props.onCloseDrawer}
      containerClassName="sidenav"
    >
      <div className="logo">
        <h3>
          <span>
            Toda<span className="text-orange">la</span>semana.com
          </span>
        </h3>
        <span className="slogan">Online & Mobile Marketing</span>
      </div>
      <Menu
        onClick={props.onCloseDrawer}
        width={250}
        listStyle={{ width: '250px' }}
        className="menu"
      >
        <Subheader className="subheader text-white">
          Elije el día de tu preferencia
        </Subheader>
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
        <Link to="/Domingo" title="Domingo">
          <MenuItem className="menu-item">Domingo</MenuItem>
        </Link>
      </Menu>
    </Drawer>
  </div>
);

SideNav.defaultProps = {
  open: false
};

SideNav.propTypes = {
  open: PropTypes.bool,
  onCloseDrawer: PropTypes.func.isRequired
};

export default SideNav;
