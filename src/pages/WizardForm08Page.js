import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import TextQuestion from "../components/TextQuestion/";
import SectionTitle from "../components/SectionTitle";
import SectionSubTitle from "../components/SectionSubTitle";
import Button from "../components/Button";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import SectionSubHeader from "../components/SectionSubHeader";
import ButtonToggle from "../components/ButtonToggle";
import NormalizePhoneInput from "../components/TextQuestion/NormalizePhoneInput";
import { normalizePhone } from "../utils/Normalize";

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

const WizardForm08Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Background" titleRegular="history" />
      <SectionSubTitle subTitleFirst="Parent's" subTitleBold="information" />
      <div className="flex">
        <SectionSubHeader subHeader="Other" />
        <ButtonToggle buttonToggleLabel="primary caregiver" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>

      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="Name of"
          labelBold="primary caregiver"
          name="bh-primary-caregiver-name"
          src="img/icons-happy-face-name.svg"
          tabOrder="1"
          type="text"
          classes="question grid__three-quarters"
        />
        <Field
          component={TextQuestion}
          label="What's their"
          labelBold="age"
          name="bh-other-parent-stepparent-age"
          tabOrder="4"
          type="text"
          classes="question grid__quarter"
        />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "bh-other-parent-stepparent-guardian",
              cardKey: "A",
              cardLabel: "Grandmother",
              tabOrder: "5"
            },
            {
              cardName: "bh-other-parent-stepparent-guardian",
              cardKey: "B",
              cardLabel: "Grandfather",
              tabOrder: "6"
            },
            {
              cardName: "bh-other-parent-stepparent-guardian",
              cardKey: "C",
              cardLabel: "Aunt",
              tabOrder: "7"
            },
            {
              cardName: "bh-other-parent-stepparent-guardian",
              cardKey: "D",
              cardLabel: "Uncle",
              tabOrder: "8"
            },
            {
              cardName: "bh-other-parent-stepparent-guardian",
              cardKey: "E",
              cardLabel: "Cousin",
              tabOrder: "9"
            }
          ]}
          label="What's the"
          labelBold="relationship"
          labelLast="to the child"
          name="bh-other-parent-stepparent-relationship"
          classes="question question--thumbless"
        />
      </div>
      <div className="flex">
        <Field
          alt="Phone"
          component={NormalizePhoneInput}
          label=""
          labelBold="Home"
          labelLast="phone"
          name="bh-other-parent-stepparent-home-phone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="10"
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
          name="bh-other-parent-stepparent-work-phone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="11"
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
          name="bh-other-parent-stepparent-cell-phone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="12"
          type="text"
          classes="question grid__third"
          normalize={normalizePhone}
        />
      </div>
      <Field
        alt="House"
        component={TextQuestion}
        label="What's their"
        labelBold="address"
        name="bh-other-parent-stepparent-address"
        src="img/icons-house.svg"
        tabOrder="13"
        type="input"
        classes="question"
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
})(WizardForm08Page);
