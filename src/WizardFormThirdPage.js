import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import TextQuestion from "./components/TextQuestion";
import RadioCard from "./components/Card/RadioCard/RadioCard";
import Button from "./components/Button";

const WizardFormThirdPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Person" titleRegular="answering questions" />
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What's the person's"
          labelBold="name"
          name="di-name"
          src="img/icons-happy-face-name.svg"
          tabOrder="1"
          type="input"
          classes="question grid__half"
        />
        <Field
          alt="Building"
          component={TextQuestion}
          label="What's the person's"
          labelBold="address"
          name="di-evaluationlocation"
          src="img/icons-house.svg"
          tabOrder="2"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "paq-guardian",
              cardKey: "A",
              cardLabel: "Mother",
              tabOrder: "3"
            },
            {
              cardName: "paq-guardian",
              cardKey: "B",
              cardLabel: "Father",
              tabOrder: "4"
            },
            {
              cardName: "paq-guardian",
              cardKey: "C",
              cardLabel: "Grandmother",
              tabOrder: "5"
            },
            {
              cardName: "paq-guardian",
              cardKey: "D",
              cardLabel: "Grandfather",
              tabOrder: "5"
            },
            {
              cardName: "paq-guardian",
              cardKey: "E",
              cardLabel: "Aunt",
              tabOrder: "6"
            }
          ]}
          label="What's the"
          labelBold="relationship"
          labelLast="to the child"
          name="paq-relationship"
          classes="question question--thumbless"
        />
      </div>
      <div className="flex">
        <Field
          alt="Phone"
          component={TextQuestion}
          labelBold="Home"
          labelLast="phone"
          name="paq-home-phone"
          src="img/icons-phone.svg"
          tabOrder="7"
          type="input"
          classes="question grid__third"
        />
        <Field
          alt="Phone"
          component={TextQuestion}
          labelBold="Work"
          labelLast="phone"
          name="paq-work-phone"
          src="img/icons-phone.svg"
          tabOrder="8"
          type="input"
          classes="question grid__third"
        />
        <Field
          alt="Phone"
          component={TextQuestion}
          labelBold="Cell"
          labelLast="phone"
          name="paq-cell-phone"
          src="img/icons-phone.svg"
          tabOrder="9"
          type="input"
          classes="question grid__third"
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
})(WizardFormThirdPage);
