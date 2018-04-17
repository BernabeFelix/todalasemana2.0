import React from 'react';
import { string } from 'prop-types';
import { Query } from 'react-apollo';
import NewEditPromotion from '../NewEditPromotion';
import { promotionById } from '../../../api/queries';

const AdminEditPromotion = nestedId => (
  <Query query={promotionById} variables={nestedId}>
    {({ loading, data }) => {
      if (loading) return null;

      return <NewEditPromotion {...data.promotion} />;
    }}
  </Query>
);

AdminEditPromotion.propTypes = {
  id: string.isRequired
};

export default AdminEditPromotion;
