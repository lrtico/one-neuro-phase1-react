import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm24Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex" onClick={() => handleDisable(24)}>
        <SectionSubHeader subHeader="Genitourinary" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="flex">
        <Field
          name="mdGenitourinaryGroup"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "mdUrination",
              cardLabel: "Urination in pants?",
              cardPlaceholder: "How often?",
              tabOrder: "1",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdPainUrinating",
              cardLabel: "Pain while urinating?",
              cardPlaceholder: "How often?",
              tabOrder: "2",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdExessiveUrination",
              cardLabel: "Excessive urination?",
              cardPlaceholder: "How often?",
              tabOrder: "3",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "mdUrineOdor",
              cardLabel: "Strong odor to urine?",
              cardPlaceholder: "How often?",
              tabOrder: "4",
              normalizeCapitalizeWords: true
            }
          ]}
          label="Does this child"
          labelBold="currently"
          labelLast="have any of the following problems"
          classes="question"
          disabled={disabled}
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
})(WizardForm24Page);
