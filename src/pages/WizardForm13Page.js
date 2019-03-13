import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";
import TextQuestion from "../components/TextQuestion";

const WizardForm13Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex" onClick={() => handleDisable(13)}>
        <SectionTitle titleFirst="Family/Social" titleBold="relations" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: "fr-movies",
            cardKey: "A",
            cardLabel: "Movies",
            tabOrder: "1"
          },
          {
            cardName: "fr-games",
            cardKey: "B",
            cardLabel: "Games",
            tabOrder: "2"
          },
          {
            cardName: "fr-meals",
            cardKey: "C",
            cardLabel: "Meals",
            tabOrder: "3"
          },
          {
            cardName: "fr-sports",
            cardKey: "D",
            cardLabel: "Sports",
            tabOrder: "4"
          },
          {
            cardName: "fr-conversations",
            cardKey: "E",
            cardLabel: "Conversations",
            tabOrder: "5"
          },
          {
            cardName: "fr-trips",
            cardKey: "F",
            cardLabel: "Trips",
            tabOrder: "6"
          },
          {
            cardName: "fr-visits-with-relatives",
            cardKey: "G",
            cardLabel: "Visits with relatives",
            tabOrder: "7"
          },
          {
            cardName: "fr-television",
            cardKey: "H",
            cardLabel: "Television",
            tabOrder: "8"
          },
          {
            cardName: "fr-church",
            cardKey: "I",
            cardLabel: "Church",
            tabOrder: "9"
          },
          {
            cardName: "fr-other",
            cardKey: "J",
            cardLabel: "Other",
            tabOrder: "10"
          }
        ]}
        label="Check all"
        labelBold="activities"
        labelLast="in which this child often participates with family or peers:"
        noQuestionMark={true}
        name="fr-activites-group"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Field
        alt="Speech bubble"
        component={TextQuestion}
        label="What is the"
        labelBold="primary language"
        labelLast="spoken in the residence"
        name="fr-spoken-language"
        src="img/icons-speech-bubble.svg"
        tabOrder="11"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          name="fr-grandparent-frequency-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fr-grandparent-frequency",
              cardKey: "A",
              cardLabel: "Weekly or more often",
              tabOrder: "12"
            },
            {
              cardName: "fr-grandparent-frequency",
              cardKey: "B",
              cardLabel: "Once or twice per month",
              tabOrder: "13"
            },
            {
              cardName: "fr-grandparent-frequency",
              cardKey: "C",
              cardLabel: "Few times per year",
              tabOrder: "14"
            },
            {
              cardName: "fr-grandparent-frequency",
              cardKey: "D",
              cardLabel: "Never",
              tabOrder: "15"
            },
            {
              cardName: "fr-grandparent-frequency",
              cardKey: "E",
              cardLabel: "No grandparents living",
              tabOrder: "16"
            }
          ]}
          label="How"
          labelBold="frequently"
          labelLast="does this child see their grandparents (check one)"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>
      <Field
        alt="Heart"
        component={TextQuestion}
        label="What do you"
        labelBold="enjoy most"
        labelLast="about this child"
        name="fr-enjoy"
        src="img/icons-heart-love.svg"
        tabOrder="17"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Question mark"
        component={TextQuestion}
        label="What do you find"
        labelBold="most difficult"
        labelLast="about raising this child"
        name="fr-difficult"
        src="img/icons-question-mark-plain.svg"
        tabOrder="18"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Graduation cap"
        component={TextQuestion}
        label="What would you like this child to be when he/she"
        labelBold="grows up"
        name="fr-career"
        src="img/icons-graduation-cap.svg"
        tabOrder="19"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          name="fr-education-level-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fr-education-level",
              cardKey: "A",
              cardLabel: "Technical or vocational school",
              tabOrder: "20"
            },
            {
              cardName: "fr-education-level",
              cardKey: "B",
              cardLabel: "College",
              tabOrder: "21"
            },
            {
              cardName: "fr-education-level",
              cardKey: "C",
              cardLabel: "Law, medical, or other advanced studies",
              tabOrder: "22"
            }
          ]}
          label="What"
          labelBold="level of education"
          labelLast="do you hope this child will complete (Check one)"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="fr-disciplinarian-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fr-disciplinarian",
              cardKey: "A",
              cardLabel: "Mother",
              tabOrder: "23"
            },
            {
              cardName: "fr-disciplinarian",
              cardKey: "B",
              cardLabel: "Father",
              tabOrder: "24"
            },
            {
              cardName: "fr-disciplinarian",
              cardKey: "C",
              cardLabel: "Other",
              tabOrder: "25"
            }
          ]}
          label="Who is mainly"
          labelBold="in charge"
          labelLast="of discipline"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Question mark"
          component={TextQuestion}
          label="If"
          labelBold="other,"
          labelLast="please describe who"
          name="fr-disciplinarian-other-desc"
          src="img/icons-question-mark-plain.svg"
          tabOrder="26"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="fr-agree-discipline-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fr-agree-discipline",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "27"
            },
            {
              cardName: "fr-agree-discipline",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "28"
            }
          ]}
          label="Do all caregivers"
          labelBold="agree"
          labelLast="on discipline"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>
      <Field
        component={TextQuestion}
        label="Please describe"
        labelBold="discipline"
        labelLast="techniques"
        name="fr-discipline-techniques"
        tabOrder="29"
        type="input"
        classes="question"
        disabled={disabled}
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
})(WizardForm13Page);
