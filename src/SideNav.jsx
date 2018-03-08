import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
// import RaisedButton from 'material-ui/RaisedButton';

// export default class SideNav extends React.Component {
//   render() {
//     return (
//       <div>
//         <Drawer
//           docked={false}
//           width={200}
//           open={this.props.open}
//           onRequestChange={this.props.onCloseDrawer}
//         >
//           {/*  */}
//           <MenuItem onClick={this.props.onCloseDrawer}>Menu Item</MenuItem>
//           <MenuItem onClick={this.props.onCloseDrawer}>Menu Item 2</MenuItem>
//         </Drawer>
//       </div>
//     );
//   }
// }

const SideNav = props => (
  <div>
    <Drawer
      docked={false}
      width={200}
      open={props.open}
      onRequestChange={props.onCloseDrawer}
    >
      {/*  */}
      <MenuItem onClick={props.onCloseDrawer}>Menu Item</MenuItem>
      <MenuItem onClick={props.onCloseDrawer}>Menu Item 2</MenuItem>
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
