import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { tests: state.testsSelectedReducer.testsSelected };
};

const AppendixConnected = props => {
  //console.log("AppendixConnected props, ", tests);
  console.log("store from index, ", props);

  return (
    <div>
      <p>Make Appendix go now!</p>
    </div>
  );
};

const Appendix = connect(mapStateToProps)(AppendixConnected);

export default Appendix;
