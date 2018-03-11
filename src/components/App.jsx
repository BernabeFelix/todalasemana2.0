import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from './Content';
import Header from './common/Header';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Fragment>
        <Header />
        <Content />
        <div className="row">
          <div
            className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4"
          >
            <div className="box">Responsive</div>
          </div>
        </div>
      </Fragment>
    </Router>
  </MuiThemeProvider>
);

export default App;
