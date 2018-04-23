import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Customer } from '../types';
import { getDisplayName } from '../SnackBar/withSnackBar';
import withCustomers from './withCustomers';

const getCustomer = (state, { email }) => {
  console.log('getcustomer');
  console.log(state);
  console.log(email);
  const cust = state.customers.data.length
    ? {
        customer: state.customers.data.find(
          customer => customer.email === email
        )
      }
    : { customer: {} };
  console.log(cust);
  return cust;
};

const withCustomer = WrappedComponent => {
  const WithCustomer = ({ customer, updateCustomers, ...props }) => (
    <WrappedComponent
      {...props}
      customer={customer}
      updateCustomers={updateCustomers}
    />
  );

  WithCustomer.displayName = `WithCustomer(${getDisplayName(
    WrappedComponent
  )})`;

  WithCustomer.defaultProps = {
    customer: {}
  };

  WithCustomer.propTypes = {
    customer: shape(Customer),
    updateCustomers: func.isRequired
  };

  return withCustomers(connect(getCustomer)(WithCustomer));
};

export default withCustomer;
