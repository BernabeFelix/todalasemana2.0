import React, { Component } from 'react';
import { List } from 'material-ui';
import { arrayOf, string, shape } from 'prop-types';
import { Customer, History, Match } from '../common/types';
import CustomerListItem from './CustomerListItem';
import withCustomers from '../common/HOC/withCustomers';

class CustomerList extends Component {
  updateRoute = id => () => {
    const { match, history } = this.props;
    const newRoute = `${match.url}/${id}`;

    history.push(newRoute);
  };

  goToPromotions = () => {
    const { history, promotionListPath } = this.props;

    history.push(promotionListPath);
  };

  render() {
    const { customers } = this.props;
    //  todo: create a 'no promotions message'
    if (!customers) return null;

    return (
      <List style={{ backgroundColor: 'white', padding: 0 }}>
        {customers.map(customer => (
          <CustomerListItem
            onPromotionsClick={this.goToPromotions}
            onClick={this.updateRoute(customer.id)}
            customer={customer}
            key={customer.id}
          />
        ))}
      </List>
    );
  }
}

CustomerList.propTypes = {
  history: shape(History).isRequired,
  match: shape(Match).isRequired,
  promotionListPath: string.isRequired,
  customers: arrayOf(shape(Customer)).isRequired
};

export default withCustomers(CustomerList);
