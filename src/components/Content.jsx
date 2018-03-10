import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Content = () => (
  <main className="main">
    <Switch>
      <Route path="/about" render={() => <h1>Im about</h1>} />
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

export default Content;
