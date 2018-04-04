import React, { Component } from 'react';
import { List } from 'material-ui';
import { arrayOf, shape } from 'prop-types';
import fakePromotions from '../../api/promotions';
import AdminPromotion from './AdminPromotion';
import { History, Match, Promotion } from '../common/types';

class AdminPromotions extends Component {
  updateRoute = id => () => {
    const { match, history } = this.props;
    const newRoute = `${match.url}/${id}`;

    history.push(newRoute);
  };

  render() {
    const { promotions } = this.props;
    //  todo: create a 'no promotions message'
    if (!promotions) return null;

    return (
      <List style={{ backgroundColor: 'white' }}>
        {promotions.map(({ id }) => (
          <AdminPromotion id={id} onClick={this.updateRoute(id)} key={id} />
        ))}
      </List>
    );
  }
}

AdminPromotions.defaultProps = {
  promotions: fakePromotions
};

AdminPromotions.propTypes = {
  history: shape(History).isRequired,
  match: shape(Match).isRequired,
  promotions: arrayOf(shape(Promotion))
};

export default AdminPromotions;
