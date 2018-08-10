import React, { Component } from "react";
import DatabaseResult from "../DatabaseResult/DatabaseResult";
import "../liveSearch.css";
import MaterialIcon from "react-google-material-icons";

export default class DatabaseResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: [
        {
          dsm: "294.1",
          icd: "F02.80",
          desc:
            "Major Neurocognitive Disorder Due to Another Medical Condition",
          specifier: "Without behavioral disturbance"
        },
        {
          dsm: "294.1",
          icd: "F02.80",
          desc: "Major Neurocognitive Disorder Due to Multiple Etiologies",
          specifier: "Without behavioral disturbance"
        },
        {
          dsm: "294.11",
          icd: "F02.80",
          desc:
            "Probable Major Neurocognitive Disorder Due to Alzheimer's Disease",
          specifier: "Without behavioral disturbance"
        },
        {
          dsm: "294.11",
          icd: "F02.80",
          desc:
            "Probable Major Neurocognitive Disorder Due to Frontotemporal Lobar Degeneration",
          specifier: "Without behavioral disturbance"
        }
      ]
    };
  }

  handleRemoveDSMCode(event) {
    console.log("Make the code disappear now!");
    console.log("Event, ", this.props);
    //Delete the value inside the span
    //Remove the class "live-search-wrap__dsm-code-selected--selected"
    //event.currentTarget.firstChild.textContent = "";
    //event.currentTarget.classList.remove("live-search-wrap__dsm-code--selected");
    this.props.fields.pop(event);
  }

  handleSearchResultsClick(event) {
    console.log("Make code go now!");
    //The exact code in the live search results that was clicked...
    const code = event;
    console.log("The code is ... ", event.dsm);
    console.log("Current target = ", code);
    console.log("This.props.fields = ", this.props.fields);

    this.props.fields.push({ name: "Test string" });
  }

  render() {
    console.log("Props on the list", this.props.fields);
    const { fields } = this.props;
    return (
      <div>
        <div className="live-search-wrap__dsm-codes selected-code">
          {fields.map(data => (
            <div
              //key={index}
              className="live-search-wrap__dsm-code live-search-wrap__dsm-code--selected"
              onClick={() => this.handleRemoveDSMCode(data)}
            >
              {console.log("Make data go now!", data)}
              <span>{data}</span>
              <MaterialIcon icon="close" />
            </div>
          ))}
        </div>
        <div className="live-search-results">
          <div className="live-search-result live-search-result--header">
            <span className="liv-search-result__dsm-code">DSM-5 CODE</span>
            <span className="liv-search-result__icd-code">IDC-10 CODE</span>
            <span className="liv-search-result__desc">DESCRIPTION</span>
            <span className="liv-search-result__specifier">SPECIFIER</span>
          </div>
          {this.state.codes.map((code, index) => (
            <DatabaseResult
              data={code}
              key={index}
              handleShowCode={event => this.handleSearchResultsClick(event)}
            />
          ))}
        </div>
      </div>
    );
  }
}
