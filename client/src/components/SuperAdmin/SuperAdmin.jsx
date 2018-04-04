import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import sizeMe from 'react-sizeme';
import { clientsUrl } from '../../routes';
import { Match, Size } from '../common/types';
import AdminMenu from './AdminMenu';
import AdminLayout from '../Admin/AdminLayout';
import ClientList from './ClientList';
import ClientEdit from './ClientEdit';

/* eslint-disable arrow-body-style */
class SuperAdmin extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    this.clientListPath = match.url + clientsUrl();

    this.middleSectionPaths = [this.clientListPath];
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
              <Route
                exact={exact}
                path={match.url + clientsUrl()}
                component={ClientList}
              />
            </div>

            {/* Third Section */}
            <div
              className={`col-xs-12 col-md-${thirdSectionCol} max-width-transition`}
            >
              <Route
                exact={exact}
                path={`${match.url}${clientsUrl()}/:id`}
                render={props => <ClientEdit id={props.match.params.id} />}
              />
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
