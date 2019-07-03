import React from "react";
import "./pageJump.css";
import MaterialIcon from "react-google-material-icons";
import RequiredText from "../Required/RequiredText";

const PageJump = props => {
  return (
    <div id="page-jump">
      <input
        type="text"
        value={props.pageNumber}
        onChange={props.handlePageNumber}
        maxLength="2"
        min="1"
        max="50"
        placeholder="#"
      />
      <div className="page-jump__button" onClick={props.handlePageJump}>
        <MaterialIcon icon="arrow_forward" />
      </div>
      <RequiredText
        visibility={props.pageJumpOutOfRange}
        requiredText="Please enter min 1, max 50 :)"
        customRequiredTextClass="question__required-text question__required-text--pagejump"
      />
    </div>
  );
};

export default PageJump;
