import React from 'react';
import { string } from 'prop-types';
import controls from '../Auth/controls';
import CustomTextField from '../Auth/CustomFormField/CustomTextField';
import fakeClients from '../../api/clients';

const shouldValid = false;

const ClientEdit = ({ id }) => {
  // todo: remove this when redux/apollo is setup
  const {
    email,
    phone,
    address,
    zipCode,
    service,
    lastName,
    firstName
  } = fakeClients.find(client => client.id === parseInt(id, 10));

  return (
    <div style={{ backgroundColor: 'white', padding: 20 }}>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.firstName}
            shouldValid={shouldValid}
            initialValue={firstName}
            readOnly
          />
        </div>
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.lastName}
            shouldValid={shouldValid}
            initialValue={lastName}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.address}
            shouldValid={shouldValid}
            initialValue={address}
            readOnly
          />
        </div>
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.zipCode}
            shouldValid={shouldValid}
            initialValue={zipCode}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.phone}
            shouldValid={shouldValid}
            initialValue={phone}
            readOnly
          />
        </div>
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.service}
            shouldValid={shouldValid}
            initialValue={service}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs text-center">
          <CustomTextField
            control={controls.email}
            shouldValid={shouldValid}
            initialValue={email}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

ClientEdit.propTypes = {
  id: string.isRequired
};

export default ClientEdit;
