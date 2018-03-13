import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { string, func } from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { dayUrl } from '../../../routes';

const Day = props => (
  <Fragment>
    <Link to={dayUrl({ day: props.dayName })}>
      <MenuItem
        className="menu-item sidenav-day-menu"
        onClick={props.onCloseDrawer}
      >
        {props.dayName}
      </MenuItem>
    </Link>
  </Fragment>
);

Day.propTypes = {
  dayName: string.isRequired,
  onCloseDrawer: func.isRequired
};

export default Day;
