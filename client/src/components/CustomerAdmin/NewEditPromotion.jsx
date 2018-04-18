import React, { Fragment } from 'react';
import { RaisedButton } from 'material-ui';
import { func } from 'prop-types';
import controls from './AdminEditPromotion/controls';
import Form from '../common/Form';
import CustomTextField from '../Auth/CustomFormField/CustomTextField';
import { NewPromotion } from '../common/types';
import SearchBox from '../Map/SearchBox';

// todo: keep this until dropZone is implemented or removed
// const dropZoneStyle = {
//   width: 'auto',
//   height: 'auto',
//   border: 'none'
// };

const NewEditPromotion = ({ description, imgUrl, title, onSubmit }) => (
  <div className="admin-edit-promotion">
    {/* Upload Image */}
    <div className="row image-row">
      <div className="col-xs-6 image-wrapper">
        <div className="image" style={{ backgroundImage: `url(${imgUrl})` }} />
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

    <Form
      submitText="guardar"
      successText="Guardado correctamente"
      onSubmit={onSubmit}
    >
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
          <div className="row">
            <div className="col-xs text-center">
              <SearchBox
                control={controls.address}
                onValidChange={updateValid}
                shouldValid={shouldValid}
                onPlacesChanged={location => console.log(location)}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Form>
  </div>
);

NewEditPromotion.propTypes = {
  onSubmit: func.isRequired,
  ...NewPromotion
};

export default NewEditPromotion;
