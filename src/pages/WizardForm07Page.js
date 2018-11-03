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

const WizardForm07Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Background" titleRegular="history" />
      <SectionSubTitle subTitleFirst="Parent's" subTitleBold="information" />
      <div className="flex">
        <SectionSubHeader subHeader="Father" />
        <ButtonToggle buttonToggleLabel="primary caregiver" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What's the father's"
          labelBold="name"
          name="bh-father-name"
          src="img/icons-happy-face-name.svg"
          tabOrder="1"
          type="input"
          classes="question grid__half"
        />
        <Field
          name="bh-stepfather-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "bh-stepfather",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "2"
            },
            {
              cardName: "bh-stepfather",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "3"
            }
          ]}
          label="Is he the"
          labelBold="stepfather"
          classes="question question--thumbless"
        />
      </div>
      <div className="flex">
        <Field
          alt="House"
          component={TextQuestion}
          label="What's his"
          labelBold="address"
          name="bh-father-address"
          src="img/icons-house.svg"
          tabOrder="4"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="What's his"
          labelBold="age"
          name="bh-father-age"
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
          name="bh-father-home-phone"
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
          name="bh-father-work-phone"
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
          name="bh-father-cell-phone"
          src="img/icons-phone.svg"
          tabOrder="8"
          type="input"
          classes="question grid__third"
        />
      </div>
      <div className="flex">
        <Field
          alt="Man"
          component={TextQuestion}
          label="What's the father's"
          labelBold="occupation"
          name="bh-father-occupation"
          src="img/icons-man-generic.svg"
          tabOrder="9"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="Who's his"
          labelBold="employer"
          name="bh-father-employer"
          alt="Office"
          src="img/icons-business-building.svg"
          type="input"
          tabOrder="10"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          component={TextQuestion}
          label="How many"
          labelBold="years"
          labelLast="has he worked there"
          src="img/icons-calendar-large.svg"
          alt="Calendar"
          name="bh-father-length-employement"
          tabOrder="11"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="What's the"
          labelBold="highest grade"
          labelLast="achieved"
          src="img/icons-graduation-cap.svg"
          alt="Graduation cap"
          name="bh-father-highest-grade"
          type="input"
          tabOrder="12"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          component={TextQuestion}
          label="What's their"
          labelBold="primary language"
          src="img/icons-speech-bubble.svg"
          alt="Speech bubble"
          name="bh-father-primary-language"
          tabOrder="13"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="What's their"
          labelBold="secondary language"
          labelLast="achieved"
          src="img/icons-speech-bubble.svg"
          alt="Speech bubble"
          name="bh-father-secondary-language"
          type="input"
          tabOrder="14"
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
})(WizardForm07Page);
