import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { RaisedButton } from 'material-ui';
import Dropzone from 'react-dropzone';
import fakePromotions from '../../../api/promotions';
import Form from '../../Auth/Form';
import CustomTextField from '../../Auth/CustomFormField/CustomTextField';
import controls from './controls';

const dropZoneStyle = {
  width: 'auto',
  height: 'auto',
  border: 'none'
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
          <Dropzone
            style={dropZoneStyle}
            onDropAccepted={files => {
              console.log(files);
            }}
          >
            <RaisedButton
              label="Cambiar Imagen"
              style={{
                margin: 12
              }}
            />
          </Dropzone>
        </div>
      </div>

      <Form submitText="guardar" successText="Guardado correctamente">
        {(updateValid, shouldValid) => (
          <Fragment>
            {/* Edit Title */}
            <div className="row">
              <div className="col-xs text-center">
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
              <div className="col-xs text-center">
                <CustomTextField
                  control={controls.description}
                  initialValue={description}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                  maxLength={200}
                  multiLine
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
