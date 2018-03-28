import React from 'react';
import { number } from 'prop-types';
import { RaisedButton } from 'material-ui';
import fakePromotions from '../../api/promotions';

const AdminEditPromotion = ({ id }) => {
  // todo: remove this when redux/apollo is setup
  const { description, imgUrl, title } = fakePromotions.find(
    promo => promo.id === parseInt(id, 10)
  );

  return (
    <div className="admin-edit-promotion">
      {/* Image */}
      <div className="row image-row">
        <div className="col-xs-6 image-wrapper">
          <div
            className="image"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        </div>
        <div className="col-xs-6">
          <RaisedButton
            label="Cambiar Imagen"
            style={{
              margin: 12
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs">
          <input type="text" value={title} />
        </div>
      </div>

      <div className="row">
        <div className="col-xs">
          <textarea value={description} />
        </div>
      </div>
    </div>
  );
};

AdminEditPromotion.propTypes = {
  id: number.isRequired
};

export default AdminEditPromotion;
