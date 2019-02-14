import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import TextQuestion from "../components/TextQuestion";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import FormCardMultiInput from "../components/Card/FormCard/FormCardMultiInput";
import NormalizePhoneInput from "../components/TextQuestion/NormalizePhoneInput";
import { normalizePhone } from "../utils/Normalize";

const WizardForm32Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Medical" titleRegular="care" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What is the primary physicians"
          labelBold="name"
          name="mc-dr-name"
          src="img/icons-happy-face-name.svg"
          tabOrder="1"
          type="input"
          classes="question grid__half"
        />
        <Field
          alt="Building"
          component={NormalizePhoneInput}
          label="What's the primary physicians'"
          labelBold="phone"
          name="mc-dr-phone"
          src="img/icons-phone.svg"
          tabOrder="2"
          type="text"
          classes="question grid__half"
          normalize={normalizePhone}
        />
      </div>
      <div className="flex">
        <Field
          alt="Counter"
          component={TextQuestion}
          label="How often do they"
          labelBold="visit"
          name="mc-dr-visit-count"
          src="img/icons-counter.svg"
          tabOrder="3"
          type="input"
          classes="question grid__third"
        />
        <Field
          alt="Calendar"
          component={TextQuestion}
          label=""
          labelBold="Date"
          labelLast="of last visit"
          name="mc-dr-last-visit"
          src="img/icons-calendar-large.svg"
          tabOrder="4"
          type="date"
          classes="question grid__third"
        />
        <Field
          component={TextQuestion}
          label="How"
          labelBold="long"
          labelLast="since last visit"
          name="mc-dr-last-visit-months"
          tabOrder="5"
          type="text"
          classes="question grid__third"
        />
      </div>
      <label>
        List any medication this child is <strong>currently</strong> taking.
      </label>
      <FieldArray
        name="medication-list-group"
        component={FormCardMultiInput}
        fieldInputs={[
          {
            inputName: "mc-medication-name",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Name",
            inputPlaceholder: "Name",
            normalizeCapitalizeWords: true
          },
          {
            inputName: "mc-medication-reason",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Reason",
            inputPlaceholder: "Reason"
          }
        ]}
      />
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mc-sexual-abuse",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "7"
            },
            {
              cardName: "mc-sexual-abuse",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "8"
            }
          ]}
          label="Has this child ever been"
          labelBold="sexually"
          labelLast="abused"
          name="mc-sexual-abuse-group"
          classes="question question--thumbless"
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
})(WizardForm32Page);
