import React from "react";
import "./sectionSubHeaderStyles.css";

const SectionSubHeader = props => {
  const { subHeader } = props;
  return <h4>{subHeader}</h4>;
};

export default SectionSubHeader;
