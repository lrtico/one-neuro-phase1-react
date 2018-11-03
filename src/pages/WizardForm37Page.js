import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import TextQuestion from "../components/TextQuestion";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm37Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Friendships" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="f-relating-problems-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "f-relating-problems",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "1"
            },
            {
              cardName: "f-relating-problems",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "2"
            }
          ]}
          label="Does this child have problems"
          labelBold="relating to or playing with"
          labelLast="children"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="f-relating-problems-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="3"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="f-fight-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "f-fight",
              cardKey: "A",
              cardLabel: "Yes ",
              tabOrder: "4"
            },
            {
              cardName: "f-fight",
              cardKey: "B",
              cardLabel: "No ",
              tabOrder: "5"
            }
          ]}
          label="Does this child"
          labelBold="fight frequently"
          labelLast="with playmates"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="f-fight-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="6"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="f-younger-friends-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "f-younger-friends",
              cardKey: "A",
              cardLabel: "Yes  ",
              tabOrder: "7"
            },
            {
              cardName: "f-younger-friends",
              cardKey: "B",
              cardLabel: "No  ",
              tabOrder: "8"
            }
          ]}
          label="Does this child prefer playing with"
          labelBold="younger"
          labelLast="children"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="f-younger-friends-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="9"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="f-making-friends-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "f-making-friends",
              cardKey: "A",
              cardLabel: "Yes   ",
              tabOrder: "10"
            },
            {
              cardName: "f-making-friends",
              cardKey: "B",
              cardLabel: "No   ",
              tabOrder: "11"
            }
          ]}
          label="Does this child have"
          labelBold="difficulty making"
          labelLast="friends"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="f-making-friends-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="12"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="f-alone-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "f-alone",
              cardKey: "A",
              cardLabel: "Yes    ",
              tabOrder: "13"
            },
            {
              cardName: "f-alone",
              cardKey: "B",
              cardLabel: "No    ",
              tabOrder: "14"
            }
          ]}
          label="Does this child"
          labelBold="prefer playing"
          labelLast="alone"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="f-alone-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="15"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="f-neighborhood-friends-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "f-neighborhood-friends",
              cardKey: "A",
              cardLabel: "Yes     ",
              tabOrder: "16"
            },
            {
              cardName: "f-neighborhood-friends",
              cardKey: "B",
              cardLabel: "No     ",
              tabOrder: "17"
            }
          ]}
          label="Are there children in the neighborhood with whom this child could"
          labelBold="play"
          labelLast="with"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="f-neighborhood-friends-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="18"
          type="input"
          classes="question grid__half"
        />
      </div>
      <Field
        alt="Question mark"
        component={TextQuestion}
        label="What role does this child take in"
        labelBold="peer group games"
        labelLast="(for example, leader, follower)"
        name="f-role-peer-group-games"
        src="img/icons-question-mark-plain.svg"
        tabOrder="19"
        type="input"
        classes="question"
      />
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: "f-smoke-cigarettes",
            cardKey: "A",
            cardLabel: "Smoke cigarettes",
            tabOrder: "20"
          },
          {
            cardName: "f-chew-tobacco",
            cardKey: "B",
            cardLabel: "Chew tobacco",
            tabOrder: "21"
          },
          {
            cardName: "f-inhale",
            cardKey: "C",
            cardLabel: "Inhale toxic substances (e.g., paint)",
            tabOrder: "22"
          },
          {
            cardName: "f-alcholol",
            cardKey: "D",
            cardLabel: "Drink beer, wine, or liquor",
            tabOrder: "23"
          },
          {
            cardName: "f-drugs",
            cardKey: "E",
            cardLabel: "Use drugs illegally (e.g., marijuana)",
            tabOrder: "24"
          }
        ]}
        label="Does this"
        labelBold="child's friends"
        labelLast="do any of the following"
        name="f-friends-activities-group"
        classes="question question--thumbless"
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
})(WizardForm37Page);
