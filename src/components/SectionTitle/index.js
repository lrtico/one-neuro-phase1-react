import React from 'react';
import PropTypes from 'prop-types';
import './sectionTitleStyles.css';

const SectionTitle = (props) => {
  const { titleFirst, titleBold, titleRegular } = props;
  return (
    <h2>
      {titleFirst} <strong>{titleBold}</strong> {titleRegular}
    </h2>
  );
};

SectionTitle.propTypes = {
  titleFirst: PropTypes.string,
  titleBold: PropTypes.string,
  titleRegular: PropTypes.string,
};

export default SectionTitle;
