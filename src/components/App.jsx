import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from './Content';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    </Router>
  </MuiThemeProvider>
);

export default App;
