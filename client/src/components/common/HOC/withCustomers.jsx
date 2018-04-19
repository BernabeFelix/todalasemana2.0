import React, { Component } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Promotion } from '../types';
import { getDisplayName } from '../SnackBar/withSnackBar';
import { fetchCustomers } from '../../../store/customers/actions-creators';

const withCustomers = WrappedComponent => {
  class WithCustomers extends Component {
    componentDidMount() {
      if (!this.props.customers.length) {
        this.props.fetchCustomers();
      }
    }

    forceUpdate = () => {
      this.props.fetchCustomers();
    };

    render() {
      const { customers } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          customers={customers}
          updateCustomers={this.forceUpdate}
        />
      );
    }
  }

  WithCustomers.displayName = `WithCustomers(${getDisplayName(
    WrappedComponent
  )})`;

  WithCustomers.propTypes = {
    customers: arrayOf(shape(Promotion)).isRequired,
    fetchCustomers: func.isRequired
  };

  return connect(
    state => ({
      customers: state.customers.data
    }),
    {
      fetchCustomers
    }
  )(WithCustomers);
};

export default withCustomers;
