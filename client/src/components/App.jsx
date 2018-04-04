import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import Content from './Content';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

// TODO: replace this colors by variables.js proper color
const colors = {
  blueCool: '#1f8f8f'
};
const promosTheme = getMuiTheme({
  textField: {
    focusColor: colors.blueCool,
    hintColor: colors.blueCool
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
