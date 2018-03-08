import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideNav from './SideNav';
import Main from './Main';
import Header from './Header';
import styles from './styles.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideNavOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  // Toggle function (open/close Drawer)
  toggleDrawer() {
    console.log(`DRAWER IS: ${this.state.sideNavOpen}`);
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
    console.log(`DRAWER IS: ${this.state.sideNavOpen}`);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header onToggleDrawer={this.toggleDrawer} />
            <SideNav
              open={this.state.sideNavOpen}
              onCloseDrawer={this.toggleDrawer}
            />
            <Main />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

// const App = () => (
//   <MuiThemeProvider>
//     <Router>
//       <div>
//         <Header />
//         <SideNav />
//         <Main />
//       </div>
//     </Router>
//   </MuiThemeProvider>
// );

export default App;

ReactDOM.render(<App style={styles} />, document.getElementById('app'));
