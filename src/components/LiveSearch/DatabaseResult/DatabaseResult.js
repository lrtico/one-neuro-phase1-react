import React from "react";

const DatabaseResult = props => {
  console.log("props of the result, ", props);
  const { data } = props;
  return (
    <div
      className="live-search-result"
      onClick={() => props.handleShowCode(data)}
    >
      <span className="liv-search-result__dsm-code">{data.dsm}</span>
      <span className="liv-search-result__icd-code">{data.icd}</span>
      <span className="liv-search-result__desc">{data.desc}</span>
      <span className="liv-search-result__specifier">{data.specifier}</span>
    </div>
  );
};

export default DatabaseResult;
