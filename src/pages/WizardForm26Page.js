import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm26Page = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Skin" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="md-skin-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "md-frequent-rashes",
              cardLabel: "Frequent rashes?",
              cardPlaceholder: "When/where?",
              tabOrder: "1",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-bruises",
              cardLabel: "Bruises easily?",
              cardPlaceholder: "How often?",
              tabOrder: "2",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-sores",
              cardLabel: "Sores?",
              cardPlaceholder: "How often?",
              tabOrder: "3",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-acne",
              cardLabel: "Severe acne?",
              cardPlaceholder: "How often?",
              tabOrder: "4",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-itchy",
              cardLabel: "Itchy skin?",
              cardPlaceholder: "How often?",
              tabOrder: "5",
              normalizeCapitalizeWords: true
            }
          ]}
          label="Does this child"
          labelBold="currently"
          labelLast="have any of the following problems"
          classes="question"
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />

      <button type="button" className="previous" onClick={previousPage} />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm26Page);
