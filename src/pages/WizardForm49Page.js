import React from "react";
import "../app.css";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";

const WizardForm49Page = props => {
  const { handleSubmit } = props;

  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Recommendations" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: "recommendation-adhd",
            cardKey: "A",
            cardLabel: "ADHD",
            tabOrder: "1"
          },
          {
            cardName: "recommendation-autism",
            cardKey: "B",
            cardLabel: "Autism",
            tabOrder: "2"
          },
          {
            cardName: "recommendation-dementia",
            cardKey: "C",
            cardLabel: "DEMENTIA",
            tabOrder: "3"
          },
          {
            cardName: "recommendation-dysthymia",
            cardKey: "D",
            cardLabel: "Dysthymia",
            tabOrder: "4"
          },
          {
            cardName: "recommendation-learning-disability-mathematics",
            cardKey: "E",
            cardLabel: "Learning Disability Mathematics",
            tabOrder: "5"
          },
          {
            cardName: "recommendation-learning-disability-reading",
            cardKey: "F",
            cardLabel: "Learning Disability Reading",
            tabOrder: "6"
          },
          {
            cardName: "recommendation-neurocognitive-disorder",
            cardKey: "G",
            cardLabel: "Neurocognitive Disorder",
            tabOrder: "7"
          }
        ]}
        label="Select to use"
        labelBold="template"
        labelLast="recommendations"
        name="recommendations-group"
        classes="question question--thumbless"
      />
      <div className="grid__two-thirds">
        <label>Enter any freehand recommendations</label>
        <Field name="recommendations-freehand" component="textarea" />
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
})(WizardForm49Page);
