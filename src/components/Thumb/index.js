import React from "react";
import "./thumbStyles.css";

const Thumb = props => {
  return <img src={props.thumbsrc} alt={props.thumbAlt} />;
};

export default Thumb;
