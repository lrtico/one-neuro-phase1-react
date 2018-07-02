import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import RadioCard from "./components/Card/RadioCard/RadioCard";

const WizardFormFourtyFourthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Religious &amp; racial ethnic"
        titleRegular="identification"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Which, if any, are you involved with" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        name="rda-religon-building-group"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "rda-religon-building",
            cardKey: "A",
            cardLabel: "Church",
            tabOrder: "1"
          },
          {
            cardName: "rda-religon-building",
            cardKey: "B",
            cardLabel: "Synagogue",
            tabOrder: "2"
          },
          {
            cardName: "rda-religon-building",
            cardKey: "C",
            cardLabel: "Temple",
            tabOrder: "3"
          },
          {
            cardName: "rda-religon-building",
            cardKey: "D",
            cardLabel: "Other",
            tabOrder: "4"
          }
        ]}
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
})(WizardFormFourtyFourthPage);
