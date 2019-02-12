import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import TextQuestion from "../components/TextQuestion/";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import ButtonToggle from "../components/ButtonToggle";

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

const WizardForm10Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Family" titleRegular="history" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="fh-parental-closeness"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fh-closeness",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "1"
            },
            {
              cardName: "fh-closeness",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "2"
            }
          ]}
          label="Is this child"
          labelBold="closer"
          labelLast="to one parent than the other"
          classes="question question--thumbless grid__three-quarters"
        />
        <Field
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", which one"
          name="fh-parental-closeness-choice"
          tabOrder="3"
          type="input"
          classes="question grid__half"
        />
      </div>
      <Field
        name="fh-life-experiences"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "fh-experienced",
            cardKey: "A",
            cardLabel: "Yes",
            tabOrder: "4"
          },
          {
            cardName: "fh-experienced",
            cardKey: "B",
            cardLabel: "No",
            tabOrder: "5"
          }
        ]}
        label="Has this child ever experienced any"
        labelBold="parental separations, divorces, or death"
        classes="question question--thumbless"
      />
      <div className="flex">
        <Field
          component={TextQuestion}
          label="If yes,"
          labelBold="when"
          name="fh-life-experiences-date"
          tabOrder="6"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="Child's"
          labelBold="age"
          labelLast="at the time"
          name="fh-life-experiences-age"
          tabOrder="7"
          type="input"
          classes="question grid__half"
        />
      </div>
      <Field
        component={TextQuestion}
        label="Please describe the"
        labelBold="circumstances"
        name="fh-life-experiences-details"
        tabOrder="8"
        type="input"
        classes="question"
      />
      <div className="flex">
        <SectionSubHeader subHeader="If the parents are separated or divorced" />
      </div>
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: "fh-custody-mother",
            cardKey: "A",
            cardLabel: "Mother",
            tabOrder: "9"
          },
          {
            cardName: "fh-custody-father",
            cardKey: "B",
            cardLabel: "Father",
            tabOrder: "10"
          },
          {
            cardName: "fh-custody-both",
            cardKey: "C",
            cardLabel: "Both",
            tabOrder: "11"
          }
        ]}
        name="fh-custody-group"
        label="Who has"
        labelBold="custody"
        labelLast="of this child"
        classes="question question--thumbless"
      />
      <Field
        name="fh-visitation-group"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "fh-visitation",
            cardKey: "A",
            cardLabel: "Weekly or more often",
            tabOrder: "12"
          },
          {
            cardName: "fh-visitation",
            cardKey: "B",
            cardLabel: "Once or twice per month",
            tabOrder: "13"
          },
          {
            cardName: "fh-visitation",
            cardKey: "C",
            cardLabel: "Few times per year",
            tabOrder: "14"
          },
          {
            cardName: "fh-visitation",
            cardKey: "D",
            cardLabel: "Never",
            tabOrder: "15"
          }
        ]}
        label="How often does one parent"
        labelBold="see"
        labelLast="this child (Check one)"
        classes="question question--thumbless"
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
})(WizardForm10Page);
