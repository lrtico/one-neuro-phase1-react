import React, { Component } from "react";
import "../app.css";
import { FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import Recommendations from "../components/Recommendations/Recommendations";

class WizardForm49Page extends Component {
  onCheckboxClick = input => {
    console.log(
      "Recommendation's passed argument from onCheckboxClick ",
      input
    );
    this.props.change(input.name, !input.checked);
  };
  render() {
    const { handleSubmit } = this.props;
    console.log("Page 49 props ", this.props);
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
              tabOrder: "1",
              recommendation: true
            },
            {
              cardName: "recommendation-autism",
              cardKey: "B",
              cardLabel: "Autism",
              tabOrder: "2",
              recommendation: true
            },
            {
              cardName: "recommendation-dementia",
              cardKey: "C",
              cardLabel: "DEMENTIA",
              tabOrder: "3",
              recommendation: true
            },
            {
              cardName: "recommendation-dysthymia",
              cardKey: "D",
              cardLabel: "Dysthymia",
              tabOrder: "4",
              recommendation: true
            },
            {
              cardName: "recommendation-learning-disability-mathematics",
              cardKey: "E",
              cardLabel: "Learning Disability Mathematics",
              tabOrder: "5",
              recommendation: true
            },
            {
              cardName: "recommendation-learning-disability-reading",
              cardKey: "F",
              cardLabel: "Learning Disability Reading",
              tabOrder: "6",
              recommendation: true
            },
            {
              cardName: "recommendation-neurocognitive-disorder",
              cardKey: "G",
              cardLabel: "Neurocognitive Disorder",
              tabOrder: "7",
              recommendation: true
            }
          ]}
          label="Would you like to use recommendation"
          labelBold="templates"
          labelLast="in the PDF"
          name="recommendations-group"
          classes="question question--thumbless"
        />
        <Recommendations onCheckboxClick={this.onCheckboxClick} />
        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm49Page);
