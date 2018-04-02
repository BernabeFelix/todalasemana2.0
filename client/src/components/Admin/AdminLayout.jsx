import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { arrayOf, func, string, shape } from 'prop-types';
import { Location, Match, Size } from '../../types';
import { isUpToMedium } from '../../styles/utils';

/* eslint-disable arrow-body-style */
class AdminLayout extends Component {
  componentDidMount() {
    if (!isUpToMedium()) {
      this.computeCols(this.props);
    }
  }

  componentWillUpdate(nextProps) {
    const { size, location } = this.props;

    if (size && nextProps.size.width !== size.width) {
      if (isUpToMedium()) {
        this.exact = true;
        return;
      }

      this.exact = false;
      this.computeCols(nextProps);
      return;
    }

    if (location && nextProps.location.pathname !== location.pathname) {
      this.computeCols(nextProps);
    }
  }

  computeCols = props => {
    if (!isUpToMedium()) {
      const { middleSectionPaths, location } = props;
      const path = location.pathname;
      const middleSectionOnly = middleSectionPaths.some(
        middlePath => middlePath === path
      );

      this.middleSectionCol = middleSectionOnly ? 5 : 4;
      this.thirdSectionCol = middleSectionOnly ? 4 : 5;
    }
  };

  render() {
    const { exact, middleSectionCol, thirdSectionCol } = this;

    return this.props.children({ middleSectionCol, thirdSectionCol, exact });
  }
}

/* eslint-disable react/no-unused-prop-types */
AdminLayout.propTypes = {
  children: func.isRequired,
  location: shape(Location).isRequired,
  match: shape(Match).isRequired,
  middleSectionPaths: arrayOf(string).isRequired,
  size: shape(Size).isRequired
};

export default withRouter(AdminLayout);
