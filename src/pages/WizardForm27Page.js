import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import TextQuestion from "../components/TextQuestion";

const WizardForm27Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex" onClick={() => handleDisable(27)}>
        <SectionSubHeader subHeader="Neurological" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="flex">
        <Field
          name="md-neurological-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "md-seizures",
              cardLabel: "Seizures/ convulsions?",
              cardPlaceholder: "When/where?",
              tabOrder: "1",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-speech-defects",
              cardLabel: "Speech defects?",
              cardPlaceholder: "How often?",
              tabOrder: "2",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-accident-prone",
              cardLabel: "Accident prone?",
              cardPlaceholder: "How often?",
              tabOrder: "3",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-nail-biter",
              cardLabel: "Bites nails?",
              cardPlaceholder: "How often?",
              tabOrder: "4",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-sucks-thumb",
              cardLabel: "Sucks thumb?",
              cardPlaceholder: "How often?",
              tabOrder: "5",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-grinds-teeth",
              cardLabel: "Grinds teeth?",
              cardPlaceholder: "How often?",
              tabOrder: "6",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-twitches",
              cardLabel: "Has tics/twitches?",
              cardPlaceholder: "How often?",
              tabOrder: "7",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-bangs-head",
              cardLabel: "Bangs head?",
              cardPlaceholder: "How often?",
              tabOrder: "9",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-rocks",
              cardLabel: "Rocks back and forth?",
              cardPlaceholder: "How often?",
              tabOrder: "10",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-bowel-movement",
              cardLabel: "Bowel movements in pants/bed?",
              cardPlaceholder: "How often?",
              tabOrder: "11",
              normalizeCapitalizeWords: true
            }
          ]}
          label="Does this child"
          labelBold="currently"
          labelLast="have any of the following problems"
          classes="question"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="md-neurological-meds-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "md-neurological-meds",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "12"
            },
            {
              cardName: "md-neurological-meds",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "13"
            }
          ]}
          label="Has this child ever"
          labelBold="taken medication"
          labelLast="to increase activity"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          component={TextQuestion}
          label="If yes,"
          labelBold="when"
          name="md-neurological-meds-date"
          tabOrder="14"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="What"
          labelBold="medication"
          name="md-neurological-meds-kind"
          tabOrder="15"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="md-neurological-tranquilizer-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "md-neurological-tranquilizer",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "16"
            },
            {
              cardName: "md-neurological-tranquilizer",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "17"
            }
          ]}
          label="Has this child ever"
          labelBold="taken tranquilizer"
          labelLast="medication"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          component={TextQuestion}
          label="If yes,"
          labelBold="when"
          name="md-neurological-tranquilizer-date"
          tabOrder="18"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="What"
          labelBold="medication"
          name="md-neurological-tranquilizer-kind"
          tabOrder="19"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="md-neurological-adhd-meds-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "md-neurological-adhd-meds",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "20"
            },
            {
              cardName: "md-neurological-adhd-meds",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "21"
            }
          ]}
          label="Has this child ever"
          labelBold="taken medication for"
          labelLast="ADD, ADHD, or similar problems"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          component={TextQuestion}
          label="If yes,"
          labelBold="when"
          name="md-neurological-adhd-meds-date"
          tabOrder="22"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="What"
          labelBold="medication"
          name="md-neurological-adhd-meds-kind"
          tabOrder="23"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm27Page);
