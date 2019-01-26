import React, { Component } from "react";
import { reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import FormAPI from "formapi";
import validate from "../validate";
import "../app.css";
import Button from "../components/Button";
import Appendix from "../components/Test/Appendix";

class WizardForm50Page extends Component {
  state = {
    loading: false
  };

  generatePDFTest = event => {
    event.preventDefault();
    const values = this.props.values;

    this.setState({ loading: true });

    const formapiConfig = new FormAPI.Configuration();
    formapiConfig.apiTokenId = "api_test_nK62yQ9snkS4CQqJYA";
    formapiConfig.apiTokenSecret =
      "xO7QZdhq_CqdfJHdPx8wWqwZrwrncNO2I5LNvOZe6Pg";
    const formapiClient = new FormAPI.Client(formapiConfig);
    const TEMPLATE_ID = "tpl_kbrXFcG2zFCHQTyrSQ";
    const OPTIONS = {
      data: values,
      test: true
    };

    formapiClient.generatePDF(TEMPLATE_ID, OPTIONS, function(error, response) {
      let downloadURL = response.submission.download_url;
      let status = response.submission.state;
      console.log("FormAPI response", response);
      console.log("Make download go now!", downloadURL);

      if (error) throw error;

      status !== "processed"
        ? console.log("API is processing")
        : downloadPDF(downloadURL);
    });

    const downloadPDF = url => {
      console.log("API is done");
      window.open(url);
      this.setState({ loading: false });
    };

    // const URL =
    //   "https://api.formapi.io/api/v1/templates/tpl_kbrXFcG2zFCHQTyrSQ/submissions";
    // const TOKENID = "api_test_nK62yQ9snkS4CQqJYA";
    // const TOKENSECRET = "xO7QZdhq_CqdfJHdPx8wWqwZrwrncNO2I5LNvOZe6Pg";
    // headers.set('Authorization', 'Basic ' + Buffer.from(TOKENID + ":" + TOKENSECRET).toString('base64'))
    // let headers = new Headers();
    // headers.append(
    //   "Authorization",
    //   "Basic " + window.btoa(TOKENID + ":" + TOKENSECRET)
    // );
    // fetch(URL, {
    //   method: "POST", // or 'PUT'
    //   body: JSON.stringify(OPTIONS), // data can be `string` or {object}!
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: "Basic " + window.btoa(TOKENID + ":" + TOKENSECRET)
    //   }
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(jsonResponse => {
    //     console.log(jsonResponse);
    //   })
    //   .catch(error => console.error("Error:", error));
  };

  render() {
    //const { handleSubmit } = this.props;
    console.log("Wizard50 props, ", this.props);
    console.log("Wizard50 values, ", this.props.values);
    return (
      <form className="col" onSubmit={this.generatePDFTest}>
        <Appendix values={this.props} />
        <div className="flex flex--center-vertical">
          <Button
            onClick={this.generatePDFTest}
            buttonLabel="Make test PDF"
            cssClasses="btn--width-auto"
          />
          {this.state.loading ? (
            <div className="pdf-generation-loader">
              <div className="pdf-generation-loader__box">
                <div />
                <div />
                <div />
              </div>
              <div className="pdf-generation-loader__arrow" />
            </div>
          ) : null}
        </div>
      </form>
    );
  }
}

// Grab the Redux Form's values and load it into props
WizardForm50Page = connect(state => ({
  values: getFormValues("wizard")(state)
}))(WizardForm50Page);

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm50Page);
