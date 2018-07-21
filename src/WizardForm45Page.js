import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import TextQuestion from "./components/TextQuestion";

const WizardForm45Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Religious &amp; racial ethnic"
        titleRegular="identification"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Ethnicity, race, and other identification" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        alt="Face"
        component={TextQuestion}
        label="What's the patient's"
        labelBold="ethnicity"
        name="rda-ethnicity"
        src="img/icons-happy-face-name.svg"
        tabOrder="1"
        type="input"
        classes="question"
      />
      <Field
        alt="Face"
        component={TextQuestion}
        label="What's the patient's"
        labelBold="race"
        name="rda-race"
        src="img/icons-happy-face-name.svg"
        tabOrder="2"
        type="input"
        classes="question"
      />
      <Field
        alt="Face"
        component={TextQuestion}
        label="Any other way you identify yourself and consider"
        labelBold="important"
        name="rda-idenfication-other"
        src="img/icons-happy-face-name.svg"
        tabOrder="3"
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
})(WizardForm45Page);
