import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import DescriptionCheckboxCard from "./components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import TextQuestion from "./components/TextQuestion";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormThirtiethPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Hearing" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardName: "mdh-hearing-ear-infection",
            cardLabel: "Ear infections",
            liClasses: "question__choice--full-width",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardName: "mdh-hearing-problems",
            cardLabel: "Hearing problems",
            liClasses: "question__choice--full-width",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardName: "mdh-hearing-tubes",
            cardLabel: "Ear tubes",
            liClasses: "question__choice--full-width",
            tabOrder: "3"
          }
        ]}
        label="During this child"
        labelBold="currently"
        labelLast="have any of the following"
        name="mdh-hearing-group"
        classes="question question--thumbless"
      />
      <Field
        alt="Calendar"
        src="img/icons-calendar-large.svg"
        component={TextQuestion}
        label="Date of most"
        labelBold="recent"
        labelLast="hearing exam"
        name="mdh-hearing-exam-date"
        tabOrder="4"
        type="date"
        classes="question grid__half"
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
})(WizardFormThirtiethPage);
