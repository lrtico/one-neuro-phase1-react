import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FormCardMultiInput from "../components/Card/FormCard/FormCardMultiInput";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import TextQuestion from "../components/TextQuestion";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm36Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Family" titleRegular="history" />
        <div onClick={() => handleDisable(36)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>
      <label className={disabled ? "content--disabled" : null}>
        Have any
        <strong> family members</strong> had any of the following?
      </label>
      <div className="flex">
        <FieldArray
          component={CheckboxCard}
          columnHeader="A-M"
          checkboxInfo={[
            {
              cardName: "fhDrugAbuse",
              cardKey: "A",
              cardLabel: "Alcohol/Drug abuse",
              tabOrder: "1",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhAlzheimers",
              cardKey: "B",
              cardLabel: "Alzheimer's Disease",
              tabOrder: "2",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhBehaviorDisorder",
              cardKey: "C",
              cardLabel: "Behavior disorder",
              tabOrder: "3",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhBirthDefect",
              cardKey: "D",
              cardLabel: "Birth defect",
              tabOrder: "4",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhCancer",
              cardKey: "E",
              cardLabel: "Cancer",
              tabOrder: "5",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhCerbralPalsy",
              cardKey: "F",
              cardLabel: "Cerebral Palsy",
              tabOrder: "6",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhCysticFibrosis",
              cardKey: "G",
              cardLabel: "Cystic Fibrosis",
              tabOrder: "7",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhDiabetes",
              cardKey: "H",
              cardLabel: "Diabetes",
              tabOrder: "8",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhEmotionalDisturbance",
              cardKey: "I",
              cardLabel: "Emotional disturbance",
              tabOrder: "9",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhFoodAllergies",
              cardKey: "J",
              cardLabel: "Food allergies",
              tabOrder: "10",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhHeartDisease",
              cardKey: "K",
              cardLabel: "Heart disease",
              tabOrder: "11",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhHemophilia",
              cardKey: "L",
              cardLabel: "Heart disease",
              tabOrder: "12",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhHighBloodPressure",
              cardKey: "M",
              cardLabel: "High blood pressure",
              tabOrder: "13",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhHuntingtonChorea",
              cardKey: "N",
              cardLabel: "Huntington's Chorea",
              tabOrder: "14",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhIntellectualDisability",
              cardKey: "O",
              cardLabel: "Intellectual disability",
              tabOrder: "15",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhKidneyDisease",
              cardKey: "P",
              cardLabel: "Kidney disease",
              tabOrder: "16",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhMentalIllness",
              cardKey: "Q",
              cardLabel: "Mental illness",
              tabOrder: "17",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhMigraines",
              cardKey: "R",
              cardLabel: "Migraine headaches",
              tabOrder: "18",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhMultipleSclerosis",
              cardKey: "S",
              cardLabel: "Multiple Sclerosis",
              tabOrder: "19",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhMuscularDystrophy",
              cardKey: "T",
              cardLabel: "Muscular Dystrophy",
              tabOrder: "20",
              liClasses: "question__choice--full-width"
            }
          ]}
          name="fhConditionsGroup"
          classes="question question--thumbless grid__half"
          addTick={this.makeTickMark}
          disabled={disabled}
        />
        <FieldArray
          component={CheckboxCard}
          columnHeader="N-Z"
          checkboxInfo={[
            {
              cardName: "fhNervousness",
              cardKey: "A",
              cardLabel: "Nervousness",
              tabOrder: "1",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhOtherLearningDisability",
              cardKey: "B",
              cardLabel: "Other learning disability",
              tabOrder: "2",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhParkinsons",
              cardKey: "C",
              cardLabel: "Parkinson's Disease",
              tabOrder: "3",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhPhysicalHandicap",
              cardKey: "D",
              cardLabel: "Physical handicap",
              tabOrder: "4",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhReadingProblem",
              cardKey: "E",
              cardLabel: "Reading problem",
              tabOrder: "5",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhSeizures",
              cardKey: "F",
              cardLabel: "Seizures or Epilepsy",
              tabOrder: "6",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhSevereHeadInjury",
              cardKey: "G",
              cardLabel: "Severe head injury",
              tabOrder: "7",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhSickleCell",
              cardKey: "H",
              cardLabel: "Sickle-cell anemia",
              tabOrder: "8",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhSpeechProblem",
              cardKey: "I",
              cardLabel: "Speech or language problem",
              tabOrder: "9",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhStroke",
              cardKey: "J",
              cardLabel: "Stroke",
              tabOrder: "10",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhTaySachs",
              cardKey: "K",
              cardLabel: "Tay-Sachs Disease",
              tabOrder: "11",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhTourettes",
              cardKey: "L",
              cardLabel: "Tourette's Syndrome",
              tabOrder: "12",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhTuberculosis",
              cardKey: "M",
              cardLabel: "Tuberculosis",
              tabOrder: "13",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fhOther",
              cardKey: "N",
              cardLabel: "Other",
              tabOrder: "14",
              liClasses: "question__choice--full-width"
            }
          ]}
          labelBold="N-Z"
          name="fhConditionsGroup"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
      </div>
      <Field
        alt="Health"
        component={TextQuestion}
        label="What is the father's"
        labelBold="present"
        labelLast="health"
        name="fhFathersHealth"
        src="img/icons-health-heart-check.svg"
        tabOrder="15"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Health"
        component={TextQuestion}
        label="What is the mother's"
        labelBold="present"
        labelLast="health"
        name="fhMothersHealth"
        src="img/icons-health-heart-check.svg"
        tabOrder="16"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <label className={disabled ? "content--disabled" : null}>
        Has anyone in the family ever been in
        <strong> special education</strong>?
      </label>
      <FieldArray
        name="specialEdGroup"
        component={FormCardMultiInput}
        disabled={disabled}
        fieldInputs={[
          {
            inputName: "mcSpecialEdName",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Name",
            inputPlaceholder: "Name"
          },
          {
            inputName: "mcSpecialEdClass",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Class",
            inputPlaceholder: "Class"
          }
        ]}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm36Page);
