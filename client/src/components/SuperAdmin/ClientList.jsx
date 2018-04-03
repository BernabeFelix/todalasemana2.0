import React, { Component } from 'react';
import { List } from 'material-ui';
import { arrayOf, shape } from 'prop-types';
import { Client, History, Match } from '../../types';
import fakeClients from '../../api/clients';
import ClientItem from './ClientItem';

class ClientList extends Component {
  updateRoute = id => () => {
    const { match, history } = this.props;
    const newRoute = `${match.url}/${id}`;

    history.push(newRoute);
  };

  render() {
    const { clients } = this.props;
    //  todo: create a 'no promotions message'
    if (!clients) return null;

    return (
      <List style={{ backgroundColor: 'white' }}>
        {clients.map(({ id }) => (
          <ClientItem id={id} onClick={this.updateRoute(id)} key={id} />
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
  clients: arrayOf(shape(Client))
};

export default ClientList;
