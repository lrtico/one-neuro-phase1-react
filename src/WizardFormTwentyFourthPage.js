import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import Button from "./components/Button";
import FormCardStacked from "./components/Card/FormCard/FormCardStacked";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormTwentyFourthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Genitourinary" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="md-genitourinary-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "md-urination",
              cardLabel: "Urination in pants?",
              cardPlaceholder: "How often?",
              tabOrder: "1"
            },
            {
              cardName: "md-pain-urinating",
              cardLabel: "Pain while urinating?",
              cardPlaceholder: "How often?",
              tabOrder: "2"
            },
            {
              cardName: "md-exessive-urination",
              cardLabel: "Excessive urination?",
              cardPlaceholder: "How often?",
              tabOrder: "3"
            },
            {
              cardName: "md-urine-odor",
              cardLabel: "Strong odor to urine?",
              cardPlaceholder: "How often?",
              tabOrder: "4"
            }
          ]}
          label="Does this child"
          labelBold="currently"
          labelLast="have any of the following problems"
          classes="question"
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
})(WizardFormTwentyFourthPage);
