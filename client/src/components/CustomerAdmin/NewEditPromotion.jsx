import React, { Component, Fragment } from 'react';
import { RaisedButton } from 'material-ui';
import controls from './AdminEditPromotion/controls';
import Form from '../Auth/Form';
import CustomTextField from '../Auth/CustomFormField/CustomTextField';
import { NewPromotion } from '../common/types';

// const dropZoneStyle = {
//   width: 'auto',
//   height: 'auto',
//   border: 'none'
// };

class NewEditPromotion extends Component {
  addEditPromotion = () => {};

  render() {
    const { description, imgUrl, title } = this.props;

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

        <Form
          submitText="guardar"
          successText="Guardado correctamente"
          onSubmit={this.addEditPromotion}
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
            </Fragment>
          )}
        </Form>
      </div>
    );
  }
}

NewEditPromotion.propTypes = NewPromotion;

export default NewEditPromotion;
