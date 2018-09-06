import React from "react";
import "../app.css";
import { reduxForm, FieldArray } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import DatabaseResultsList from "../components/LiveSearch/DatabaseResultsList/DatabaseResultsList";

function showSearchResults(event) {
  const tar = event.currentTarget,
    value = tar.value,
    codes = tar.parentNode.nextSibling.children[1];
  console.log("The user typed ", value);

  codes.classList.add("live-search-results--expand");

  //if the value is empty, that means
  if (value === "") {
    codes.classList.remove("live-search-results--expand");
    //tar.style.paddingLeft = codeWidth;
  }
}

const WizardForm48Page = props => {
  const { handleSubmit } = props;

  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Diagnostic" titleRegular="considerations" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="question">
        <div className="live-search-wrap">
          <label>DSM-5 diagnosis (ICD-10)</label>
          <div className="live-search-wrap__input-wrap">
            <input
              type="search"
              placeholder="Start typing to find diagnostic codes"
              name="dc-code-search"
              tabIndex="1"
              autoComplete="off"
              onKeyUp={showSearchResults}
            />
          </div>
          <FieldArray
            // name="dc-search-results"
            component={DatabaseResultsList}
          />
        </div>
      </div>
      <div className="question">
        <div className="live-search-wrap">
          <label>Educational classification</label>
          <input
            type="search"
            placeholder="Start typing to find educational codes"
            name="dc-edu-code-search"
            tabIndex="2"
          />
        </div>
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
})(WizardForm48Page);
