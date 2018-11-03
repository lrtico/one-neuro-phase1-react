import React from "react";
import "./pageJump.css";
import MaterialIcon from "react-google-material-icons";

const PageJump = props => {
  return (
    <div id="page-jump">
      <input
        type="text"
        value={props.pageNumber}
        onChange={props.handlePageNumber}
        maxLength="2"
        min="1"
        max="47"
        placeholder="#"
      />
      <div className="page-jump__button" onClick={props.handlePageJump}>
        <MaterialIcon icon="arrow_forward" />
      </div>
    </div>
  );
};

export default PageJump;
