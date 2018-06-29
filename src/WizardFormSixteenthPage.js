import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardStacked from "./components/Card/FormCard/FormCardStacked";
import SectionSubHeader from "./components/SectionSubHeader";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormSixteenthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Early years" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="mdh-development"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "mdh-turn-over",
              cardLabel: "Turn over?",
              cardPlaceholder: "Years/months",
              tabOrder: "1"
            },
            {
              cardName: "mdh-walk-down-stairs",
              cardLabel: "Walk down stairs?",
              cardPlaceholder: "Years/months",
              tabOrder: "2"
            },
            {
              cardName: "mdh-sit-alone",
              cardLabel: "Sit alone?",
              cardPlaceholder: "Years/months",
              tabOrder: "3"
            },
            {
              cardName: "mdh-attracted-sound",
              cardLabel: "Show interest in or attraction to sound?",
              cardPlaceholder: "Years/months",
              tabOrder: "4"
            },
            {
              cardName: "mdh-crawl",
              cardLabel: "Crawl?",
              cardPlaceholder: "Years/months",
              tabOrder: "5"
            },
            {
              cardName: "mdh-understand-words",
              cardLabel: "Understand first words?",
              cardPlaceholder: "Years/months",
              tabOrder: "6"
            },
            {
              cardName: "mdh-stand-alone",
              cardLabel: "Stand alone?",
              cardPlaceholder: "Years/months",
              tabOrder: "7"
            },
            {
              cardName: "mdh-speak-first-words",
              cardLabel: "Speak first words?",
              cardPlaceholder: "Years/months",
              tabOrder: "8"
            },
            {
              cardName: "mdh-walk-alone",
              cardLabel: "Walk alone?",
              cardPlaceholder: "Years/months",
              tabOrder: "9"
            },
            {
              cardName: "mdh-speak-sentences",
              cardLabel: "Speak in sentences?",
              cardPlaceholder: "Years/months",
              tabOrder: "10"
            },
            {
              cardName: "mdh-walk-up-stairs",
              cardLabel: "Walk up stairs?",
              cardPlaceholder: "Years/months",
              tabOrder: "11"
            }
          ]}
          label="At what"
          labelBold="age"
          labelLast="did this child do the following (please indicate year/months of age)"
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
})(WizardFormSixteenthPage);
