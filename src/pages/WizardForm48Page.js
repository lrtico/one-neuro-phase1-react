import React, { Component } from "react";
import "../app.css";
import { reduxForm, FieldArray } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import DatabaseResultsList from "../components/LiveSearch/DatabaseResultsList/DatabaseResultsList";

class WizardForm48Page extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="col" onSubmit={handleSubmit}>
        <div className="flex">
          <SectionTitle titleBold="Diagnostic" titleRegular="considerations" />
          <ButtonToggle buttonToggleLabel="disable" />
        </div>
        <div className="question">
          <div className="live-search-wrap">
            <label>DSM-5 diagnosis (ICD-10)</label>
            <FieldArray name="dsm-codes" component={DatabaseResultsList} />
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
  }
}

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm48Page);
