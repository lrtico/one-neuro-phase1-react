import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import CheckboxCard from "../components/Card/CheckboxCard/CheckboxCard";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import TextQuestion from "../components/TextQuestion";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm37Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Friendships" />
        <div onClick={() => handleDisable(37)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>
      <div className="flex">
        <Field
          name="fFelatingProblemsYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fRelatingProblems",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "1"
            },
            {
              cardName: "fRelatingProblems",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "2"
            }
          ]}
          label="Does this child have problems"
          labelBold="relating to or playing with"
          labelLast="children"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="fRelatingProblemsDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="3"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="fFightYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fFight",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "4"
            },
            {
              cardName: "fFight",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "5"
            }
          ]}
          label="Does this child"
          labelBold="fight frequently"
          labelLast="with playmates"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="fFightDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="6"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="fYoungerFriendsYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fYoungerFriends",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "7"
            },
            {
              cardName: "fYoungerFriends",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "8"
            }
          ]}
          label="Does this child prefer playing with"
          labelBold="younger"
          labelLast="children"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="fYoungerFriendsDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="9"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="fMakingFriendsYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fMakingFriends",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "10"
            },
            {
              cardName: "fMakingFriends",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "11"
            }
          ]}
          label="Does this child have"
          labelBold="difficulty making"
          labelLast="friends"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="fMakingFriendsDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="12"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="fAloneYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fAlone",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "13"
            },
            {
              cardName: "fAlone",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "14"
            }
          ]}
          label="Does this child"
          labelBold="prefer playing"
          labelLast="alone"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="fAloneDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="15"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="fNeighborhoodFriendsYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "fNeighborhoodFriends",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "16"
            },
            {
              cardName: "fNeighborhoodFriends",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "17"
            }
          ]}
          label="Are there children with whom this child could"
          labelBold="play"
          labelLast="with"
          classes="question question--thumbless grid__two-thirds"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", please describe"
          name="fNeighborhoodFriendsDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="18"
          type="input"
          classes="question grid__one-third"
          disabled={disabled}
        />
      </div>
      <Field
        alt="Question mark"
        component={TextQuestion}
        label="What role does this child take in"
        labelBold="peer group games"
        labelLast="(for example, leader, follower)"
        name="fRolePeerGroupGames"
        src="img/icons-question-mark-plain.svg"
        tabOrder="19"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: "fSmokeCigarettes",
            cardKey: "A",
            cardLabel: "Smoke cigarettes",
            tabOrder: "20"
          },
          {
            cardName: "fChewTobacco",
            cardKey: "B",
            cardLabel: "Chew tobacco",
            tabOrder: "21"
          },
          {
            cardName: "fInhale",
            cardKey: "C",
            cardLabel: "Inhale toxic substances (e.g., paint)",
            tabOrder: "22"
          },
          {
            cardName: "fAlcholol",
            cardKey: "D",
            cardLabel: "Drink beer, wine, or liquor",
            tabOrder: "23"
          },
          {
            cardName: "fDrugs",
            cardKey: "E",
            cardLabel: "Use drugs illegally (e.g., marijuana)",
            tabOrder: "24"
          }
        ]}
        label="Does this"
        labelBold="child's friends"
        labelLast="do any of the following"
        name="fFriendsActivitiesGroup"
        classes="question question--thumbless"
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
})(WizardForm37Page);
