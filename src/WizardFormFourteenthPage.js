import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import RadioCard from "./components/Card/RadioCard/RadioCard";
import CheckboxCard from "./components/Card/CheckboxCard/CheckboxCard";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import TextQuestion from "./components/TextQuestion";

const WizardFormFourteenthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Birth" />
        <ButtonToggle buttonToggleLabel="disable" />
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
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="Father's"
          name="mdh-fathers-age"
          tabOrder="2"
          type="input"
          classes="question grid__half"
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
        />
        <Field
          component={TextQuestion}
          label="If no,"
          labelBold="where"
          name="mdh-birth-location"
          tabOrder="6"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          alt="Ruler"
          src="img/icons-length-ruler.svg"
          component={TextQuestion}
          labelBold="Length"
          labelLast="of pregnancy (# of weeks)"
          name="mdh-pregnancy-length"
          tabOrder="7"
          type="input"
          classes="question grid__half"
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
        />
      </div>
      <div className="flex">
        <Field
          alt="Ruler"
          src="img/icons-length-ruler.svg"
          component={TextQuestion}
          labelBold="Length"
          labelLast="of labor (# of weeks)"
          name="mdh-labor-length"
          tabOrder="9"
          type="input"
          classes="question grid__half"
        />
        <Field
          alt="Scorecard"
          src="img/icons-scorecard.svg"
          component={TextQuestion}
          labelBold="Apgar"
          labelLast="score"
          name="mdh-apgar-score"
          tabOrder="10"
          type="input"
          classes="question grid__half"
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
      />
      <Field
        component={TextQuestion}
        label="Jaundiced: Bilirubin lights?"
        labelBold="How long"
        name="mdh-jaundiced"
        tabOrder="19"
        type="input"
        classes="question"
      />
      <Field
        component={TextQuestion}
        labelBold="Breathing problems"
        labelLast="right after birth"
        name="mdh-breathing-problems"
        tabOrder="20"
        type="input"
        classes="question"
      />
      <Field
        component={TextQuestion}
        labelBold="Supplemental oxygen?"
        labelLast="If yes, how long"
        name="mdh-supplemental-oxygen"
        tabOrder="21"
        type="input"
        classes="question"
      />
      <Field
        component={TextQuestion}
        label="Was"
        labelBold="anethesia"
        labelLast="used during delivery? If yes, what kind"
        name="mdh-anethesia"
        tabOrder="22"
        type="input"
        classes="question"
      />
      <div className="flex">
        <Field
          name="mdh-mother-length-hospital-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-mother-length-hospital",
              cardKey: "A",
              cardLabel: "1-2 Days ",
              tabOrder: "23"
            },
            {
              cardName: "mdh-mother-length-hospital",
              cardKey: "B",
              cardLabel: "3-7 Days ",
              tabOrder: "24"
            },
            {
              cardName: "mdh-mother-length-hospital",
              cardKey: "C",
              cardLabel: "8-10 Days ",
              tabOrder: "25"
            },
            {
              cardName: "mdh-mother-length-hospital",
              cardKey: "D",
              cardLabel: "11+ Days ",
              tabOrder: "26"
            }
          ]}
          label="Mother's"
          labelBold="length"
          labelLast="of hospital stay"
          classes="question question--thumbless"
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
              tabOrder: "27"
            },
            {
              cardName: "mdh-child-length-hospital",
              cardKey: "B",
              cardLabel: "3-7 Days",
              tabOrder: "28"
            },
            {
              cardName: "mdh-child-length-hospital",
              cardKey: "C",
              cardLabel: "8-10 Days",
              tabOrder: "29"
            },
            {
              cardName: "mdh-child-length-hospital",
              cardKey: "D",
              cardLabel: "11+ Days",
              tabOrder: "30"
            }
          ]}
          label="Child's"
          labelBold="length"
          labelLast="of hospital stay"
          classes="question question--thumbless"
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />

      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFourteenthPage);
