import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import sizeMe from 'react-sizeme';
import { newPromotionUrl, promotionsUrl } from '../../routes';
import { Match, Size } from '../common/types';
import AdminMenu from './AdminMenu';
import AdminPromotions from './AdminPromotions';
import AdminEditPromotion from './AdminEditPromotion/AdminEditPromotion';
import NewPromotion from './NewPromotion';
import AdminLayout from '../Admin/AdminLayout';

/* eslint-disable arrow-body-style */
class CustomerAdmin extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    this.promotionListPath = match.url + promotionsUrl();
    this.newPromoPath = match.url + newPromotionUrl();
    this.editPromotionPath = `${match.url}${promotionsUrl()}/:id`;

    this.middleSectionPaths = [this.promotionListPath, this.newPromoPath];
  }

  render() {
    const { match, size } = this.props;

    return (
      <AdminLayout middleSectionPaths={this.middleSectionPaths} size={size}>
        {({ exact, middleSectionCol, thirdSectionCol }) => (
          <div className="row">
            {/* First Section */}
            <div className="col-xs-12 col-md-3">
              <Route exact={exact} path={match.url} component={AdminMenu} />
            </div>

            {/* Middle Section */}
            <div
              className={`col-xs-12 col-md-${middleSectionCol} max-width-transition`}
            >
              <Switch>
                <Route
                  exact={exact}
                  path={this.promotionListPath}
                  component={AdminPromotions}
                />
                <Route
                  exact
                  path={this.newPromoPath}
                  component={NewPromotion}
                />
              </Switch>
            </div>

            {/* Third Section */}
            <div
              className={`col-xs-12 col-md-${thirdSectionCol} max-width-transition`}
            >
              <Route
                exact
                path={this.editPromotionPath}
                render={props => (
                  <AdminEditPromotion id={props.match.params.id} />
                )}
              />
            </div>
          </div>
        )}
      </AdminLayout>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
CustomerAdmin.propTypes = {
  match: shape(Match).isRequired,
  size: shape(Size).isRequired
};

export default withRouter(sizeMe()(CustomerAdmin));
