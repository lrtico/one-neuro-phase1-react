import React, { Component } from "react";
import "../app.css";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import CheckboxDomainsCard from "../components/Card/CheckboxCard/CheckboxDomainsCard";
import CheckboxTestsCard from "../components/Card/CheckboxCard/CheckboxTestsCard";
import DivButton from "../components/Button/DivButton";
import Test from "../components/Test/Test";
import DomainsLoading from "../components/Loading/DomainsLoading";
import store from "../store";
import SectionSubTitle from "../components/SectionSubTitle";
import { load as loadAccount } from "../reducers/reducers";

// import { addTest } from "../actions/actions";

// const mapDispatchToProps = dispatch => {
//   return {
//     addTest: testsSelected => dispatch(addTest(testsSelected))
//   };
// };

class WizardForm47Page extends Component {
  state = {
    domains: [],
    tests: [],
    matchedTests: [],
    testsSelected: [],
    domainsLoaded: false
  };

  showLetterFormat = () => {
    //console.log("hide domain, show letter");
    document.querySelector(".domain__pick-domain").classList.remove("show");
    document.querySelector(".letter-format").classList.add("show");
  };

  showDomainBased = () => {
    console.log("hide letter, domain based selected");
    document.querySelector(".letter-format").classList.remove("show");
    //document.querySelector(".domain__pick-domain").classList.add("show");
    store.dispatch({
      type: "SHOW_DOMAIN",
      payload: { showDomains: true }
    });
    document.querySelector(".domain__pick-domain").scrollIntoView({
      behavior: "smooth"
    });
  };

  showSubDomain = () => {
    //console.log("hide everything but pick the sub domain executing...");
    // this.setState(prevState => {
    //   return { showSubDomains: !prevState.showSubDomains };
    // });
    store.dispatch({
      type: "SHOW_SUBDOMAIN",
      payload: { showSubDomains: true }
    });
    //document.querySelector(".domain__pick-sub-domain").classList.add("show");
    document.querySelector(".domain__pick-sub-domain").scrollIntoView({
      behavior: "smooth"
    });
    console.log("showSubDomain click");
  };

  showTests = () => {
    //console.log("Make tests go now!");
    // this.setState(prevState => {
    //   return { showTests: !prevState.showTests };
    // });
    store.dispatch({
      type: "SHOW__TESTS",
      payload: { showTests: true }
    });
    //document.querySelector(".domain__test").classList.add("show");
    document.querySelector(".domain__test h4").scrollIntoView({
      behavior: "smooth"
    });
  };

  showSummary = () => {
    //console.log("Make summary go now!");
    // this.setState(prevState => {
    //   return { showSummary: !prevState.showSummary };
    // });
    store.dispatch({
      type: "SHOW_SUMMARY",
      payload: { showSummary: true }
    });
    //document.querySelector(".summary-findings").classList.add("show");
    document.querySelector(".summary-findings").scrollIntoView({
      behavior: "smooth"
    });
  };

  addToAppendix = (id, parentScaleName, abbreviation, name, event) => {
    console.log(`
      Make Appendix info go now!
      Info we need:
      - Scale name: ${parentScaleName}
      - Abbreviation: ${abbreviation}
      - Test Name: ${name}
      - Id: ${id}
      - Event: ${event.target.checked}
    `);
    let data = {
      Id: id,
      Name: name,
      Abbreviation: abbreviation,
      SubTests: [{ parentScaleName, id }]
    };

    let checked = event.target.checked;

    if (checked) {
      console.log("payload sent to add appendix reducer: ", data);
      store.dispatch({
        type: "ADD_APPENDIX",
        payload: data
      });
    } else {
      console.log(
        "payload sent to remove appendix reducer: ",
        data.SubTests[0]
      );
      store.dispatch({
        type: "REMOVE_APPENDIX_SUBTEST",
        payload: data
      });
    }
  };

  //Show all the tests in a domain that's clicked on
  filterTestsByDomainsSelected = card => {
    //console.log("Passed domain from checkbox child ", card);
    console.log("filterTestsByDomainsSelected curr state, ", this.state);
    console.log(`Box clicked on had the label of ${card}`);
    //this.setState(({ matchedTests, tests, ...state }) => {

    const { tests } = this.state;
    const { storeMatchedTests } = this.props;
    const idx = storeMatchedTests.map(t => t.DomainName).indexOf(card);
    console.log(`idx = ${idx}`);

    if (idx !== -1) {
      //The domain is in state already so we remove it...
      // console.log("IndexOf, ", idx);
      // console.log(
      //   "The domain is in state already so we remove it now! ",
      //   this.state.matchedTests
      // );
      // return {
      //   ...state,
      //   matchedTests: matchedTests.filter(t => t.DomainName !== card)
      // };

      //let data = matchedTests.filter(t => t.DomainName !== card);
      console.log(
        `The clicked domain is already in state, so we send the reducer the payload of the domain: ${card}`
      );
      store.dispatch({
        type: "REMOVE_TESTS",
        payload: card
      });
    } else {
      //The domain clicked isn't in the matchedTest array, so filter the immutable all tests state
      //by copying the test that was clicked to the matchedTest array
      //console.log("IndexOf, ", idx);
      // console.log(
      //   "The domain clicked isn't in the matchedTest array so make add now! ",
      //   this.state.matchedTests
      // );
      // let newarr = matchedTests.concat(
      //   tests.filter(t => t.DomainName === card)
      // );
      // let handleMatches = tests.filter(t => t.DomainName === card);
      // let newarr = {
      //   DomainName: card,
      //   handleMatches
      // };
      // console.log("newarr, ", newarr);
      // return [matchedTests.push(newarr)];

      let handleMatches = tests.filter(t => t.DomainName === card);
      let data = {
        DomainName: card,
        handleMatches
      };
      console.log(
        `${card} clicked is NOT in state, so we create a new data array with that clicked domain: ${JSON.stringify(
          data
        )}`
      );
      store.dispatch({
        type: "ADD_TESTS",
        payload: data
      });
    }
    //});
  };

