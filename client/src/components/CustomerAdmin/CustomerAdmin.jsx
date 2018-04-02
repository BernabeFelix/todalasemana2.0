import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import sizeMe from 'react-sizeme';
import { newPromotionUrl, promotionsUrl } from '../../routes';
import { Location, Match, Size } from '../../types';
import AdminMenu from './AdminMenu';
import AdminPromotions from './AdminPromotions';
import AdminEditPromotion from './AdminEditPromotion/AdminEditPromotion';
import { isUpToMedium } from '../../styles/utils';
import NewPromotion from './NewPromotion';

/* eslint-disable arrow-body-style */
class CustomerAdmin extends Component {
  constructor(props) {
    super(props);

    const { match } = props;
    this.promoListPath = match.url + promotionsUrl();
    this.promoEditPath = `${match.url}${promotionsUrl()}/:id`;
    this.newPromoPath = match.url + newPromotionUrl();

    if (!isUpToMedium()) {
      this.computeCols(props);
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.size && nextProps.size.width !== this.props.size.width) {
      if (isUpToMedium()) {
        this.exact = true;
        return;
      }

      this.exact = false;
      this.computeCols(nextProps);
      return;
    }

    if (
      this.props.location &&
      nextProps.location.pathname !== this.props.location.pathname
    ) {
      this.computeCols(nextProps);
    }
  }

  computeCols = props => {
    if (!isUpToMedium()) {
      const { location } = props;
      const path = location.pathname;
      const middleSectionOnly =
        path === this.promoListPath || path === this.newPromoPath;

      this.promoListCol = middleSectionOnly ? 5 : 4;
      this.promoCol = middleSectionOnly ? 4 : 5;
    }
  };

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        {/* First Section */}
        <div className="col-xs-12 col-md-3">
          <Route exact={this.exact} path={match.url} component={AdminMenu} />
        </div>

        {/* Middle Section */}
        <div
          className={`col-xs-12 col-md-${
            this.promoListCol
          } max-width-transition`}
        >
          <Switch>
            <Route
              exact={this.exact}
              path={this.promoListPath}
              component={AdminPromotions}
            />
            <Route exact path={this.newPromoPath} component={NewPromotion} />
          </Switch>
        </div>

        {/* Third Section */}
        <div
          className={`col-xs-12 col-md-${this.promoCol} max-width-transition`}
        >
          <Route
            exact
            path={this.promoEditPath}
            render={props => <AdminEditPromotion id={props.match.params.id} />}
          />
        </div>
      </div>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
CustomerAdmin.propTypes = {
  location: shape(Location).isRequired,
  match: shape(Match).isRequired,
  size: shape(Size).isRequired
};

export default withRouter(sizeMe()(CustomerAdmin));
