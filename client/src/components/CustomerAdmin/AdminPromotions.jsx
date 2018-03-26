import { List } from 'material-ui';
import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import fakePromotions from '../../api/promotions';
import { Promotion } from '../Home/types';
import AdminPromotion from './AdminPromotion';
import { Match } from '../../types';

const AdminPromotions = ({ match, promotions }) => {
  //  todo: create a 'no promotions message'
  if (!promotions) return null;

  return (
    <List style={{ backgroundColor: 'white' }}>
      {promotions.map(({ id }) => (
        <Link to={`${match.url}/${id}`} key={id}>
          <AdminPromotion id={id} />
        </Link>
      ))}
    </List>
  );
};

AdminPromotions.defaultProps = {
  promotions: fakePromotions
};

AdminPromotions.propTypes = {
  match: shape(Match).isRequired,
  promotions: arrayOf(shape(Promotion))
};

export default AdminPromotions;
