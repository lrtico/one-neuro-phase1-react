import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import TextQuestion from "./components/TextQuestion/";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import RadioCard from "./components/Card/RadioCard/RadioCard";

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

const WizardForm02Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Demographics" titleRegular="info" />
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What's the patient's"
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
          label="Where were they"
          labelBold="evaluated"
          name="di-evaluationlocation"
          src="img/icons-office-building.svg"
          tabOrder="2"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          alt="Cake"
          component={TextQuestion}
          label="What's their"
          labelBold="date of birth"
          name="di-dateofbirth"
          src="img/icons-birthday-cake.svg"
          tabOrder="3"
          type="date"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="What's their"
          labelBold="age"
          name="di-age"
          tabOrder="4"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          alt="School"
          component={TextQuestion}
          label="What school did they attend"
          name="di-school"
          src="img/icons-school.svg"
          tabOrder="5"
          type="input"
          classes="question grid__half"
        />
        <Field
          component={TextQuestion}
          label="What"
          labelBold="grade"
          labelLast="are they in"
          name="di-grade"
          type="input"
          tabOrder="6"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What's their parent's name"
          name="di-parent-name"
          type="input"
          src="img/icons-happy-face-name.svg"
          tabOrder="7"
          classes="question grid__half"
        />
        <Field
          alt="Phone"
          component={TextQuestion}
          label="What's their parent's"
          labelBold="phone"
          name="di-parent-phone"
          src="img/icons-phone.svg"
          type="input"
          tabOrder="8"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <div>
          <Field
            name="di-gender-group"
            component={RadioCard}
            cardInfo={[
              {
                thumbnail: "img/icons-woman-generic.svg",
                thumbnailAlt: "Girl",
                cardName: "di-gender",
                cardKey: "A",
                cardLabel: "Girl",
                tabOrder: "9"
              },
              {
                thumbnail: "img/icons-man-generic.svg",
                thumbnailAlt: "Boy",
                cardName: "di-gender",
                cardKey: "B",
                cardLabel: "Boy",
                tabOrder: "10"
              }
            ]}
            label="What's the"
            labelBold="gender"
            labelLast="of this child"
            classes="question question--thumb grid__half"
          />
        </div>
        <div>
          <Field
            name="di-hand-ing"
            component={RadioCard}
            cardInfo={[
              {
                thumbnail: "img/icons-hand-left.svg",
                thumbnailAlt: "Left hand",
                cardName: "di-handedness",
                cardKey: "A",
                cardLabel: "Left",
                tabOrder: "13"
              },
              {
                thumbnail: "img/icons-hand-right.svg",
                thumbnailAlt: "Right hand",
                cardName: "di-handedness",
                cardKey: "B",
                cardLabel: "Right",
                tabOrder: "14"
              }
            ]}
            label="Which"
            labelBold="hand"
            labelLast="is dominant"
            classes="question question--thumb grid__half"
          />
        </div>
      </div>
      <div className="question">
        <Field
          alt="Calendar"
          component={TextQuestion}
          label="What's the"
          labelBold="date(s)"
          labelLast="of testing"
          name="di-dateoftesting"
          src="img/icons-calendar-large.svg"
          tabOrder="13"
          type="date"
          classes="question"
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
})(WizardForm02Page);
