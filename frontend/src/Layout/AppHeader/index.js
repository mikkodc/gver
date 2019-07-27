import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderLogo from '../AppLogo';

import UserBox from './Components/UserBox';

class Header extends React.Component {
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow
    } = this.props;
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          className={cx('app-header', headerBackgroundColor, {
            'header-shadow': enableHeaderShadow
          })}
          transitionName="HeaderAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}>
          <HeaderLogo />

          <div
            className={cx('app-header__content', {
              'header-mobile-open': enableMobileMenuSmall
            })}>
            <div className="app-header-right">
              <UserBox />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

Header.propTypes = {
  headerBackgroundColor: PropTypes.string,
  enableMobileMenuSmall: PropTypes.bool,
  enableHeaderShadow: PropTypes.bool
};

const mapStateToProps = state => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
