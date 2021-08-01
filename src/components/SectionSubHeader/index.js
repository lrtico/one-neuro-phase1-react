import React from 'react';
import PropTypes from 'prop-types';
import './sectionSubHeaderStyles.css';

const SectionSubHeader = (props) => {
  const { subHeader } = props;
  return <h4>{subHeader}</h4>;
};

SectionSubHeader.propTypes = {
  subHeader: PropTypes.string,
};

export default SectionSubHeader;
