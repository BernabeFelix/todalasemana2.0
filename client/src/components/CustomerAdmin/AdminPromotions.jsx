import React, { Component } from 'react';
import { List } from 'material-ui';
import { arrayOf, shape } from 'prop-types';
import { History, Match, Promotion } from '../common/types';
import { hasSlashAtTheEnd } from '../../utils/url';
import withPromotions from '../common/HOC/withPromotions';
import AdminPromotion from "./AdminPromotion";

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
    const { promotions } = this.props;

    return (
      <List style={{ backgroundColor: 'white', padding: 0 }}>
        {promotions.map(({ id }) => (
          <AdminPromotion id={id} onClick={this.updateRoute(id)} key={id} />
        ))}
      </List>
    );
  }
}

AdminPromotions.propTypes = {
  history: shape(History).isRequired,
  match: shape(Match).isRequired,
  promotions: arrayOf(shape(Promotion)).isRequired
};

export default withPromotions(AdminPromotions);
