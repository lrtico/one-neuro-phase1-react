import React from "react";
import "./Loading.css";

const DomainsLoading = () => {
  return (
    <div className="flex flex--wrap">
      <label style={{ flex: "1 1 100%" }}>Loading...</label>
      <div className="domain-loader-wrap">
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "324px" }}>
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "349px" }}>
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "233px" }}>
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "131px" }}>
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "173px" }}>
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "267px" }}>
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "274px" }}>
        <div className="domain-loader-bar" />
      </div>
      <div className="domain-loader-wrap" style={{ width: "223px" }}>
        <div className="domain-loader-bar" />
      </div>
    </div>
  );
};

export default DomainsLoading;