  //Show the test when clicked on or hide it
  showFilteredTest = test => {
    let selectedTest = this.state.tests.filter(t => t.Abbreviation === test);
    store.dispatch({
      type: "ADD_TEST",
      payload: selectedTest[0]
    });
    store.dispatch({
      type: "SHOW_TESTS",
      payload: { showTests: true }
    });

    console.log("Make show test go now!", test);
    this.setState(({ testsSelected, tests, ...state }) => {
      const idx = testsSelected.map(t => t.Abbreviation).indexOf(test);

      if (idx !== -1) {
        //The abbreviation is in state already so we remove it...
        console.log("IndexOf, ", idx);
        console.log(
          "The abbreviation is in state already so we remove it now! ",
          this.state.testsSelected
        );
        return {
          ...state,
          testsSelected: testsSelected.filter(t => t.Abbreviation !== test)
        };
      } else {
        //The abbreviation clicked isn't in the testsSelected array, so filter the immutable all tests state
        //by copying the test that was clicked to the testsSelected array
        console.log("IndexOf, ", idx);
        console.log(
          "The abbreviation clicked isn't in the testsSelected array so make add now! ",
          this.state.testsSelected
        );
        return [testsSelected.push(selectedTest[0])];
      }
    });
  };

  //Copy the data from the store to the input clicked on
  handleCopyForward = data => {
    console.log(`Data passed to the copy forward function = `, data);
  };

