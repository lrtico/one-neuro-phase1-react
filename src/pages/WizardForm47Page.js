import React, { Component } from "react";
import "../app.css";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import CheckboxDomainsCard from "../components/Card/CheckboxCard/CheckboxDomainsCard";
import CheckboxTestsCard from "../components/Card/CheckboxCard/CheckboxTestsCard";
import DivButton from "../components/Button/DivButton";
import Test from "../components/Test/Test";

class WizardForm47Page extends Component {
  state = {
    domains: [],
    tests: [],
    matchedTests: [],
    testsSelected: [],
    domainsLoaded: false
  };

  showLetterFormat = () => {
    console.log("hide domain, show letter");
    document.querySelector(".domain__pick-domain").classList.remove("show");
    document.querySelector(".letter-format").classList.add("show");
  };

  showDomainBased = () => {
    console.log("hide letter, domain based");
    document.querySelector(".letter-format").classList.remove("show");
    document.querySelector(".domain__pick-domain").classList.add("show");
  };

  showSubDomain = () => {
    console.log("hide everything but pick the sub domain executing...");
    document.querySelector(".domain__pick-sub-domain").classList.add("show");
  };

  showTests = () => {
    console.log("Make tests go now!");
    document.querySelector(".domain__test").classList.add("show");
  };

  showSummary = () => {
    console.log("Make summary go now!");
    document.querySelector(".summary-findings").classList.add("show");
  };

  filterTestsByDomainsSelected = card => {
    console.log("Passed domain from checkbox child ", card);
    this.setState(({ matchedTests, tests, ...state }) => {
      const idx = matchedTests.map(t => t.DomainName).indexOf(card);

      if (idx !== -1) {
        //The domain is in state already so we remove it...
        console.log("IndexOf, ", idx);
        console.log(
          "The domain is in state already so we remove it now! ",
          this.state.matchedTests
        );
        return {
          ...state,
          matchedTests: matchedTests.filter(t => t.DomainName !== card)
        };
      } else {
        //The domain clicked isn't in the matchedTest array, so filter the immutable all tests state
        //by copying the test that was clicked to the matchedTest array
        console.log("IndexOf, ", idx);
        console.log(
          "The domain clicked isn't in the matchedTest array so make add now! ",
          this.state.matchedTests
        );
        // let newarr = matchedTests.concat(
        //   tests.filter(t => t.DomainName === card)
        // );
        let handleMatches = tests.filter(t => t.DomainName === card);
        let newarr = {
          DomainName: card,
          handleMatches
        };
        console.log("newarr, ", newarr);
        return [matchedTests.push(newarr)];
      }
    });
  };

