import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const Content = props => (
  <div>
    <div>{props.content}</div>
  </div>
);

Content.defaultProps = {
  content: 'Lorem ipsum dolor est a simply dummy text.'
};
Content.propTypes = {
  content: PropTypes.string
};

const About = () => (
  <div>
    <h1 className="text-orange">About</h1>
    <Paper className="paper">
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
      <div>Lorem ipsum dolor est a simply dummy text.</div>
    </Paper>
  </div>
);

const Main = () => (
  <main className="main">
    <Switch>
      <Route
        path="/about"
        render={({ match }) => {
          if (match) {
            return <About />;
          }
          return false;
        }}
      />
      <Route path="/lunes" render={() => <div>Lunes!!</div>} />
      <Route
        exact
        strict
        path="/"
        render={() => <h1 className="text-orange">Welcome!</h1>}
      />
    </Switch>
  </main>
);

export default Main;
