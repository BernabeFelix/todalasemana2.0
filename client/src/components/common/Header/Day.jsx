import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { dayUrl } from '../../../routes';

const Day = props => (
  <Fragment>
    <Link to={dayUrl({ day: props.dayName })}>
      <FlatButton
        label={props.dayName}
        className="header-right-nav-btn"
        hoverColor="transparent"
        rippleColor="transparent !important"
        labelStyle={{ fontSize: 12 }}
      />
    </Link>
    {props.showDivider ? (
      <span className="header-right-nav-divider"> | </span>
    ) : null}
  </Fragment>
);

Day.defaultProps = {
  showDivider: false
};

Day.propTypes = {
  dayName: string.isRequired,
  showDivider: bool
};

export default Day;
