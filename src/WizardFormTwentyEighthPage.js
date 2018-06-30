import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import DescriptionCheckboxCard from "./components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormTwentyEighthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Allergies" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardName: "mdh-allergies-medicine",
            cardLabel: "Allergies to medicine",
            liClasses: "question__choice--full-width",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardName: "mdh-allergies-food",
            cardLabel: "Allergies to food",
            liClasses: "question__choice--full-width",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardName: "mdh-allergies-other",
            cardLabel: "Other allergies",
            liClasses: "question__choice--full-width",
            tabOrder: "3"
          }
        ]}
        label="During this child"
        labelBold="currently"
        labelLast="have any of the following"
        name="mdh-allergies-group"
        classes="question question--thumbless"
      />

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
})(WizardFormTwentyEighthPage);