  componentDidMount() {
    //Load the domains into state
    const url = "http://oneneuro.azurewebsites.net/api/test/domains/all";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ domains: data, domainsLoaded: true });
        //console.log("Domain data from API, ", data);
      })
      .catch(error => console.log("Domain API error, ", error));
    //console.log("WizardForm47 is loading");

    //Load all the test data into state
    const allData = "http://oneneuro.azurewebsites.net/api/test/get/all";
    fetch(allData)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({ tests: d });
        //console.log("Test data from API, ", allData);
      })
      .catch(error => console.log("Getting all data error, ", error));
  }

  render() {
    const {
      handleSubmit,
      patientAge,
      patientName,
      referral1,
      referral2,
      referral3,
      storeMatchedTests,
      tests
    } = this.props;
    const { domains } = this.state;
    console.log("State after render(), ", this.state);
    console.log("Page 47's props from the store ", this.props);
    console.log("Page 47's tests selected ", tests);

    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Type" titleRegular="of report" />
        <div className="flex">
          <Field
            showLetterFormat={this.showLetterFormat}
            showDomainBased={this.showDomainBased}
            name="mdh-development"
            component={RadioCard}
            cardInfo={[
              {
                cardName: "tor-format",
                cardText: "Letter-format",
                cardKey: "1",
                tabOrder: "1",
                cardLabel: "No"
              },
              {
                cardName: "tor-format",
                cardText: "Domain-based",
                cardKey: "2",
                tabOrder: "2",
                cardLabel: "Yes"
              }
            ]}
            label="Please choose whether or not you need to"
            labelBold="include tests"
            labelLast="in your report"
            classes="question question--thumb"
          />
        </div>

        <div className="letter-format">
          <SectionTitle
            titleBold="Letter-format"
            titleRegular="type of report"
          />
          <div className="grid__half">
            <label>
              Summary of <strong>visit</strong>
            </label>
            <Field name="other-information" component="textarea" />
          </div>
          <Button onClick={handleSubmit} buttonLabel="OK" />
        </div>

        <div
          className={
            this.props.domainBasedReports.showDomains
              ? "domain__pick-domain show"
              : "domain__pick-domain"
          }
        >
          <SectionSubTitle subTitleFirst="Domains" />
          {this.state.domainsLoaded ? (
            <FieldArray
              component={CheckboxDomainsCard}
              checkboxInfo={domains.map(domain => ({
                cardName: `dbr-${domain.DomainName}`,
                cardKey: domain.id,
                cardLabel: domain.DomainName,
                tabOrder: domain.id
              }))}
              label="Check all the"
              labelBold="domains"
              labelLast="that were given"
              name="dbr-domains-group"
              classes="question question--thumbless"
              handleDomainTestFilter={this.filterTestsByDomainsSelected}
            />
          ) : (
            <DomainsLoading />
          )}
          <DivButton divButtonLabel="OK" show={this.showSubDomain} />
        </div>

        <div
          className={
            this.props.domainBasedReports.showSubDomains
              ? "domain__pick-sub-domain show"
              : "domain__pick-sub-domain"
          }
        >
          <SectionSubTitle subTitleFirst="Available" subTitleBold="tests" />
          <FieldArray
            component={CheckboxTestsCard}
            checkboxInfo={storeMatchedTests.map(test => ({
              columnHeader: test.DomainName,
              cardName: `dbr-${test.DomainName}`,
              checkboxLabels: test.handleMatches
            }))}
            label="Check all the"
            labelBold="tests"
            labelLast="that were given"
            name="dbr-tests-group"
            classes="question question--thumbless"
            handleTestFilter={this.showFilteredTest}
          />
          <DivButton divButtonLabel="OK" show={this.showTests} />
        </div>

        <div
          className={
            this.props.domainBasedReports.showTests
              ? "domain__test show"
              : "domain__test"
          }
        >
          <SectionSubTitle subTitleFirst="Selected" subTitleBold="tests" />
          <Test testFromState={tests} handleAppendixAdd={this.addToAppendix} />
          <DivButton divButtonLabel="Ok" show={this.showSummary} />
        </div>

        <div
          className={
            this.props.domainBasedReports.showSummary
              ? "summary-findings show"
              : "summary-findings"
          }
        >
          <SectionTitle titleBold="Summary" titleRegular="of findings" />
          <div className="flex copy-forward-row">
            <div className="question grid__half">
              <label>
                Patient's <strong>name</strong>
              </label>
              {patientName && (
                <Field
                  alt="Person"
                  component={TextQuestion}
                  name="di-name"
                  type="input"
                  classes="question"
                  //copyForward="true"
                />
              )}
            </div>
            <div className="question grid__half">
              <label>
                Patient's <strong>age</strong>
              </label>
              {patientAge && (
                <Field
                  alt="Person"
                  component={TextQuestion}
                  name="di-age"
                  type="input"
                  classes="question"
                  //copyForward="true"
                />
              )}
            </div>
          </div>
          <div className="copy-forward-row question grid__two-thirds">
            <label>
              Reasons for <strong>referral</strong>
            </label>

            <Field
              component={TextQuestion}
              name="sof-reason-referral-1"
              tabOrder="1"
              type="text"
              classes="question"
              materialIcon="arrow_right"
              copyForward="true"
              onClick={this.handleCopyForward(referral1)}
            />

            {referral2 && (
              <Field
                component={TextQuestion}
                name="reason-referral-2"
                tabOrder="4"
                type="input"
                classes="question"
                materialIcon="arrow_right"

                //copyForward="true"
              />
            )}
            {referral3 && (
              <Field
                component={TextQuestion}
                name="reason-referral-3"
                tabOrder="5"
                type="input"
                classes="question"
                materialIcon="arrow_right"
                //copyForward="true"
              />
            )}
          </div>
          <div>
            <label>
              Relevant <strong>background</strong> history
            </label>
            <Field name="relevant-background-history" component="textarea" />
          </div>
          <div>
            <label>
              Results of <strong>current</strong> assessment
            </label>
            <Field name="results-current-assessment" component="textarea" />
          </div>
          <div>
            <label>
              Overall <strong>summary</strong> of current situation
            </label>
            <Field name="summary-current-situation" component="textarea" />
          </div>
          <Button onClick={handleSubmit} buttonLabel="OK" />
        </div>

        {/* <Button onClick={handleSubmit} buttonLabel="OK" /> */}
      </form>
    );
  }
}

// Decorate with connect to read form values
// const selector = formValueSelector("wizard"); // <-- same as form name
// WizardForm47Page = connect(
//   //null,
//   //mapDispatchToProps,
//   state => {
//     // select values individually
//     const patientName = selector(state, "di-name");
//     const patientAge = selector(state, "di-age");
//     const referral1 = selector(state, "reason-referral-1");
//     const referral2 = selector(state, "reason-referral-2");
//     const referral3 = selector(state, "reason-referral-3");
//     console.log("referral1 = ", referral1);
//     return {
//       patientName,
//       patientAge,
//       referral1,
//       referral2,
//       referral3
//     };
//   }
// )(WizardForm47Page);

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
  //values: { "sof-reason-referral-1": this.props.referral1 }
  // initialValues: {
  //   "sof-reason-referral-1":
  //     this.props.referral1 === undefined ? "" : this.props.referral1
  // },
  // enableReinitialize: true
})(WizardForm47Page);

//Grab the state values for showing/hiding components from the store and showing selected tests
WizardForm47Page = connect(
  state => ({
    domainBasedReports: state.domainBasedReports,
    storeMatchedTests: state.matchedTests,
    tests: state.testsSelectedReducer,
    initialValues: state.copyForward // pull initial values from copyForward reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(WizardForm47Page);
