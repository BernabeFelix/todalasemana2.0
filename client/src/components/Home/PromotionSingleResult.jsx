import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { Paper } from 'material-ui';
import Chip from 'material-ui/Chip';
import RisedButton from 'material-ui/RaisedButton';
import ShareMenu from './ShareMenu';
import { Promotion } from '../common/types';
import { getRootUrl } from '../../utils/url';

const styles = {
  chip: {
    float: 'right'
  },
  chipLabel: {
    fontSize: '10px',
    lineHeight: '20px'
  },
  buttonRoot: {
    marginRight: '1rem'
  }
};

const PromotionSingleResult = ({
  url,
  description,
  id,
  imgUrl,
  title,
  company = '\u00A0'
}) => (
  <Paper className="promotion-single-result" zDepth={2}>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="company">
          {company}
          <ShareMenu title={title} url={`${getRootUrl()}${url({ id })}`} />
        </h4>

        <Link to={url({ id })}>
          <div
            className="img-container"
            style={{
              background: `url(${imgUrl}) center no-repeat`,
              backgroundSize: 'contain',
              height: '200px'
            }}
          />
        </Link>

        <h4 className="title">
          {title}
          <Chip style={styles.chip} labelStyle={styles.chipLabel}>
            {/* Change for the actual value from promo's properties */}
            Comida
          </Chip>
        </h4>
        {/* TODO: implement if there is time */}
        {/* <small className="availability">Válido hasta el 12/05/2018</small> */}
        <p className="description">{description}</p>
        <div className="actions">
          <Link to={url({ id })}>
            <RisedButton label="Detalles" primary style={styles.buttonRoot} />
          </Link>
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
