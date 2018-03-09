import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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

const Main = () => (
  <BrowserRouter>
    <main className="main">
      <Paper className="paper">
        <Route
          exact
          path="/"
          render={() => (
            <div>
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
            </div>
          )}
        />
        <Route exact path="/lunes" component={Content} />
        <Route exact path="/martes" component={Content} />
      </Paper>
    </main>
  </BrowserRouter>
);

export default Main;
