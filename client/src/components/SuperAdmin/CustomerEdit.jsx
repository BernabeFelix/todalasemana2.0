import React from 'react';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux';
import controls from '../Auth/controls';
import CustomTextField from '../Auth/CustomFormField/CustomTextField';
import { fetchCustomer } from '../../store/customers/actions-creators';
import { Customer } from '../common/types';

const shouldValid = false;

const CustomerEdit = ({ customer }) => {
  if (!customer) return null;

  const {
    email,
    phone,
    address,
    zipCode,
    service,
    lastName,
    firstName
  } = customer;

  return (
    <div style={{ backgroundColor: 'white', padding: 20 }}>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.firstName}
            shouldValid={shouldValid}
            initialValue={firstName}
            readOnly
          />
        </div>
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.lastName}
            shouldValid={shouldValid}
            initialValue={lastName}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.address}
            shouldValid={shouldValid}
            initialValue={address}
            readOnly
          />
        </div>
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.zipCode}
            shouldValid={shouldValid}
            initialValue={zipCode}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.phone}
            shouldValid={shouldValid}
            initialValue={phone}
            readOnly
          />
        </div>
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.service}
            shouldValid={shouldValid}
            initialValue={service}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.email}
            shouldValid={shouldValid}
            initialValue={email}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

CustomerEdit.propTypes = {
  /* eslint-disable-next-line react/no-unused-prop-types */
  id: string.isRequired,
  customer: shape(Customer).isRequired
};

export default connect(
  (state, { id }) =>
    state.customers.data.length
      ? { customer: state.customers.data.find(customer => customer.id === id) }
      : { customer: {} },
  { fetchCustomer }
)(CustomerEdit);
