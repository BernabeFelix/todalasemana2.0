import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import sizeMe from 'react-sizeme';
import { clientsUrl, promotionsUrl } from '../../routes';
import { Match, Size } from '../common/types';
import AdminMenu from './AdminMenu';
import AdminLayout from '../Admin/AdminLayout';
import ClientList from './ClientList';
import ClientEdit from './ClientEdit';
import AdminPromotions from '../CustomerAdmin/AdminPromotions';
import AdminEditPromotion from '../CustomerAdmin/AdminEditPromotion/AdminEditPromotion';

/* eslint-disable arrow-body-style */
class SuperAdmin extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    this.clientListPath = match.url + clientsUrl();

    this.promotionListPath = `${match.url}${promotionsUrl()}`;
    this.editPromotionPath = `${match.url}${promotionsUrl()}/:id`;

    this.middleSectionPaths = [this.clientListPath, this.promotionListPath];
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
                  exact={exact}
                  path={this.clientListPath}
                  render={props => (
                    <ClientList
                      {...props}
                      promotionListPath={this.promotionListPath}
                    />
                  )}
                />
              </Switch>
            </div>

            {/* Third Section */}
            <div
              className={`col-xs-12 col-md-${thirdSectionCol} max-width-transition`}
            >
              <Switch>
                <Route
                  exact={exact}
                  path={`${this.clientListPath}/:id`}
                  render={props => <ClientEdit id={props.match.params.id} />}
                />
                <Route
                  exact
                  path={this.editPromotionPath}
                  render={props => (
                    <AdminEditPromotion id={props.match.params.id} />
                  )}
                />
              </Switch>
            </div>
          </div>
        )}
      </AdminLayout>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
SuperAdmin.propTypes = {
  match: shape(Match).isRequired,
  size: shape(Size).isRequired
};

export default withRouter(sizeMe()(SuperAdmin));
