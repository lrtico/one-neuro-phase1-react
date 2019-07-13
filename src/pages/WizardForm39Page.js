import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import TextQuestion from "../components/TextQuestion";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm39Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Behavior &amp; Temperment" />
        <div onClick={() => handleDisable(39)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: "btOverstimulated",
            cardKey: "A",
            cardLabel: "Is easily overstimulated in play",
            tabOrder: "1"
          },
          {
            cardName: "btAttentionSpan",
            cardKey: "B",
            cardLabel: "Has a short attention span",
            tabOrder: "2"
          },
          {
            cardName: "btSelfControl",
            cardKey: "C",
            cardLabel: "Lacks self-control",
            tabOrder: "3"
          },
          {
            cardName: "btUnhappy",
            cardKey: "D",
            cardLabel: "Seems unhappy most of the time",
            tabOrder: "4"
          },
          {
            cardName: "btAffectionless",
            cardKey: "E",
            cardLabel: "Withholds affection",
            tabOrder: "5"
          },
          {
            cardName: "btHidesFeelings",
            cardKey: "F",
            cardLabel: "Hides feelings",
            tabOrder: "6"
          },
          {
            cardName: "btOverEngergetic",
            cardKey: "G",
            cardLabel: "Seems over energetic in play",
            tabOrder: "7"
          },
          {
            cardName: "btImpulsive",
            cardKey: "H",
            cardLabel: "Seems impulsive",
            tabOrder: "8"
          },
          {
            cardName: "btOverreactsProblems",
            cardKey: "I",
            cardLabel: "Overreacts in the face of problems",
            tabOrder: "9"
          },
          {
            cardName: "btShy",
            cardKey: "J",
            cardLabel: "Uncomfortable meeting new people",
            tabOrder: "10"
          },
          {
            cardName: "btParentalAttention",
            cardKey: "K",
            cardLabel: "Requires a lot of parental attention",
            tabOrder: "11"
          },
          {
            cardName: "btCannotCalm",
            cardKey: "L",
            cardLabel: "Cannot calm down",
            tabOrder: "12"
          }
        ]}
        label="Does this child"
        labelBold="exhibit"
        labelLast="any of the following"
        name="btExhibitGroup"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Field
        alt="Ghost"
        component={TextQuestion}
        label="What"
        labelBold="fears"
        labelLast="does this child have, if any"
        name="btFears"
        src="img/icons-ghost.svg"
        tabOrder="13"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Bomb"
        component={TextQuestion}
        label="What makes this child"
        labelBold="angry"
        name="btAngry"
        src="img/icons-bomb.svg"
        tabOrder="14"
        type="input"
        classes="question"
        disabled={disabled}
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
