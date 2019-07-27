import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';

import TitleComponent1 from './PageTitleExamples/Variation1';
import TitleComponent2 from './PageTitleExamples/Variation2';
import TitleComponent3 from './PageTitleExamples/Variation3';

class PageTitle extends Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,

      heading,
      icon,
      subheading
    } = this.props;

    var arr = [
      <TitleComponent1 key="title-component-1" />,
      <TitleComponent2 key="title-component-2" />,
      <TitleComponent3 key="title-component-3" />
    ];

    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div
              className={cx('page-title-icon', {
                'd-none': !enablePageTitleIcon
              })}>
              <i className={icon} />
            </div>
            <div>
              {heading}
              <div
                className={cx('page-title-subheading', {
                  'd-none': !enablePageTitleSubheading
                })}>
                {subheading}
              </div>
            </div>
          </div>
          <div className="page-title-actions">{this.randomize(arr)}</div>
        </div>
      </div>
    );
  }
}

PageTitle.propTypes = {
  enablePageTitleIcon: PropTypes.bool,
  enablePageTitleSubheading: PropTypes.bool,
  heading: PropTypes.string,
  icon: PropTypes.string,
  subheading: PropTypes.string
};

const mapStateToProps = state => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTitle);
