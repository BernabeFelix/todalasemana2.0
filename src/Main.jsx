import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    <div>
      <main>
        <div>
          <Route exact path="/" component={Content} />
          <Route exact path="/lunes" component={Content} />
          <Route exact path="/martes" component={Content} />
        </div>
      </main>
    </div>
  </BrowserRouter>
);

export default Main;
