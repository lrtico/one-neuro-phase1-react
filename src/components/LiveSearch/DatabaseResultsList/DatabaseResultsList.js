import React, { Component } from "react";
import { connect } from "react-redux";
import DatabaseResult from "../DatabaseResult/DatabaseResult";
import "../liveSearch.css";
import MaterialIcon from "react-google-material-icons";
import store from "../../../store";

class DatabaseResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selectedCode: [],
      initialState: [],
      dsmCodes: []
    };
  }

  handleRemoveDSMCode(event, i) {
    console.log("Make the code disappear now!", i);
    console.log("Event, ", this.props);
    //Delete the value inside the span
    //Remove the class "live-search-wrap__dsm-code-selected--selected"
    //event.currentTarget.firstChild.textContent = "";
    //event.currentTarget.classList.remove("live-search-wrap__dsm-code--selected");
    store.dispatch({
      type: "REMOVE_DSM_CODE",
      payload: i
    });
    this.props.fields.pop(event);
  }

  handleSelectCode = codeValue => {
    console.log("Make code go now!", codeValue);
    console.log(`Simulate payload: "codeValue": "${codeValue}" `);
    //The exact code in the live search results that was clicked...
    // const code = event;
    // console.log("The code is ... ", event.dsm);
    // console.log("Current target = ", code);
    // console.log("This.props.fields = ", this.props.fields);
    //this.setState({ selectedCode: [...this.state.selectedCode, codeValue] });
    store.dispatch({
      type: "ADD_DSM_CODE",
      payload: { codeValue: codeValue }
    });
    this.props.fields.push({ codeValue });
    document
      .querySelector(".live-search-results")
      .classList.remove("live-search-results--expand");
    document.getElementById("dsm-code-input").value = "";
  };

  showSearchResults = event => {
    const tar = event.currentTarget,
      searchQuery = tar.value.toLowerCase(),
      codes = tar.parentNode.nextSibling.nextSibling;
    console.log("The user typed ", searchQuery);

    codes.classList.add("live-search-results--expand");

    //if the value is empty, that means
    if (searchQuery === "") {
      codes.classList.remove("live-search-results--expand");
      //tar.style.paddingLeft = codeWidth;
      this.setState({
        dsmCodes: this.state.initialState
      });
    }
    //console.log("This.state.dsmCodes before filter: ", this.state.dsmCodes);
    const dsmCodes = this.state.initialState.filter(function(code) {
      const searchValue = code.Descriptions.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({
      dsmCodes: dsmCodes
    });
  };

  componentDidMount() {
    const url = "http://oneneuro.azurewebsites.net/api/DSM/all";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          initialState: data
        });
        console.log("Data from API", data);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { dsmSelectedCodes } = this.props;
    console.log("Props on the DatabaseResultsList fields", this.props.fields);
    //console.log("Selected code: ", this.state.selectedCode);
    console.log("dsmCodes from Redux store = ", dsmSelectedCodes);

    //console.log("DSMCode data from API ", this.state.dsmCodes);
    //console.log("DatabaseResultsList props ", this.props.showSearchResults);
    return (
      <div>
        <div className="live-search-wrap__input-wrap">
          <input
            type="search"
            placeholder="Start typing to find diagnostic codes"
            name="dc-code-search"
            tabIndex="1"
            autoComplete="off"
            onKeyUp={this.showSearchResults}
            id="dsm-code-input"
          />
        </div>
        <div className="live-search-wrap__dsm-codes selected-code">
          {dsmSelectedCodes === undefined
            ? null
            : dsmSelectedCodes.map((code, i) => (
                <div
                  key={i}
                  className="live-search-wrap__dsm-code live-search-wrap__dsm-code--selected"
                  onClick={() => this.handleRemoveDSMCode(code, i)}
                >
                  {console.log("Make data go now!", code)}
                  <span>{code.codeValue}</span>
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
          {this.state.dsmCodes.map(code => (
            <DatabaseResult
              data={code}
              key={code.Id}
              onSelectCode={this.handleSelectCode}
            />
          ))}
        </div>
      </div>
    );
  }
}

//Pull in a part or parts of the Redux store and attach to props
// const mapStateToProps = state => ({
//   dsmSelectedCodes: state.dsmSelectedCodes
// });

//Connect the component with the Redux store
export default connect(state => ({ dsmSelectedCodes: state.dsmSelectedCodes }))(
  DatabaseResultsList
);
