import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import RadioCard from "./components/Card/RadioCard/RadioCard";
import DescriptionCheckboxCard from "./components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormFourteenthPage = props => {
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
              cardLabel: "Yes ",
              tabOrder: "1"
            },
            {
              cardName: "mdh-planned-pregnancy",
              cardKey: "B",
              cardLabel: "No ",
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
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardName: "mdh-pregnancy-difficult-conception",
            cardLabel: "Difficulty in conception",
            tabOrder: "11"
          },
          {
            cardKey: "B",
            cardName: "mdh-pregnancy-toxemia",
            cardLabel: "Toxemia",
            tabOrder: "12"
          },
          {
            cardKey: "C",
            cardName: "mdh-pregnancy-weight-gain",
            cardLabel: "Abnormal weight gain",
            tabOrder: "13"
          },
          {
            cardKey: "D",
            cardName: "mdh-pregnancy-vomiting",
            cardLabel: "Excessive vomiting",
            tabOrder: "14"
          },
          {
            cardName: "mdh-pregnancy-german-measels",
            cardKey: "E",
            cardLabel: "German measels",
            tabOrder: "15"
          },
          {
            cardKey: "F",
            cardName: "mdh-pregnancy-swelling",
            cardLabel: "Excessive swelling",
            tabOrder: "16"
          },
          {
            cardKey: "G",
            cardName: "mdh-pregnancy-emotional",
            cardLabel: "Emotional problems",
            tabOrder: "17"
          },
          {
            cardKey: "H",
            cardName: "mdh-pregnancy-vaginal-bleeding",
            cardLabel: "Vaginal bleeding",
            tabOrder: "18"
          },
          {
            cardKey: "I",
            cardName: "mdh-pregnancy-flu",
            cardLabel: "Flu",
            tabOrder: "19"
          },
          {
            cardKey: "J",
            cardName: "mdh-pregnancy-anemia",
            cardLabel: "Anemia",
            tabOrder: "20"
          },
          {
            cardKey: "K",
            cardName: "mdh-pregnancy-blood-pressure",
            cardLabel: "High blood pressure",
            tabOrder: "21"
          },
          {
            cardKey: "L",
            cardName: "mdh-pregnancy-other",
            cardLabel: "Other",
            tabOrder: "22",
            cardDescription: "mdh-other-description"
          },
          {
            cardKey: "B",
            cardName: "mdh-pregnancy-injury",
            cardLabel: "Maternal injury",
            tabOrder: "23",
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
})(WizardFormFourteenthPage);
