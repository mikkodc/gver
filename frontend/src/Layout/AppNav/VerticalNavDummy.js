import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import { MainNav } from './NavItems';

class NavDummy extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu
          content={MainNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          classNameStateIcon="pe-7s-angle-down"
        />
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

NavDummy.propTypes = {
  location: PropTypes.object
};

export default withRouter(NavDummy);
