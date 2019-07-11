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
          name="mdNeurologicalGroup"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "mdSeizures",
              cardLabel: "Seizures / convulsions?",
              cardPlaceholder: "When/where?",
              tabOrder: "1",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdSpeechDefects",
              cardLabel: "Speech defects?",
              cardPlaceholder: "How often?",
              tabOrder: "2",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdAccidentProne",
              cardLabel: "Accident prone?",
              cardPlaceholder: "How often?",
              tabOrder: "3",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdNailBiter",
              cardLabel: "Bites nails?",
              cardPlaceholder: "How often?",
              tabOrder: "4",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdSucksThumb",
              cardLabel: "Sucks thumb?",
              cardPlaceholder: "How often?",
              tabOrder: "5",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdGrindsTeeth",
              cardLabel: "Grinds teeth?",
              cardPlaceholder: "How often?",
              tabOrder: "6",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdTwitches",
              cardLabel: "Has tics/twitches?",
              cardPlaceholder: "How often?",
              tabOrder: "7",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdBangsHead",
              cardLabel: "Bangs head?",
              cardPlaceholder: "How often?",
              tabOrder: "9",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdRocks",
              cardLabel: "Rocks back and forth?",
              cardPlaceholder: "How often?",
              tabOrder: "10",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdBowelMovement",
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
          name="mdNeurologicalMedsGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdNeurologicalMeds",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "12"
            },
            {
              cardName: "mdNeurologicalMeds",
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
          name="mdNeurologicalMedsDate"
          tabOrder="14"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="What"
          labelBold="medication"
          name="mdNeurologicalMedsKind"
          tabOrder="15"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="mdNeurologicalTranquilizerGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdNeurologicalTranquilizer",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "16"
            },
            {
              cardName: "mdNeurologicalTranquilizer",
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
          name="mdNeurologicalTranquilizerDate"
          tabOrder="18"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="What"
          labelBold="medication"
          name="mdNeurologicalTranquilizerKind"
          tabOrder="19"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="mdNeurologicalAdhdMedsGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdNeurologicalAdhdMeds",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "20"
            },
            {
              cardName: "mdNeurologicalAdhdMeds",
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
          name="mdNeurologicalAdhdMedsDate"
          tabOrder="22"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="What"
          labelBold="medication"
          name="mdNeurologicalAdhdMedsKind"
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
