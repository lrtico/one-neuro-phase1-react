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

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

const WizardForm06Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Background" titleRegular="history" />
      <SectionSubTitle subTitleFirst="Parent's" subTitleBold="information" />
      <div className="flex">
        <SectionSubHeader subHeader="Mother" />
        <ButtonToggle buttonToggleLabel="primary caregiver" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What's the mother's"
          labelBold="name"
          name="bh-mother-name"
          src="img/icons-happy-face-name.svg"
          tabOrder="1"
          type="input"
          classes="question grid__half"
        />
        <Field
          name="bh-stepmother-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "bh-stepmother",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "2"
            },
            {
              cardName: "bh-stepmother",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "3"
            }
          ]}
          label="Is she the"
          labelBold="stepmother"
          classes="question question--thumbless"
        />
      </div>
      <div className="flex">
        <Field
          alt="House"
          component={TextQuestion}
          label="What's her"
          labelBold="address"
          name="bh-mother-address"
          src="img/icons-house.svg"
          tabOrder="4"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="What's her"
          labelBold="age"
          name="bh-mother-age"
          tabOrder="5"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          alt="Phone"
          component={TextQuestion}
          label=""
          labelBold="Home"
          labelLast="phone"
          name="bh-mother-home-phone"
          src="img/icons-phone.svg"
          tabOrder="6"
          type="input"
          classes="question grid__third"
        />
        <Field
          alt="Phone"
          component={TextQuestion}
          label=""
          labelBold="Work"
          labelLast="phone"
          name="bh-mother-work-phone"
          src="img/icons-phone.svg"
          tabOrder="7"
          type="input"
          classes="question grid__third"
        />
        <Field
          alt="Phone"
          component={TextQuestion}
          label=""
          labelBold="Cell"
          labelLast="phone"
          name="bh-mother-cell-phone"
          src="img/icons-phone.svg"
          tabOrder="8"
          type="input"
          classes="question grid__third"
        />
      </div>
      <div className="flex">
        <Field
          alt="Woman"
          component={TextQuestion}
          label="What's the mother's"
          labelBold="occupation"
          name="bh-mother-occupation"
          src="img/icons-woman-generic.svg"
          tabOrder="9"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="Who's her"
          labelBold="employer"
          name="bh-mother-employer"
          alt="Office"
          src="img/icons-business-building.svg"
          type="input"
          tabOrder="10"
          classes="question grid__half"
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
})(WizardForm06Page);
