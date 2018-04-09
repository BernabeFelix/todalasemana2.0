import React, { Component } from 'react';
import { List } from 'material-ui';
import { shape } from 'prop-types';
import { gql } from 'apollo-boost/lib/index';
import { Query } from 'react-apollo';
import AdminPromotion from './AdminPromotion';
import { History, Match } from '../common/types';
import { hasSlashAtTheEnd } from '../../utils/url';

const query = gql`
  {
    promotions {
      id
    }
  }
`;

class AdminPromotions extends Component {
  updateRoute = id => () => {
    const { match, history } = this.props;
    const currentUrl = match.url;
    const newRoute = `${currentUrl}${
      !hasSlashAtTheEnd(currentUrl) ? '/' : ''
    }${id}`;

    history.push(newRoute);
  };

  render() {
    return (
      <Query query={query}>
        {({ loading, data }) => {
          //  todo: create a 'no promotions message'
          if (loading) return null;

          return (
            <List style={{ backgroundColor: 'white', padding: 0 }}>
              {data.promotions.map(({ id }) => (
                <AdminPromotion
                  id={id}
                  onClick={this.updateRoute(id)}
                  key={id}
                />
              ))}
            </List>
          );
        }}
      </Query>
    );
  }
}

AdminPromotions.propTypes = {
  history: shape(History).isRequired,
  match: shape(Match).isRequired
};

export default AdminPromotions;
