import React from 'react';
import PromotionsResults from './PromotionsResults';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="hide-xs-only col-sm-4">{/* Login / Sign up */}</div>
      <div className="col-xs-12 col-sm-8">
        <PromotionsResults />
      </div>
    </div>
  </div>
);

export default Home;
