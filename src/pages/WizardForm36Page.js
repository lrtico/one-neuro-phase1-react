import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FormCardMultiInput from "../components/Card/FormCard/FormCardMultiInput";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import TextQuestion from "../components/TextQuestion";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm36Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Family" titleRegular="history" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <label>
        Have any
        <strong> family members</strong> had any of the following?
      </label>
      <div className="flex">
        <FieldArray
          component={CheckboxCard}
          columnHeader="A-M"
          checkboxInfo={[
            {
              cardName: "fh-drug-abuse",
              cardKey: "A",
              cardLabel: "Alcohol/Drug abuse",
              tabOrder: "1",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-alzheimers",
              cardKey: "B",
              cardLabel: "Alzheimer's Disease",
              tabOrder: "2",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-behavior-disorder",
              cardKey: "C",
              cardLabel: "Behavior disorder",
              tabOrder: "3",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-birth-defect",
              cardKey: "D",
              cardLabel: "Birth defect",
              tabOrder: "4",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-cancer",
              cardKey: "E",
              cardLabel: "Cancer",
              tabOrder: "5",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-cerbral-palsy",
              cardKey: "F",
              cardLabel: "Cerebral Palsy",
              tabOrder: "6",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-cystic-fibrosis",
              cardKey: "G",
              cardLabel: "Cystic Fibrosis",
              tabOrder: "7",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-diabetes",
              cardKey: "H",
              cardLabel: "Diabetes",
              tabOrder: "8",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-emotional-disturbance",
              cardKey: "I",
              cardLabel: "Emotional disturbance",
              tabOrder: "9",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-food-allergies",
              cardKey: "J",
              cardLabel: "Food allergies",
              tabOrder: "10",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-heart-disease",
              cardKey: "K",
              cardLabel: "Heart disease",
              tabOrder: "11",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-hemophilia",
              cardKey: "L",
              cardLabel: "Heart disease",
              tabOrder: "12",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-high-blood-pressure",
              cardKey: "M",
              cardLabel: "High blood pressure",
              tabOrder: "13",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-huntington-chorea",
              cardKey: "N",
              cardLabel: "Huntington's Chorea",
              tabOrder: "14",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-intellectual-disability",
              cardKey: "O",
              cardLabel: "Intellectual disability",
              tabOrder: "15",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-kidney-disease",
              cardKey: "P",
              cardLabel: "Kidney disease",
              tabOrder: "16",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-mental-illness",
              cardKey: "Q",
              cardLabel: "Mental illness",
              tabOrder: "17",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-migraines",
              cardKey: "R",
              cardLabel: "Migraine headaches",
              tabOrder: "18",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-multiple-sclerosis",
              cardKey: "S",
              cardLabel: "Multiple Sclerosis",
              tabOrder: "19",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-muscular-dystrophy",
              cardKey: "T",
              cardLabel: "Muscular Dystrophy",
              tabOrder: "20",
              liClasses: "question__choice--full-width"
            }
          ]}
          name="fh-conditions-group"
          classes="question question--thumbless grid__half"
        />
        <FieldArray
          component={CheckboxCard}
          columnHeader="N-Z"
          checkboxInfo={[
            {
              cardName: "fh-nervousness",
              cardKey: "A",
              cardLabel: "Nervousness",
              tabOrder: "1",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-other-learning-disability",
              cardKey: "B",
              cardLabel: "Other learning disability",
              tabOrder: "2",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-parkinsons",
              cardKey: "C",
              cardLabel: "Parkinson's Disease",
              tabOrder: "3",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-physical-handicap",
              cardKey: "D",
              cardLabel: "Physical handicap",
              tabOrder: "4",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-reading-problem",
              cardKey: "E",
              cardLabel: "Reading problem",
              tabOrder: "5",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-seizures",
              cardKey: "F",
              cardLabel: "Seizures or Epilepsy",
              tabOrder: "6",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-severe-head-injury",
              cardKey: "G",
              cardLabel: "Severe head injury",
              tabOrder: "7",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-sickle-cell",
              cardKey: "H",
              cardLabel: "Sickle-cell anemia",
              tabOrder: "8",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-speech-problem",
              cardKey: "I",
              cardLabel: "Speech or language problem",
              tabOrder: "9",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-stroke",
              cardKey: "J",
              cardLabel: "Stroke",
              tabOrder: "10",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-tay-sachs",
              cardKey: "K",
              cardLabel: "Tay-Sachs Disease",
              tabOrder: "11",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-tourettes",
              cardKey: "L",
              cardLabel: "Tourette's Syndrome",
              tabOrder: "12",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-tuberculosis",
              cardKey: "M",
              cardLabel: "Tuberculosis",
              tabOrder: "13",
              liClasses: "question__choice--full-width"
            },
            {
              cardName: "fh-other",
              cardKey: "N",
              cardLabel: "Other",
              tabOrder: "14",
              liClasses: "question__choice--full-width"
            }
          ]}
          labelBold="N-Z"
          name="fh-conditions-group"
          classes="question question--thumbless grid__half"
        />
      </div>
      <Field
        alt="Health"
        component={TextQuestion}
        label="What's the father's"
        labelBold="present"
        labelLast="health"
        name="fh-fathers-health"
        src="img/icons-health-heart-check.svg"
        tabOrder="15"
        type="input"
        classes="question"
      />
      <Field
        alt="Health"
        component={TextQuestion}
        label="What's the mother's"
        labelBold="present"
        labelLast="health"
        name="fh-mothers-health"
        src="img/icons-health-heart-check.svg"
        tabOrder="16"
        type="input"
        classes="question"
      />
      <label>
        Has anyone in the family ever been in
        <strong> special education</strong>?
      </label>
      <FieldArray
        name="special-ed-group"
        component={FormCardMultiInput}
        fieldInputs={[
          {
            inputName: "mc-special-ed-name",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Name",
            inputPlaceholder: "Name"
          },
          {
            inputName: "mc-special-ed-class",
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
