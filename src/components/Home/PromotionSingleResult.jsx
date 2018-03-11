import React from 'react';
import { Link } from 'react-router-dom';
import { promotionUrl } from '../../routes';
import { Promotion } from './types';

const PromotionSingleResult = ({ description, id, imgUrl, title }) => (
  <Link className="row promotion-single-result" to={promotionUrl({ id })}>
    <div className="col-xs-12 col-sm-3 img-container">
      <img className="img-responsive" src={imgUrl} alt="" />
    </div>
    <div className="col-xs-12 col-sm-9">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Link>
);

PromotionSingleResult.propTypes = { ...Promotion };

export default PromotionSingleResult;
