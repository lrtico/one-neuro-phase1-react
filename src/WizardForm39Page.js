import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import CheckboxCard from "./components/Card/CheckboxCard/CheckboxCard";
import TextQuestion from "./components/TextQuestion";

const WizardForm39Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Behavior &amp; Temperment" />
        <div className="toggleVis">
          <div className="btn__hover" />
          <span>disable</span>
        </div>
      </div>
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: "bt-overstimulated",
            cardKey: "A",
            cardLabel: "Is easily overstimulated in play",
            tabOrder: "1"
          },
          {
            cardName: "bt-attention-span",
            cardKey: "B",
            cardLabel: "Has a short attention span",
            tabOrder: "2"
          },
          {
            cardName: "bt-self-control",
            cardKey: "C",
            cardLabel: "Lacks self-control",
            tabOrder: "3"
          },
          {
            cardName: "bt-unhappy",
            cardKey: "D",
            cardLabel: "Seems unhappy most of the time",
            tabOrder: "4"
          },
          {
            cardName: "bt-affectionless",
            cardKey: "E",
            cardLabel: "Withholds affection",
            tabOrder: "5"
          },
          {
            cardName: "bt-hides-feelings",
            cardKey: "F",
            cardLabel: "Hides feelings",
            tabOrder: "6"
          },
          {
            cardName: "bt-over-engergetic",
            cardKey: "G",
            cardLabel: "Seems over energetic in play",
            tabOrder: "7"
          },
          {
            cardName: "bt-impulsive",
            cardKey: "H",
            cardLabel: "Seems impulsive",
            tabOrder: "8"
          },
          {
            cardName: "bt-overreacts-problems",
            cardKey: "I",
            cardLabel: "Overreacts in the face of problems",
            tabOrder: "9"
          },
          {
            cardName: "bt-shy",
            cardKey: "J",
            cardLabel: "Uncomfortable meeting new people",
            tabOrder: "10"
          },
          {
            cardName: "bt-parental-attention",
            cardKey: "K",
            cardLabel: "Requires a lot of parental attention",
            tabOrder: "11"
          },
          {
            cardName: "bt-cannot-calm",
            cardKey: "L",
            cardLabel: "Cannot calm down",
            tabOrder: "12"
          }
        ]}
        label="Does this child"
        labelBold="exhibit"
        labelLast="any of the following"
        name="bt-exhibit-group"
        classes="question question--thumbless"
      />
      <Field
        alt="Ghost"
        component={TextQuestion}
        label="Does this child have"
        labelBold="fears"
        name="bt-fears"
        src="img/icons-ghost.svg"
        tabOrder="13"
        type="input"
        classes="question"
      />
      <Field
        alt="Bomb"
        component={TextQuestion}
        label="What makes this child"
        labelBold="angry"
        name="bt-angry"
        src="img/icons-bomb.svg"
        tabOrder="14"
        type="input"
        classes="question"
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm39Page);
