import React from "react";
import "./sectionTitleStyles.css";

const SectionTitle = props => {
  const { titleBold, titleRegular } = props;
  return (
    <h2>
      <strong>{titleBold}</strong> {titleRegular}
    </h2>
  );
};

export default SectionTitle;
