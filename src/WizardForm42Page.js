import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import RadioCard from "./components/Card/RadioCard/RadioCard";

const WizardForm42Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Religious &amp; racial ethnic"
        titleRegular="identification"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Current religious denomination/affiliation" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        name="rda-religon-affiliation-group"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "rda-religon-affiliation",
            cardKey: "A",
            cardLabel: "Protestant",
            tabOrder: "1"
          },
          {
            cardName: "rda-religon-affiliation",
            cardKey: "B",
            cardLabel: "Catholic",
            tabOrder: "2"
          },
          {
            cardName: "rda-religon-affiliation",
            cardKey: "C",
            cardLabel: "Jewish",
            tabOrder: "3"
          },
          {
            cardName: "rda-religon-affiliation",
            cardKey: "D",
            cardLabel: "Islamic",
            tabOrder: "4"
          },
          {
            cardName: "rda-religon-affiliation",
            cardKey: "E",
            cardLabel: "Buddhist",
            tabOrder: "5"
          },
          {
            cardName: "rda-religon-affiliation",
            cardKey: "F",
            cardLabel: "Hindu",
            tabOrder: "6"
          },
          {
            cardName: "rda-religon-affiliation",
            cardKey: "G",
            cardLabel: "Other",
            tabOrder: "7"
          }
        ]}
        classes="question question--thumbless"
      />
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "rda-religon-involvement",
              cardLabel: "1",
              tabOrder: "8"
            },
            {
              cardName: "rda-religon-involvement",
              cardLabel: "2",
              tabOrder: "9"
            },
            {
              cardName: "rda-religon-involvement",
              cardLabel: "3",
              tabOrder: "10"
            },
            {
              cardName: "rda-religon-involvement",
              cardLabel: "4",
              tabOrder: "11"
            },
            {
              cardName: "rda-religon-involvement",
              cardLabel: "5",
              tabOrder: "12"
            }
          ]}
          label="How"
          labelBold="involved are you,"
          labelLast="with 1 being not very and 5 being very involved"
          name="rda-religon-involvment-group"
          classes="question question--thumbless question--numbers"
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
})(WizardForm42Page);
