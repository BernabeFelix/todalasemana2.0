import React from 'react';
import PromotionsResults from './PromotionsResults';
// import Map from '../Map/Map';
// import UserLocation from '../Map/UserLocation';

const Home = () => (
  <div className="container">
    <div className="row">
      {/*  <div className="hide-xs-only col-sm-4">Login / Sign up</div>  */}
      <div className="col-xs-12 col-sm-6 col-md-4">
        <h2>Promociones del día</h2>
        <PromotionsResults />
      </div>

      <div className="col-xs-12 col-sm-6">
        {/*  todo: just uncomment for demo  */}
        {/* <UserLocation> */}
        {/* {location => ( */}
        {/* <React.Fragment> */}
        {/* <h4>{location.lat}</h4> */}
        {/* <h4>{location.lng}</h4> */}
        {/* </React.Fragment> */}
        {/* )} */}
        {/* </UserLocation> */}
        {/*  todo: just uncomment for demo  */}
        {/* <Map */}
        {/* markers={[ */}
        {/* { */}
        {/* title: 'Bonvoné', */}
        {/* location: */}
        {/* 'Bonvoné, Avenida Providencia, Providencia 3a. Sección, Guadalajara, Jalisco' */}
        {/* } */}
        {/* ]} */}
        {/* /> */}
      </div>
    </div>
  </div>
);

export default Home;
