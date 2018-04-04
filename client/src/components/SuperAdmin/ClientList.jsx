import React, { Component } from 'react';
import { List } from 'material-ui';
import { arrayOf, bool, number, string, shape } from 'prop-types';
import { History, Match } from '../common/types';
import fakeClients from '../../api/clients';
import ClientListItem from './ClientListItem';

class ClientList extends Component {
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
    const { clients } = this.props;
    //  todo: create a 'no promotions message'
    if (!clients) return null;

    return (
      <List style={{ backgroundColor: 'white', padding: 0 }}>
        {clients.map(({ id }) => (
          <ClientListItem
            onPromotionsClick={this.goToPromotions}
            id={id}
            onClick={this.updateRoute(id)}
            key={id}
          />
        ))}
      </List>
    );
  }
}

ClientList.defaultProps = {
  clients: fakeClients
};

ClientList.propTypes = {
  history: shape(History).isRequired,
  match: shape(Match).isRequired,
  promotionListPath: string.isRequired,
  clients: arrayOf(
    shape({
      id: number.isRequired,
      firstName: string.isRequired,
      lastName: string.isRequired,
      isActive: bool.isRequired,
      dateCreated: string.isRequired
    })
  )
};

export default ClientList;
