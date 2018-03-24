import React from 'react';
import CustomTextField from './CustomTextField';
import controls from './controls';
import Form from './Form';

const Login = () => (
  <Form>
    {(updateValid, shouldValid) => (
      <div className="login">
        <div className="row">
          <div className="col-xs-12 text-center">
            <CustomTextField
              control={controls.user}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <CustomTextField
              control={controls.password}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
      </div>
    )}
  </Form>
);

export default Login;
