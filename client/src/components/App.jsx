import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { Provider as Redux } from 'react-redux';
import Content from './Content';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import { $blueCool } from '../styles/variables';
import configureStore from '../store/store';

const promosTheme = getMuiTheme({
  textField: {
    focusColor: $blueCool,
    hintColor: $blueCool
  },
  raisedButton: {
    primaryColor: $blueCool
  }
});

const client = new ApolloClient({ uri: 'http://0.0.0.0:5000/graphql' });
const store = configureStore();


const App = () => (
  <MuiThemeProvider muiTheme={promosTheme}>
    <Redux store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header />
            <Content />
            <Footer />
          </Fragment>
        </Router>
      </ApolloProvider>
    </Redux>
  </MuiThemeProvider>
);

export default App;
