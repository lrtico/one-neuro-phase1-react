import React, { Component } from "react";
import "../app.css";
import { reduxForm, FieldArray } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import DatabaseResultsList from "../components/LiveSearch/DatabaseResultsList/DatabaseResultsList";
import CheckboxEducationalCodeCard from "../components/Card/CheckboxCard/CheckboxEducationalCodeCard";

class WizardForm48Page extends Component {
  state = {
    educationalCodes: [],
    educationalCodesLoading: true
  };

  componentDidMount() {
    //Load the educational classifications into state
    const URL = "http://oneneuro.azurewebsites.net/api/edu/all";
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ educationalCodes: data });
        console.log("Educational classifications from AIP, ", data);
      })
      .catch(error =>
        console.log("Educational classifciation API error, ", error)
      );
  }

  render() {
    const { handleSubmit } = this.props;
    const { educationalCodes } = this.state;
    return (
      <form className="col" onSubmit={handleSubmit}>
        <div className="flex">
          <SectionTitle titleBold="Diagnostic" titleRegular="considerations" />
          <ButtonToggle buttonToggleLabel="disable" />
        </div>
        <div className="question">
          <div className="live-search-wrap">
            <label>DSM-5 diagnosis (ICD-10)</label>
            <FieldArray name="dsmCodes" component={DatabaseResultsList} />
          </div>
        </div>
        <div className="question">
          <div>
            <FieldArray
              component={CheckboxEducationalCodeCard}
              checkboxInfo={educationalCodes.map((e, i) => ({
                cardName: `edu-code-${e.DisabilityCode.replace(
                  / /g,
                  "-"
                ).toLowerCase()}`,
                cardKey: e.id,
                cardLabel: e.DisabilityCode,
                tabIndex: e.id + 1
              }))}
              label=""
              labelBold="Educational"
              labelLast="classification"
              name="educational-classification-group"
              classes="question question--thumbless"
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
