import React from 'react';
import controls from '../Auth/controls';
import CustomTextField from '../Auth/CustomFormField/CustomTextField';

const shouldValid = false;

const ClientEdit = () => (
  <div style={{ backgroundColor: 'white', padding: 20 }}>
    <div className="row">
      <div className="col-xs text-center">
        <CustomTextField
          control={controls.firstName}
          shouldValid={shouldValid}
          readOnly
        />
      </div>
      <div className="col-xs text-center">
        <CustomTextField
          control={controls.lastName}
          shouldValid={shouldValid}
          readOnly
        />
      </div>
    </div>
    <div className="row">
      <div className="col-xs text-center">
        <CustomTextField
          control={controls.address}
          shouldValid={shouldValid}
          readOnly
        />
      </div>
      <div className="col-xs text-center">
        <CustomTextField
          control={controls.zipCode}
          shouldValid={shouldValid}
          readOnly
        />
      </div>
    </div>
    <div className="row">
      <div className="col-xs text-center">
        <CustomTextField
          control={controls.phone}
          shouldValid={shouldValid}
          readOnly
        />
      </div>
      <div className="col-xs text-center">
        <CustomTextField
          control={controls.service}
          shouldValid={shouldValid}
          readOnly
        />
      </div>
    </div>
    <div className="row">
      <div className="col-xs text-center">
        <CustomTextField
          control={controls.email}
          shouldValid={shouldValid}
          readOnly
        />
      </div>
    </div>
  </div>
);

export default ClientEdit;
