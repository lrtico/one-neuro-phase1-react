import React from "react";
import "./sectionTitleStyles.css";

const SectionTitle = props => {
  const { titleFirst, titleBold, titleRegular } = props;
  return (
    <h2>
      {titleFirst} <strong>{titleBold}</strong> {titleRegular}
    </h2>
  );
};

export default SectionTitle;
