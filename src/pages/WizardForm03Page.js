import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import TextQuestion from "../components/TextQuestion";
import NormalizePhoneInput from "../components/TextQuestion/NormalizePhoneInput";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import Button from "../components/Button";
import { normalizePhone } from "../utils/Normalize";

const WizardForm03Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Person" titleRegular="answering questions" />
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What's the person's"
          labelBold="name"
          name="paq-name"
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
          name="paq-address"
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
            },
            {
              cardName: "paq-guardian",
              cardKey: "F",
              cardLabel: "Other",
              tabOrder: "6"
            }
          ]}
          label="What's the"
          labelBold="relationship"
          labelLast="to the child"
          name="paq-relationship"
          classes="question question--thumbless"
        />
        <Field
          component={TextQuestion}
          label="Other"
          labelBold="relationship"
          name="paq-guardian-other-group"
          tabOrder="7"
          type="input"
          classes="question grid__quarter"
        />
      </div>
      <div className="flex">
        <Field
          alt="Phone"
          component={NormalizePhoneInput}
          label=""
          labelBold="Home"
          labelLast="phone"
          name="paq-home-phone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="8"
          type="text"
          classes="question grid__third"
          normalize={normalizePhone}
        />
        <Field
          alt="Phone"
          component={NormalizePhoneInput}
          label=""
          labelBold="Work"
          labelLast="phone"
          name="paq-work-phone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="9"
          type="text"
          classes="question grid__third"
          normalize={normalizePhone}
        />
        <Field
          alt="Phone"
          component={NormalizePhoneInput}
          label=""
          labelBold="Cell"
          labelLast="phone"
          name="paq-cell-phone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="10"
          type="text"
          classes="question grid__third"
          normalize={normalizePhone}
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
})(WizardForm03Page);
