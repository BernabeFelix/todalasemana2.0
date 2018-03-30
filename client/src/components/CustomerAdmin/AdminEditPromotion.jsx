import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { RaisedButton } from 'material-ui';
import fakePromotions from '../../api/promotions';
import Form from '../Auth/Form';
import CustomTextField from '../Auth/CustomTextField';
import { Input } from '../Auth/types';

const controls = {
  title: {
    errors: {
      required: 'Ingrese un titulo'
    },
    fields: {
      name: 'title',
      type: Input.text,
      floatingLabelText: 'titulo'
    }
  },
  description: {
    errors: {
      required: 'Ingrese una descripción'
    },
    fields: {
      name: 'description',
      type: Input.text,
      floatingLabelText: 'descripción'
    }
  }
};

const AdminEditPromotion = ({ id }) => {
  // todo: remove this when redux/apollo is setup
  const { description, imgUrl, title } = fakePromotions.find(
    promo => promo.id === parseInt(id, 10)
  );

  return (
    <div className="admin-edit-promotion">
      {/* Upload Image */}
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

      <Form>
        {(updateValid, shouldValid) => (
          <Fragment>
            {/* Edit Title */}
            <div className="row">
              <div className="col-xs-12 text-center">
                <CustomTextField
                  control={controls.title}
                  initialValue={title}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>

            {/* Edit Description */}
            <div className="row">
              <div className="col-xs-12 text-center">
                <CustomTextField
                  control={controls.description}
                  initialValue={description}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
          </Fragment>
        )}
      </Form>
    </div>
  );
};

AdminEditPromotion.propTypes = {
  id: string.isRequired
};

export default AdminEditPromotion;
