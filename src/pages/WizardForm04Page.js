import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import { addCopyForward } from "../components/TextQuestion";

class WizardForm04Page extends Component {
  changeFieldValue = (inputName, val) => {
    console.log(
      `changeFieldValue changes this Field in the global store: "${inputName}": "${val}"`
    );
    this.props.change(inputName, val);
  };

  render() {
    console.log("WizardPage4 props = ", this.props);
    const { handleSubmit } = this.props;

    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Reasons" titleRegular="for referral" />
        <Field
          component={TextQuestion}
          name="reason-referral-1"
          tabOrder="1"
          type="input"
          classes="question"
          materialIcon="arrow_right"
          copyForward="true"
          doThisFunction={() =>
            console.log("Child called parent onChange prop")
          }
          handleCopyForward={this.changeFieldValue}
        />
        <Field
          component={TextQuestion}
          name="reason-referral-2"
          tabOrder="2"
          type="input"
          classes="question"
          materialIcon="arrow_right"
          copyForward="true"
          handleCopyForward={this.changeFieldValue}
        />
        <Field
          component={TextQuestion}
          name="reason-referral-3"
          tabOrder="3"
          type="input"
          classes="question"
          materialIcon="arrow_right"
          copyForward="true"
          handleCopyForward={this.changeFieldValue}
        />
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
})(WizardForm04Page);
