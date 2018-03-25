import React from 'react';
import { Route } from 'react-router-dom';
import { adminSlugs, adminUrl } from '../../routes';
import AdminMenu from './AdminMenu';
import AdminPromotions from './AdminPromotions';

const CustomerAdmin = () => (
  <div className="row">
    <div className="col-sm-3">
      <AdminMenu />
    </div>

    <div className="col-sm-8 col-md-5">
      <Route
        path={adminUrl({ slug: adminSlugs.promociones })}
        component={AdminPromotions}
      />
    </div>
  </div>
);

export default CustomerAdmin;
