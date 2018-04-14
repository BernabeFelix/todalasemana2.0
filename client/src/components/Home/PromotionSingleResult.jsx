import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { Paper } from 'material-ui';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RisedButton from 'material-ui/RaisedButton';
import Location from 'material-ui/svg-icons/communication/location-on';
import ShareMenu from './ShareMenu';

import { Promotion } from '../common/types';

const styles = {
  chip: {
    float: 'right'
  },
  chipLabel: {
    fontSize: '12px',
    lineHeight: '24px'
  },
  buttonRoot: {
    marginRight: '1rem'
  }
};

const getFullUrl = relativeUrl => {
  // TODO: change for a setting
  const { host } = window.location;
  const fullUrl = `https://${host}${relativeUrl}`;
  return fullUrl;
};

const PromotionSingleResult = ({ description, id, imgUrl, url, title }) => (
  <Paper className="promotion-single-result" zDepth={2}>
    <div className="row">
      <div className="col-xs-12 col-sm-12">
        <h4 className="company">
          <Link to="/pizza-hut">Pizza Hut &copy;</Link>
          <ShareMenu title={title} url={getFullUrl(url({ id }))} />
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
        <small className="availability">Válido hasta el 12/05/2018</small>
        <p className="description">{description}</p>
        <div className="actions">
          <RisedButton
            label="Detalles"
            primary
            containerElement={<Link to={url({ id })} />}
            style={styles.buttonRoot}
          />
          <FlatButton
            label="Mapa"
            icon={<Location />}
            style={styles.buttonRoot}
          />
        </div>
      </div>
    </div>
  </Paper>
);

PromotionSingleResult.propTypes = {
  url: func.isRequired,
  ...Promotion
};

export default PromotionSingleResult;
