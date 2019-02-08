import React from "react";
import "./sectionSubTitleStyles.css";

const SectionSubTitle = props => {
  const {
    subTitleFirst,
    subTitleBold,
    subTitleRegular,
    subtitleAbbreviation
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

export default SectionSubTitle;
