import React, { Fragment } from 'react';
import controls from './controls';
import CustomTextField from './CustomTextField';
import Form from './Form';

const SignUp = () => (
  <Form>
    {(updateValid, shouldValid) => (
      <Fragment>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.firstName}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.lastName}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.address}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.zipCode}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.phone}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.service}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <CustomTextField
              control={controls.email}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.password}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <CustomTextField
              control={controls.password}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
      </Fragment>
    )}
  </Form>
);

export default SignUp;
