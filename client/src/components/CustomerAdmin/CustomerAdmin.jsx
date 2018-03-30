import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import { promotionsUrl } from '../../routes';
import { Location, Match } from '../../types';
import AdminMenu from './AdminMenu';
import AdminPromotions from './AdminPromotions';
import AdminEditPromotion from './AdminEditPromotion/AdminEditPromotion';

/* eslint-disable arrow-body-style */
const CustomerAdmin = ({ location, match }) => {
  const noPromoOpen = location.pathname === match.url + promotionsUrl();
  const promotionListCol = noPromoOpen ? 5 : 4;
  const promotionCol = noPromoOpen ? 4 : 5;

  return (
    <div className="row">
      <div className="col-lg-3">
        <AdminMenu />
      </div>

      <div className={`col-lg-${promotionListCol} max-width-transition`}>
        <Route path={match.url + promotionsUrl()} component={AdminPromotions} />
      </div>

      <div className={`col-lg-${promotionCol} max-width-transition`}>
        <Route
          exact
          path={`${match.url}${promotionsUrl()}/:id`}
          render={props => <AdminEditPromotion id={props.match.params.id} />}
        />
      </div>
    </div>
  );
};

CustomerAdmin.propTypes = {
  location: shape(Location).isRequired,
  match: shape(Match).isRequired
};

export default withRouter(CustomerAdmin);
