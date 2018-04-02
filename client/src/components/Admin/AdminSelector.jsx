import React from 'react';
import { bool } from 'prop-types';
import CustomerAdmin from '../CustomerAdmin/CustomerAdmin';
import SuperAdmin from '../SuperAdmin/SuperAdmin';

const AdminSelector = ({ isSuper }) => (isSuper ? <SuperAdmin /> : <CustomerAdmin />);

AdminSelector.defaultProps = {
  isSuper: false
};

AdminSelector.propTypes = {
  isSuper: bool
};

export default AdminSelector;
