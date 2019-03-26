import React, { Component } from "react";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";
import TextQuestion from "../components/TextQuestion";

class WizardForm15Page extends Component {
  componentDidMount() {
    const patientAge = this.props.patientAge,
      motherAge = this.props.motherAge,
      fatherAge = this.props.fatherAge;
    console.log(`Mother's age = ${motherAge}, father's age = ${fatherAge}`);
    if (motherAge !== undefined && patientAge !== undefined) {
      let motherAgeAtBirth = motherAge - patientAge;
      console.log(`Mother's age at birth = ${motherAgeAtBirth}`);
      this.props.change("mdh-mothers-age", motherAgeAtBirth);
    }
    if (fatherAge !== undefined && patientAge !== undefined) {
      let fatherAgeAtBirth = fatherAge - patientAge;
      console.log(`Father's age at birth = ${fatherAgeAtBirth}`);
      this.props.change("mdh-fathers-age", fatherAgeAtBirth);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.motherAge !== nextProps.motherAge ||
      this.props.fatherAge !== nextProps.fatherAge
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { handleSubmit, handleDisable, disabled } = this.props;
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle
          titleBold="Medical &amp; development"
          titleRegular="history"
        />
        <div className="flex" onClick={() => handleDisable(15)}>
          <SectionSubHeader subHeader="Birth" />
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
        <div className="flex">
          <Field
            component={TextQuestion}
            label="At this"
            labelBold="child's birth,"
            labelLast="what was the mother's age"
            name="mdh-mothers-age"
            tabOrder="1"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            alt="Speech bubble"
            component={TextQuestion}
            label="Father's"
            name="mdh-fathers-age"
            tabOrder="2"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <Field
          component={TextQuestion}
          label="Mother's"
          labelBold="age at birth,"
          labelLast="of first child"
          name="mdh-mothers-age-first-child"
          tabOrder="3"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <div className="flex">
          <Field
            name="mdh-hospital-birth-group"
            component={RadioCard}
            cardInfo={[
              {
                cardName: "mdh-hospital-birth",
                cardKey: "A",
                cardLabel: "Yes",
                tabOrder: "4"
              },
              {
                cardName: "mdh-hospital-birth",
                cardKey: "B",
                cardLabel: "No",
                tabOrder: "5"
              }
            ]}
            label="Was this child"
            labelBold="born"
            labelLast="in a hospital"
            classes="question grid__half question--thumbless"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="If no,"
            labelBold="where"
            name="mdh-birth-location"
            tabOrder="6"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="Ruler"
            src="img/icons-length-ruler.svg"
            component={TextQuestion}
            label=""
            labelBold="Length"
            labelLast="of pregnancy (# of weeks)"
            name="mdh-pregnancy-length"
            tabOrder="7"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            alt="Scale"
            src="img/icons-weight-scale.svg"
            component={TextQuestion}
            label="Birth"
            labelBold="weight"
            labelLast="(lbs &amp; oz)"
            name="mdh-birth-weight"
            tabOrder="8"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="Ruler"
            src="img/icons-length-ruler.svg"
            component={TextQuestion}
            label=""
            labelBold="Length"
            labelLast="of labor"
            name="mdh-labor-length"
            tabOrder="9"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            alt="Scorecard"
            src="img/icons-scorecard.svg"
            component={TextQuestion}
            label=""
            labelBold="Apgar"
            labelLast="score"
            name="mdh-apgar-score"
            tabOrder="10"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <Field
          component={TextQuestion}
          label="Child's"
          labelBold="condition"
          labelLast="at birth"
          name="mdh-birth-condition-child"
          tabOrder="11"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="Mother's"
          labelBold="condition"
          labelLast="at birth"
          name="mdh-birth-condition-mother"
          tabOrder="12"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <FieldArray
          component={CheckboxCard}
          checkboxInfo={[
            {
              cardName: "mdh-forceps",
              cardKey: "A",
              cardLabel: "Forceps used",
              tabOrder: "13"
            },
            {
              cardName: "mdh-breech",
              cardKey: "B",
              cardLabel: "Breech birth",
              tabOrder: "14"
            },
            {
              cardName: "mdh-induced",
              cardKey: "C",
              cardLabel: "Labor induced",
              tabOrder: "15"
            },
            {
              cardName: "mdh-ceasarean",
              cardKey: "D",
              cardLabel: "Ceasarean delivery",
              tabOrder: "16"
            }
          ]}
          label="Check any of the following"
          labelBold="complications"
          labelLast="that occured during birth"
          name="mdh-complications"
          classes="question question--thumbless"
          disabled={disabled}
        />
        <Field
          alt="Complications"
          component={TextQuestion}
          label="Other"
          labelBold="delivery complications"
          name="mdh-delivery-complications"
          src="img/icons-problem-triangle.svg"
          tabOrder="17"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          alt="Calendar"
          component={TextQuestion}
          label="Incubator:"
          labelBold="How long"
          name="mdh-incubator"
          src="img/icons-calendar-large.svg"
          tabOrder="18"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="Jaundiced: Bilirubin lights?"
          labelBold="How long"
          name="mdh-jaundiced"
          tabOrder="19"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label=""
          labelBold="Breathing problems"
          labelLast="right after birth"
          name="mdh-breathing-problems"
          tabOrder="20"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label=""
          labelBold="Supplemental oxygen?"
          labelLast="If yes, how long"
          name="mdh-supplemental-oxygen"
          tabOrder="21"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="Was"
          labelBold="anesthesia"
          labelLast="used during delivery? If yes, what kind"
          name="mdh-anesthesia"
          tabOrder="22"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <div className="flex">
          <FieldArray
            name="mdh-mother-length-hospital-group"
            component={RadioCard}
            cardInfo={[
              {
                cardName: "mdh-mother-length-hospital",
                cardKey: "A",
                cardLabel: "1-2 Days",
                tabOrder: "23"
              },
              {
                cardName: "mdh-mother-length-hospital",
                cardKey: "B",
                cardLabel: "3-7 Days",
                tabOrder: "24"
              },
              {
                cardName: "mdh-mother-length-hospital",
                cardKey: "C",
                cardLabel: "8-10 Days",
                tabOrder: "25"
              },
              {
                cardName: "mdh-mother-length-hospital",
                cardKey: "D",
                cardLabel: "11+ Days",
                tabOrder: "26"
              },
              {
                cardName: "mdh-mother-length-hospital",
                cardKey: "E",
                cardLabel: "Undefined",
                tabOrder: "27"
              }
            ]}
            label="Mother's"
            labelBold="length"
            labelLast="of hospital stay"
            classes="question question--thumbless"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            name="mdh-child-length-hospital-group"
            component={RadioCard}
            cardInfo={[
              {
                cardName: "mdh-child-length-hospital",
                cardKey: "A",
                cardLabel: "1-2 Days",
                tabOrder: "28"
              },
              {
                cardName: "mdh-child-length-hospital",
                cardKey: "B",
                cardLabel: "3-7 Days",
                tabOrder: "29"
              },
              {
                cardName: "mdh-child-length-hospital",
                cardKey: "C",
                cardLabel: "8-10 Days",
                tabOrder: "30"
              },
              {
                cardName: "mdh-child-length-hospital",
                cardKey: "D",
                cardLabel: "11+ Days",
                tabOrder: "31"
              },
              {
                cardName: "mdh-child-length-hospital",
                cardKey: "E",
                cardLabel: "Undefined",
                tabOrder: "32"
              }
            ]}
            label="Child's"
            labelBold="length"
            labelLast="of hospital stay"
            classes="question question--thumbless"
            disabled={disabled}
          />
        </div>

        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

// Decorate with connect to read form values
const selector = formValueSelector("wizard"); // <-- same as form name
WizardForm15Page = connect(state => {
  // can select values individually
  const patientAge = selector(state, "di-age");
  const motherAge = selector(state, "bh-mother-age");
  const fatherAge = selector(state, "bh-father-age");
  return {
    patientAge,
    motherAge,
    fatherAge
  };
})(WizardForm15Page);

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm15Page);
