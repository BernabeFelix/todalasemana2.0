import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideNav from './components/common/SideNav';
import Main from './Main';
import Header from './components/common/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideNavOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
            <Header onToggleDrawer={this.toggleDrawer} />
            <SideNav
                open={this.state.sideNavOpen}
                onCloseDrawer={this.toggleDrawer}
            />
            <Main />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

// ReactDOM.render(<App style={styles} />, document.getElementById('app'));
