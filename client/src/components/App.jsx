import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import Content from './Content';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import { $blueCool } from '../styles/variables';

const promosTheme = getMuiTheme({
  textField: {
    focusColor: $blueCool,
    hintColor: $blueCool
  },
  raisedButton: {
    primaryColor: $blueCool
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={promosTheme}>
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
