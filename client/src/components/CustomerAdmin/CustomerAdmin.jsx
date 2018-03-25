import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import { promotionsUrl } from '../../routes';
import { Match } from '../../types';
import AdminMenu from './AdminMenu';
import AdminPromotions from './AdminPromotions';

const CustomerAdmin = ({ match }) => (
  <div className="row">
    <div className="col-sm-3">
      <AdminMenu />
    </div>

    <div className="col-sm-8 col-md-5">
      <Route path={match.url + promotionsUrl()} component={AdminPromotions} />
    </div>
  </div>
);

CustomerAdmin.propTypes = { match: shape(Match).isRequired };

export default withRouter(CustomerAdmin);
