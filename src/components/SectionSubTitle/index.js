import React from 'react';
import PropTypes from 'prop-types';
import './sectionSubTitleStyles.css';

const SectionSubTitle = (props) => {
  const {
    subTitleFirst,
    subTitleBold,
    subTitleRegular,
    subtitleAbbreviation,
  } = props;
  return (
    <h3 className="h3--sib-h4">
      {subTitleFirst} <strong>{subTitleBold}</strong> {subTitleRegular}
      {subtitleAbbreviation && (
        <span className="test-abbreviation">({subtitleAbbreviation})</span>
      )}
    </h3>
  );
};

SectionSubTitle.propTypes = {
  subTitleFirst: PropTypes.string,
  subTitleBold: PropTypes.string,
  subTitleRegular: PropTypes.string,
  subtitleAbbreviation: PropTypes.string,
};

export default SectionSubTitle;
