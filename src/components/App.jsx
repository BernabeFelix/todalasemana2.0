import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from './Content';
import Header from './common/Header/Header';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    </Router>
  </MuiThemeProvider>
);

export default App;
