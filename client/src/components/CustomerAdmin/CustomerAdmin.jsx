import React from 'react';
import { Route } from 'react-router-dom';
import { adminPromotionsUrl } from '../../routes';
import AdminMenu from './AdminMenu';
import AdminPromotions from './AdminPromotions';

const CustomerAdmin = () => (
  <div className="row">
    <div className="col-sm-3">
      <AdminMenu />
    </div>

    <div className="col-sm">
      <Route path={adminPromotionsUrl()} component={AdminPromotions} />
    </div>
  </div>
);

export default CustomerAdmin;
