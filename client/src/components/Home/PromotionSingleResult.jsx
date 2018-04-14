import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { Paper } from 'material-ui';
import Chip from 'material-ui/Chip';
import ShareMenu from './ShareMenu';

import { Promotion } from '../common/types';

const styles = {
  chip: {
    float: 'right'
  },
  chipLabel: {
    fontSize: '12px',
    lineHeight: '24px'
  }
};

const PromotionSingleResult = ({ description, id, imgUrl, url, title }) => (
  <Paper className="promotion-single-result" zDepth={2}>
    <div className="row">
      {/* <div className="col-xs-12 col-sm-3">
        <Link to={url({ id })}>
          <div className="img-container">
            <img className="img-responsive" src={imgUrl} alt="" />
          </div>
        </Link>
      </div> */}
      <div className="col-xs-12 col-sm-12">
        <h4 className="company">
          Pizza Hut &copy; <span className="time" />
          <ShareMenu title={title} url="https://google.com" />
        </h4>

        <div className="row">
          <div className="col-xs-12">
            <Link to={url({ id })}>
              <div className="img-container">
                <img className="img-responsive" src={imgUrl} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <h4 className="title">
          {title}
          <Chip style={styles.chip} labelStyle={styles.chipLabel}>
            Comida
          </Chip>
        </h4>
        <small className="availability">Expira el 12/05/2018</small>
        <p>{description}</p>
      </div>
    </div>
  </Paper>
);

PromotionSingleResult.propTypes = {
  url: func.isRequired,
  ...Promotion
};

export default PromotionSingleResult;
