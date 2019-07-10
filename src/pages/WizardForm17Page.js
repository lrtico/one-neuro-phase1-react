import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import SectionSubHeader from "../components/SectionSubHeader";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import TextQuestion from "../components/TextQuestion";

const WizardForm17Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex" onClick={() => handleDisable(17)}>
        <SectionSubHeader subHeader="Early years" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="flex">
        <Field
          name="mdh-breast-fed-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdhBreastFed",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "1"
            },
            {
              cardName: "mdhBreastFed",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "2"
            }
          ]}
          label="Was this child"
          labelBold="breastFed"
          classes="question grid__half question--thumbless"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="When"
          labelBold="weaned"
          name="mdhBreastFedWeaned"
          tabOrder="3"
          type="text"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="mdhBottleFedGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdhBottleFed",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "4"
            },
            {
              cardName: "mdhBottleFed",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "5"
            }
          ]}
          label="Was this child"
          labelBold="bottleFed"
          classes="question grid__half question--thumbless"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="When"
          labelBold="weaned"
          name="mdhBottleFedWeaned"
          tabOrder="6"
          type="text"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          alt="Calendar"
          component={TextQuestion}
          label="When was this child"
          labelBold="toilet trained"
          labelLast="(daytime)"
          name="mdhToiletTrainedDay"
          src="img/icons-calendar-large.svg"
          tabOrder="7"
          type="text"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          alt="Calendar"
          component={TextQuestion}
          label="When was this child"
          labelBold="toilet trained"
          labelLast="(nighttime)"
          name="mdhToiletTrainedNight"
          src="img/icons-calendar-large.svg"
          tabOrder="8"
          type="text"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="mdhBedWettingGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdhBedWetting",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "9"
            },
            {
              cardName: "mdhBedWetting",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "10"
            }
          ]}
          label="Did"
          labelBold="bed-wetting"
          labelLast="occur after toilet training"
          classes="question grid__half question--thumbless"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="If yes, until what"
          labelBold="age"
          name="mdhBedWettingStop"
          tabOrder="11"
          type="text"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="mdhBedSoilingGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdhBedSoiling",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "12"
            },
            {
              cardName: "mdhBedSoiling",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "13"
            }
          ]}
          label="Did"
          labelBold="bed-soiling"
          labelLast="occur after toilet training"
          classes="question grid__half question--thumbless"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="If yes, until what"
          labelBold="age"
          name="mdhBedSoilingStop"
          tabOrder="14"
          type="text"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="mdhBedWettingMedicalReasonsGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdhBedWettingMedicalReasons",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "15"
            },
            {
              cardName: "mdhBedWettingMedicalReasons",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "16"
            }
          ]}
          label="Were there"
          labelBold="medical reasons"
          labelLast="for bed-wetting or bed-soiling"
          classes="question grid__two-thirds question--thumbless"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="If yes, please"
          labelBold="describe"
          name="mdhBedWettingMedicalReasonsDescription"
          tabOrder="17"
          type="text"
          classes="question grid__third"
          disabled={disabled}
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
