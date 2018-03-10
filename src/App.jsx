import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Content';
import Header from './components/common/Header';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    </Router>
  </MuiThemeProvider>
);

export default App;
