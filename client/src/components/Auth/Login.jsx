import React from 'react';
// import { Link } from 'react-router-dom';
import CustomTextField from './CustomTextField';
import controls from './controls';
import Form from './Form';

const Login = () => (
  <Form isLogin>
    {(updateValid, shouldValid) => (
      <div className="login">
        <div className="row">
          <div className="col-xs-12">
            <CustomTextField
              control={controls.user}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <CustomTextField
              control={controls.password}
              onValidChange={updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <span className="recover-password">Recuperar contraseña</span>
      </div>
    )}
  </Form>
);

export default Login;
