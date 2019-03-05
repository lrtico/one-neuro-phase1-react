import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import SectionSubHeader from "../components/SectionSubHeader";
import ButtonToggle from "../components/ButtonToggle";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import TextQuestion from "../components/TextQuestion";

const WizardForm17Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Early years" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="mdh-breast-fed-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-breast-fed",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "1"
            },
            {
              cardName: "mdh-breast-fed",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "2"
            }
          ]}
          label="Was this child"
          labelBold="breast-fed"
          classes="question grid__half question--thumbless"
        />
        <Field
          component={TextQuestion}
          label="When"
          labelBold="weaned"
          name="mdh-breast-fed-weaned"
          tabOrder="3"
          type="text"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="mdh-bottle-fed-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-bottle-fed",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "4"
            },
            {
              cardName: "mdh-bottle-fed",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "5"
            }
          ]}
          label="Was this child"
          labelBold="bottle-fed"
          classes="question grid__half question--thumbless"
        />
        <Field
          component={TextQuestion}
          label="When"
          labelBold="weaned"
          name="mdh-bottle-fed-weaned"
          tabOrder="6"
          type="text"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          alt="Calendar"
          component={TextQuestion}
          label="When was this child"
          labelBold="toilet trained"
          labelLast="(daytime)"
          name="mdh-toilet-trained-day"
          src="img/icons-calendar-large.svg"
          tabOrder="7"
          type="text"
          classes="question grid__half"
        />
        <Field
          alt="Calendar"
          component={TextQuestion}
          label="When was this child"
          labelBold="toilet trained"
          labelLast="(nighttime)"
          name="mdh-toilet-trained-night"
          src="img/icons-calendar-large.svg"
          tabOrder="8"
          type="text"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="mdh-bed-wetting-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-bed-wetting",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "9"
            },
            {
              cardName: "mdh-bed-wetting",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "10"
            }
          ]}
          label="Did"
          labelBold="bed-wetting"
          labelLast="occur after toilet training"
          classes="question grid__half question--thumbless"
        />
        <Field
          component={TextQuestion}
          label="If yes, until what"
          labelBold="age"
          name="mdh-bed-wetting-stop"
          tabOrder="11"
          type="text"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="mdh-bed-soiling-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-bed-soiling",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "12"
            },
            {
              cardName: "mdh-bed-soiling",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "13"
            }
          ]}
          label="Did"
          labelBold="bed-soiling"
          labelLast="occur after toilet training"
          classes="question grid__half question--thumbless"
        />
        <Field
          component={TextQuestion}
          label="If yes, until what"
          labelBold="age"
          name="mdh-bed-soiling-stop"
          tabOrder="14"
          type="text"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="mdh-bed-wetting-medical-reasons-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-bed-wetting-medical-reasons",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "15"
            },
            {
              cardName: "mdh-bed-wetting-medical-reasons",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "16"
            }
          ]}
          label="Were there"
          labelBold="medical reasons"
          labelLast="for bed-wetting or bed-soiling"
          classes="question grid__two-thirds question--thumbless"
        />
        <Field
          component={TextQuestion}
          label="If yes, please"
          labelBold="describe"
          name="mdh-bed-wetting-medical-reasons-description"
          tabOrder="17"
          type="text"
          classes="question grid__third"
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
})(WizardForm17Page);
