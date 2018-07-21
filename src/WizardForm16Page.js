import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardStacked from "./components/Card/FormCard/FormCardStacked";
import SectionSubHeader from "./components/SectionSubHeader";
import ButtonToggle from "./components/ButtonToggle";

const WizardForm16Page = props => {
  const { handleSubmit } = props;
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
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "1"
            },
            {
              cardName: "mdh-walk-down-stairs",
              cardLabel: "Walk down stairs?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "2"
            },
            {
              cardName: "mdh-sit-alone",
              cardLabel: "Sit alone?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "3"
            },
            {
              cardName: "mdh-attracted-sound",
              cardLabel: "Show interest in or attraction to sound?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "4"
            },
            {
              cardName: "mdh-crawl",
              cardLabel: "Crawl?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "5"
            },
            {
              cardName: "mdh-understand-words",
              cardLabel: "Understand first words?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "6"
            },
            {
              cardName: "mdh-stand-alone",
              cardLabel: "Stand alone?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "7"
            },
            {
              cardName: "mdh-speak-first-words",
              cardLabel: "Speak first words?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "8"
            },
            {
              cardName: "mdh-walk-alone",
              cardLabel: "Walk alone?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "9"
            },
            {
              cardName: "mdh-speak-sentences",
              cardLabel: "Speak in sentences?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "10"
            },
            {
              cardName: "mdh-walk-up-stairs",
              cardLabel: "Walk up stairs?",
              cardType: "month",
              cardValue: "2018-05",
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
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm16Page);
