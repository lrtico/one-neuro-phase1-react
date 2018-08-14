import React from "react";
import "../app.css";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import SectionSubTitle from "../components/SectionSubTitle";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import MaterialIcon from "react-google-material-icons";
import DivButton from "../components/Button/DivButton";

const showLetterFormat = () => {
  console.log("hide domain, show letter");
  document.querySelector(".domain__pick-domain").classList.remove("show");
  document.querySelector(".letter-format").classList.add("show");
};

const showDomainBased = () => {
  console.log("hide letter, domain based");
  document.querySelector(".letter-format").classList.remove("show");
  document.querySelector(".domain__pick-domain").classList.add("show");
};

const showSubDomain = () => {
  console.log("hide everything but pick the sub domain executing...");
  document.querySelector(".domain__pick-sub-domain").classList.add("show");
};

const showTests = () => {
  console.log("Make tests go now!");
  document.querySelector(".domain__test").classList.add("show");
};

const showSummary = () => {
  console.log("Make summary go now!");
  document.querySelector(".summary-findings").classList.add("show");
};

let WizardForm47Page = props => {
  const {
    handleSubmit,
    patientAge,
    patientName,
    referral1,
    referral2,
    referral3
  } = props;

  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Type" titleRegular="of report" />
      <div className="flex">
        <Field
          showLetterFormat={showLetterFormat}
          showDomainBased={showDomainBased}
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
        <SectionTitle titleBold="Letter-format" titleRegular="type of report" />
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
        <FieldArray
          component={CheckboxCard}
          checkboxInfo={[
            {
              cardName: "dbr-letter-incomplete-assessment",
              cardKey: "A",
              cardLabel: "Letter of Incomplete Assessment",
              tabOrder: "1"
            },
            {
              cardName: "dbr-appendix-scores",
              cardKey: "B",
              cardLabel: "Appendix of Scores only (Gifted Talented testing)",
              tabOrder: "2"
            },
            {
              cardName: "dbr-effort",
              cardKey: "C",
              cardLabel: "Effort testing",
              tabOrder: "3"
            },
            {
              cardName: "dbr-intelligence",
              cardKey: "D",
              cardLabel: "Intelligence/Cognition",
              tabOrder: "4"
            },
            {
              cardName: "dbr-attention-executive-functioning",
              cardKey: "E",
              cardLabel: "Attention & Executive Function",
              tabOrder: "5"
            },
            {
              cardName: "dbr-sensorimotor-visual-motor",
              cardKey: "F",
              cardLabel:
                "Sensorimotor Functioning and Visual-Motor Integration",
              tabOrder: "6"
            },
            {
              cardName: "dbr-learning-memory",
              cardKey: "G",
              cardLabel: "Learning & Memory",
              tabOrder: "7"
            },
            {
              cardName: "dbr-social-emotional",
              cardKey: "H",
              cardLabel: "Social-Emotional Functioning",
              tabOrder: "8"
            },
            {
              cardName: "dbr-adaptive-functioning",
              cardKey: "I",
              cardLabel: "Adaptive Functioning",
              tabOrder: "9"
            },
            {
              cardName: "dbr-school-observations",
              cardKey: "J",
              cardLabel: "School Observations",
              tabOrder: "10"
            },
            {
              cardName: "dbr-behavioral-observation",
              cardKey: "K",
              cardLabel: "Behavioral observations",
              tabOrder: "11"
            },
            {
              cardName: "dbr-general-intellectual-functioning",
              cardKey: "L",
              cardLabel: "General Intellectual Functioning",
              tabOrder: "12"
            },
            {
              cardName: "dbr-verbal-language",
              cardKey: "M",
              cardLabel: "Verbal and Language",
              tabOrder: "13"
            },
            {
              cardName: "dbr-visual-spatial",
              cardKey: "N",
              cardLabel: "Visual-Spatial and Visual-Motor Skills",
              tabOrder: "14"
            },
            {
              cardName: "dbr-fluid-reasoning",
              cardKey: "O",
              cardLabel: "Fluid Reasoning",
              tabOrder: "15"
            },
            {
              cardName: "dbr-executive-functioning",
              cardKey: "P",
              cardLabel: "Executive Functioning",
              tabOrder: "16"
            },
            {
              cardName: "dbr-sustained-attention",
              cardKey: "Q",
              cardLabel: "Sustained Attention/Inhibition",
              tabOrder: "17"
            },
            {
              cardName: "dbr-speed-processing",
              cardKey: "R",
              cardLabel: "Speed of Processing",
              tabOrder: "18"
            },
            {
              cardName: "dbr-visual-motor-integration",
              cardKey: "S",
              cardLabel: "Visual-Motor Integration",
              tabOrder: "19"
            },
            {
              cardName: "dbr-academics",
              cardKey: "T",
              cardLabel: "Academics",
              tabOrder: "20"
            },
            {
              cardName: "dbr-social-emotional-adaptive-functioning",
              cardKey: "U",
              cardLabel: "Social, Emotional, and Adaptive Functioning",
              tabOrder: "21"
            }
          ]}
          label="Check all the"
          labelBold="domains"
          labelLast="that were given"
          name="dbr-domains-group"
          classes="question question--thumbless"
        />
        <DivButton divButtonLabel="OK" show={showSubDomain} />
      </div>

      <div className="domain__pick-sub-domain">
        <SectionTitle titleBold="Domain-based" titleRegular="reports" />
        <FieldArray
          component={CheckboxCard}
          columnHeader="[Name of domain]"
          checkboxInfo={[
            {
              cardName: "dbr-basc-2",
              cardKey: "A",
              cardLabel: "BASC-2",
              tabOrder: "1"
            },
            {
              cardName: "dbr-beery-vmi",
              cardKey: "B",
              cardLabel: "BEERY VMI",
              tabOrder: "2"
            },
            {
              cardName: "dbr-dkefs",
              cardKey: "C",
              cardLabel: "DKEFS",
              tabOrder: "3"
            },
            {
              cardName: "dbr-gars-3",
              cardKey: "D",
              cardLabel: "GARS-3",
              tabOrder: "4"
            },
            {
              cardName: "dbr-nelson-denny",
              cardKey: "E",
              cardLabel: "NELSON DENNY",
              tabOrder: "5"
            },
            {
              cardName: "dbr-qik-continuous",
              cardKey: "F",
              cardLabel: "QIK-CONTINUOUS-PERFORMANCE-TEST",
              tabOrder: "6"
            },
            {
              cardName: "dbr-rbans",
              cardKey: "G",
              cardLabel: "RBANS",
              tabOrder: "7"
            },
            {
              cardName: "dbr-wais-iv",
              cardKey: "H",
              cardLabel: "WAIS-IV",
              tabOrder: "8"
            },
            {
              cardName: "dbr-wppsi-iv",
              cardKey: "I",
              cardLabel: "WPPSI-IV",
              tabOrder: "9"
            }
          ]}
          label="Check all the"
          labelBold="tests"
          labelLast="that were given"
          name="dbr-tests-group"
          classes="question question--thumbless"
        />
        <FieldArray
          component={CheckboxCard}
          columnHeader="[Name of domain]"
          checkboxInfo={[
            {
              cardName: "dbr-nelson-denny",
              cardKey: "E",
              cardLabel: "NELSON DENNY",
              tabOrder: "5"
            },
            {
              cardName: "dbr-qik-continuous",
              cardKey: "F",
              cardLabel: "QIK-CONTINUOUS-PERFORMANCE-TEST",
              tabOrder: "6"
            },
            {
              cardName: "dbr-rbans",
              cardKey: "G",
              cardLabel: "RBANS",
              tabOrder: "7"
            },
            {
              cardName: "dbr-wais-iv",
              cardKey: "H",
              cardLabel: "WAIS-IV",
              tabOrder: "8"
            },
            {
              cardName: "dbr-wppsi-iv",
              cardKey: "I",
              cardLabel: "WPPSI-IV",
              tabOrder: "9"
            }
          ]}
          label="Check all the"
          labelBold="tests"
          labelLast="that were given"
          name="dbr-tests-group"
          classes="question question--thumbless"
        />
        <FieldArray
          component={CheckboxCard}
          columnHeader="[Name of domain]"
          checkboxInfo={[
            {
              cardName: "dbr-nelson-denny",
              cardKey: "E",
              cardLabel: "NELSON DENNY",
              tabOrder: "5"
            },
            {
              cardName: "dbr-wais-iv",
              cardKey: "H",
              cardLabel: "WAIS-IV",
              tabOrder: "8"
            },
            {
              cardName: "dbr-wppsi-iv",
              cardKey: "I",
              cardLabel: "WPPSI-IV",
              tabOrder: "9"
            }
          ]}
          label="Check all the"
          labelBold="tests"
          labelLast="that were given"
          name="dbr-tests-group"
          classes="question question--thumbless"
        />
        <DivButton divButtonLabel="OK" show={showTests} />
      </div>

      <div className="domain__test">
        <SectionTitle titleBold="Domain-based" titleRegular="reports" />
        <SectionSubTitle subTitleBold="Learning &amp; memory" />
        <div className="flex">
          <SectionSubHeader subHeader="WPPSI-IV" />
          <ButtonToggle buttonToggleLabel="Remove test" />
        </div>
        <div className="test-desc">
          <p>
            The Wechsler Preschool and Primary Scale of Intelligence (WPPSI-IV)
            is a test of intellectual abilities, which assesses both cognitive
            strengths and weaknesses in infants and children aged 2 years 6
            months through 7 years 7 months (2:6-7:7).
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
              <input type="number" name="fsiq-percentile" /> percentile), which
              falls within in the <input type="text" name="fsiq-range" /> range
              of functioning.
            </p>
          </div>
          <h5>If the FSIQ is not meaningful</h5>
          <div className="flex test__list">
            <MaterialIcon icon="arrow_right" />
            <p>
              Overall, (client) demonstrated an inconsistent performance on the
              WPPSI-IV. As a result, (his/her) Full-Scale score cannot be
              interpreted meaningfully due to the significant discrepancies
              between the five Composite areas that constitute (his/her)
              Full-Scale score (FSIQ). Therefore, in order to better understand
              (his/her) cognitive strengths and weaknesses, a more in-depth look
              at all of (client’s) individual subtest scores is warranted.
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
              thinking, distinction between nonessential and essential features,
              and verbal expression.
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
              thinking, distinction between nonessential and essential features,
              and verbal expression.
            </div>
          </div>
          <div className="table__row">
            <div>Information</div>
            <div>
              <input type="text" name="testname-score" />
            </div>
            <div>
              This subtest is designed to measure a child’s ability to acquire,
              retain, and retrieve general factual knowledge. It involves
              crystallized intelligence, long-term memory, and the ability to
              retain and retrieve knowledge from the environment and/or school.
            </div>
          </div>
          <div className="table__row">
            <div>Comprehension</div>
            <div>
              <input type="text" name="testname-score" />
            </div>
            <div>
              It is designed to measure verbal reasoning and conceptualization,
              verbal comprehension and expression, the ability to evaluate and
              use past experience, and the ability to demonstrate practical
              knowledge and judgement. It also involved crystallized
              intelligence, knowledge of conventional standards of behavior,
              social judgement, long-term memory and common sense.
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
              thinking, distinction between nonessential and essential features,
              and verbal expression.
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
              thinking, distinction between nonessential and essential features,
              and verbal expression.
            </div>
          </div>
          <div className="table__row">
            <div>Information</div>
            <div>
              <input type="text" name="testname-score" />
            </div>
            <div>
              This subtest is designed to measure a child’s ability to acquire,
              retain, and retrieve general factual knowledge. It involves
              crystallized intelligence, long-term memory, and the ability to
              retain and retrieve knowledge from the environment and/or school.
            </div>
          </div>
          <div className="table__row">
            <div>Comprehension</div>
            <div>
              <input type="text" name="testname-score" />
            </div>
            <div>
              It is designed to measure verbal reasoning and conceptualization,
              verbal comprehension and expression, the ability to evaluate and
              use past experience, and the ability to demonstrate practical
              knowledge and judgement. It also involved crystallized
              intelligence, knowledge of conventional standards of behavior,
              social judgement, long-term memory and common sense.
            </div>
          </div>
        </div>
        <DivButton divButtonLabel="Ok" show={showSummary} />
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
};

// Decorate with redux-form
WizardForm47Page = reduxForm({
  form: "wizard" // a unique identifier for this form
})(WizardForm47Page);

// Decorate with connect to read form values
const selector = formValueSelector("wizard"); // <-- same as form name
WizardForm47Page = connect(state => {
  // can select values individually
  const patientName = selector(state, "di-name");
  const patientAge = selector(state, "di-age");
  const referral1 = selector(state, "reason-referral-1");
  const referral2 = selector(state, "reason-referral-2");
  const referral3 = selector(state, "reason-referral-3");
  return {
    patientName,
    patientAge,
    referral1,
    referral2,
    referral3
  };
})(WizardForm47Page);

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm47Page);
