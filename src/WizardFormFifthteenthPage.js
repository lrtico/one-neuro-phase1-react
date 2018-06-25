import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import RadioCard from "./components/Card/RadioCard/RadioCard";
import CheckboxCard from "./components/Card/CheckboxCard/CheckboxCard";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import DescriptionCheckboxCard from "./components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
// import TextQuestion from "./components/TextQuestion";

const WizardFormFifthteenthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Pregnancy" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="mdh-planned-pregnancy-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-planned-pregnancy",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "1"
            },
            {
              cardName: "mdh-planned-pregnancy",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "2"
            }
          ]}
          label="Was this a"
          labelBold="planned"
          labelLast="pregnancy"
          classes="question grid__half question--thumbless"
        />
        <Field
          name="mdh-dr-care-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-dr-care",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "3"
            },
            {
              cardName: "mdh-dr-care",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "4"
            }
          ]}
          label="Was the mother under a"
          labelBold="doctor's"
          labelLast="care"
          classes="question grid__half question--thumbless"
        />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-total-pregnancies",
              cardLabel: "1",
              tabOrder: "5"
            },
            {
              cardName: "mdh-total-pregnancies",
              cardLabel: "2",
              tabOrder: "6"
            },
            {
              cardName: "mdh-total-pregnancies",
              cardLabel: "3",
              tabOrder: "7"
            },
            {
              cardName: "mdh-total-pregnancies",
              cardLabel: "4",
              tabOrder: "8"
            },
            {
              cardName: "mdh-total-pregnancies",
              cardLabel: "5",
              tabOrder: "9"
            },
            {
              cardName: "mdh-total-pregnancies",
              cardLabel: "6",
              tabOrder: "10"
            }
          ]}
          label="The number of"
          labelBold="previous"
          labelLast="pregnancies/miscarriages"
          name="mdh-total-pregnancies-group"
          classes="question question--thumbless question--numbers"
        />
      </div>
      <FieldArray
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardLabel: "Other",
            tabOrder: "11",
            cardDescription: "mdh-other-description"
          },
          {
            cardKey: "B",
            cardLabel: "Maternal injury",
            tabOrder: "12",
            cardDescription: "mdh-maternal-injury-description"
          }
        ]}
        label="Check any of the following"
        labelBold="complications"
        labelLast="that occured during pregnancy"
        name="mdh-complications-pregnancy-group"
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
})(WizardFormFifthteenthPage);
