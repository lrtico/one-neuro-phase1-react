import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm12Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex" onClick={() => handleDisable(12)}>
        <SectionTitle titleFirst="Child's" titleBold="residence" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "crResidence",
              cardKey: "A",
              cardLabel: "Apartment",
              tabOrder: "1"
            },
            {
              cardName: "crResidence",
              cardKey: "B",
              cardLabel: "Single-family home",
              tabOrder: "2"
            },
            {
              cardName: "crResidence",
              cardKey: "C",
              cardLabel: "Townhome",
              tabOrder: "3"
            },
            {
              cardName: "crResidence",
              cardKey: "D",
              cardLabel: "Other",
              tabOrder: "4"
            }
          ]}
          label="Where does this child"
          labelBold="live"
          name="crResidenceGroup"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "crResidenceLength",
              cardLabel: "Less than 1",
              tabOrder: "5"
            },
            {
              cardName: "crResidenceLength",
              cardLabel: "1",
              tabOrder: "6"
            },
            {
              cardName: "crResidenceLength",
              cardLabel: "2",
              tabOrder: "7"
            },
            {
              cardName: "crResidenceLength",
              cardLabel: "3",
              tabOrder: "8"
            },
            {
              cardName: "crResidenceLength",
              cardLabel: "4",
              tabOrder: "9"
            },
            {
              cardName: "crResidenceLength",
              cardLabel: "5",
              tabOrder: "10"
            },
            {
              cardName: "crResidenceLength",
              cardLabel: "6",
              tabOrder: "11"
            },
            {
              cardName: "crResidenceLength",
              cardLabel: "7+",
              tabOrder: "12"
            }
          ]}
          label="How many"
          labelBold="years living"
          labelLast="at the current address"
          name="crResidenceLengthGroup"
          classes="question question--thumbless question--numbers"
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
})(WizardForm12Page);
