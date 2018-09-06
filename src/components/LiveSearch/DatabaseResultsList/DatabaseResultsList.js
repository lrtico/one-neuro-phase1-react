import React, { Component } from "react";
import DatabaseResult from "../DatabaseResult/DatabaseResult";
import "../liveSearch.css";
import MaterialIcon from "react-google-material-icons";

export default class DatabaseResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCode: [],
      initialState: [],
      dsmCodes: []
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

  handleSelectCode = codeValue => {
    console.log("Make code go now!", codeValue);
    //The exact code in the live search results that was clicked...
    // const code = event;
    // console.log("The code is ... ", event.dsm);
    // console.log("Current target = ", code);
    // console.log("This.props.fields = ", this.props.fields);
    this.setState({ selectedCode: [...this.state.selectedCode, codeValue] });
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
    console.log("Props on the list", this.props.fields);
    console.log("Selected code: ", this.state.selectedCode);
    console.log("DSMCode data from API ", this.state.dsmCodes);
    console.log("Wizard48 props ", this.props.showSearchResults);
    const { fields } = this.props;
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
          {fields.map((data, index) => (
            <div
              key={index}
              className="live-search-wrap__dsm-code live-search-wrap__dsm-code--selected"
              onClick={() => this.handleRemoveDSMCode(data)}
            >
              {console.log("Make data go now!", data)}
              <span>{this.state.selectedCode[index]}</span>
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