  showFilteredTest = test => {
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
        let selectedTest = tests.filter(t => t.Abbreviation === test);
        console.log("selected test filtered =, ", selectedTest);
        return [testsSelected.push(selectedTest[0])];
      }
    });
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
        console.log("Domain data from API, ", data);
      })
      .catch(error => console.log("Domain API error, ", error));
    console.log("WizardForm47 is loading");

    //Load all the test data into state
    const allData = "http://oneneuro.azurewebsites.net/api/test/get/all";
    fetch(allData)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({ tests: d });
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
      referral3
    } = this.props;
    const { domains, matchedTests } = this.state;
    console.log("MatchedTests from state, ", matchedTests);

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

        <div className="domain__pick-domain">
          <SectionTitle titleBold="Domain-based" titleRegular="reports" />
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
            <p>Loading domains...</p>
          )}
          <DivButton divButtonLabel="OK" show={this.showSubDomain} />
        </div>

        <div className="domain__pick-sub-domain">
          <SectionTitle titleBold="Domain-based" titleRegular="reports" />
          <FieldArray
            component={CheckboxTestsCard}
            checkboxInfo={matchedTests.map(test => ({
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

        <div className="domain__test">
          <SectionTitle titleBold="Domain-based" titleRegular="reports" />
          <Test testFromState={this.state.testsSelected} />
          {/* <SectionSubTitle subTitleBold="Learning &amp; memory" />
          <div className="flex">
            <SectionSubHeader subHeader="WPPSI-IV" />
            <ButtonToggle buttonToggleLabel="Remove test" />
          </div>
          <div className="test-desc">
            <p>
              The Wechsler Preschool and Primary Scale of Intelligence
              (WPPSI-IV) is a test of intellectual abilities, which assesses
              both cognitive strengths and weaknesses in infants and children
              aged 2 years 6 months through 7 years 7 months (2:6-7:7).
            </p>
            <hr />
            <SectionSubHeader subHeader="FULL SCALE IQ" />
            <p>
              The Full Scale IQ (FSIQ) is a composite score that represents
              general intellectual functioning and is calculated from all of the
              subtests within the main indices.
            </p>
            <h5>If the FSIQ is meaningful</h5>
            <div className="flex test__list">
              <MaterialIcon icon="arrow_right" />
              <p>
                Overall, (client) demonstrated a consistent performance on the
                WISC-V and received a Full-Scale IQ (FSIQ) score of{" "}
                <input type="number" name="fsiq-score" /> (
                <input type="number" name="fsiq-percentile" /> percentile),
                which falls within in the{" "}
                <input type="text" name="fsiq-range" /> range of functioning.
              </p>
            </div>
            <h5>If the FSIQ is not meaningful</h5>
            <div className="flex test__list">
              <MaterialIcon icon="arrow_right" />
              <p>
                Overall, (client) demonstrated an inconsistent performance on
                the WPPSI-IV. As a result, (his/her) Full-Scale score cannot be
                interpreted meaningfully due to the significant discrepancies
                between the five Composite areas that constitute (his/her)
                Full-Scale score (FSIQ). Therefore, in order to better
                understand (his/her) cognitive strengths and weaknesses, a more
                in-depth look at all of (client’s) individual subtest scores is
                warranted.
              </p>
            </div>
            <hr />
            <SectionSubHeader subHeader="GENERAL ABILITY INDEX" />
            <p>
              The General Ability Index is a composite score that provides an
              estimate of general intellectual ability, with reduced emphasis on
              working memory and processing speed relative to the FSIQ.
            </p>
          </div>
          <SectionSubTitle subTitleBold="Intellectual functioning" />
          <SectionSubHeader subHeader="VERBAL COMPREHENSION" />
          <div className="test-table">
            <div className="table__row table__header">
              <div>Subtest</div>
              <div>Score</div>
              <div>Description</div>
            </div>
            <div className="table__row">
              <div>Similarities</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                The subtest is designed to measure verbal concept formation and
                abstract reasoning. It also involves crystallized intelligence,
                auditory comprehension, memory, associative and categorical
                thinking, distinction between nonessential and essential
                features, and verbal expression.
              </div>
            </div>
            <div className="table__row">
              <div>Vocabulary</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                The subtest is designed to measure verbal concept formation and
                abstract reasoning. It also involves crystallized intelligence,
                auditory comprehension, memory, associative and categorical
                thinking, distinction between nonessential and essential
                features, and verbal expression.
              </div>
            </div>
            <div className="table__row">
              <div>Information</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                This subtest is designed to measure a child’s ability to
                acquire, retain, and retrieve general factual knowledge. It
                involves crystallized intelligence, long-term memory, and the
                ability to retain and retrieve knowledge from the environment
                and/or school.
              </div>
            </div>
            <div className="table__row">
              <div>Comprehension</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                It is designed to measure verbal reasoning and
                conceptualization, verbal comprehension and expression, the
                ability to evaluate and use past experience, and the ability to
                demonstrate practical knowledge and judgement. It also involved
                crystallized intelligence, knowledge of conventional standards
                of behavior, social judgement, long-term memory and common
                sense.
              </div>
            </div>
          </div>
          <div className="test-table-heading">
            <SectionSubHeader subHeader="FLUID REASONING" />
          </div>
          <div className="test-table">
            <div className="table__row table__header">
              <div>Subtest</div>
              <div>Score</div>
              <div>Description</div>
            </div>
            <div className="table__row">
              <div>Similarities</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                The subtest is designed to measure verbal concept formation and
                abstract reasoning. It also involves crystallized intelligence,
                auditory comprehension, memory, associative and categorical
                thinking, distinction between nonessential and essential
                features, and verbal expression.
              </div>
            </div>
            <div className="table__row">
              <div>Vocabulary</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                The subtest is designed to measure verbal concept formation and
                abstract reasoning. It also involves crystallized intelligence,
                auditory comprehension, memory, associative and categorical
                thinking, distinction between nonessential and essential
                features, and verbal expression.
              </div>
            </div>
            <div className="table__row">
              <div>Information</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                This subtest is designed to measure a child’s ability to
                acquire, retain, and retrieve general factual knowledge. It
                involves crystallized intelligence, long-term memory, and the
                ability to retain and retrieve knowledge from the environment
                and/or school.
              </div>
            </div>
            <div className="table__row">
              <div>Comprehension</div>
              <div>
                <input type="text" name="testname-score" />
              </div>
              <div>
                It is designed to measure verbal reasoning and
                conceptualization, verbal comprehension and expression, the
                ability to evaluate and use past experience, and the ability to
                demonstrate practical knowledge and judgement. It also involved
                crystallized intelligence, knowledge of conventional standards
                of behavior, social judgement, long-term memory and common
                sense.
              </div>
            </div>
          </div> */}
          <DivButton divButtonLabel="Ok" show={this.showSummary} />
        </div>

        <div className="summary-findings">
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
                  label="What's the patient's"
                  labelBold="name"
                  name="di-name"
                  src="img/icons-happy-face-name.svg"
                  tabOrder="1"
                  type="input"
                  classes="question"
                  copyForward="true"
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
                  label="What's the patient's"
                  labelBold="age"
                  name="di-age"
                  src="img/icons-birthday-cake.svg"
                  tabOrder="2"
                  type="input"
                  classes="question"
                  copyForward="true"
                />
              )}
            </div>
          </div>
          <div className="copy-forward-row question grid__two-thirds">
            <label>
              Reasons for <strong>referral</strong>
            </label>
            {referral1 && (
              <Field
                component={TextQuestion}
                name="reason-referral-1"
                tabOrder="3"
                type="input"
                classes="question"
                materialIcon="arrow_right"
                copyForward="true"
              />
            )}
            {referral2 && (
              <Field
                component={TextQuestion}
                name="reason-referral-2"
                tabOrder="4"
                type="input"
                classes="question"
                materialIcon="arrow_right"
                copyForward="true"
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
                copyForward="true"
              />
            )}
          </div>
          <div className="grid__two-thirds">
            <label>
              Relevant <strong>background</strong> history
            </label>
            <Field name="relevant-background-history" component="textarea" />
          </div>
          <div className="grid__two-thirds">
            <label>
              Results of <strong>current</strong> assessment
            </label>
            <Field name="results-current-assessment" component="textarea" />
          </div>
          <div className="grid__two-thirds">
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

// Decorate with redux-form
// WizardForm47Page = reduxForm({
//   form: "wizard" // a unique identifier for this form
// })(WizardForm47Page);

// Decorate with connect to read form values
// const selector = formValueSelector("wizard"); // <-- same as form name
// WizardForm47Page = connect(state => {
// can select values individually
//   const patientName = selector(state, "di-name");
//   const patientAge = selector(state, "di-age");
//   const referral1 = selector(state, "reason-referral-1");
//   const referral2 = selector(state, "reason-referral-2");
//   const referral3 = selector(state, "reason-referral-3");
//   return {
//     patientName,
//     patientAge,
//     referral1,
//     referral2,
//     referral3
//   };
// })(WizardForm47Page);

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm47Page);
