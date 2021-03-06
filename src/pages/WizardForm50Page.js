import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { saveAs } from 'file-saver';
// import FormAPI from "formapi";
import validate from '../validate';
import '../app.css';
import Button from '../components/Button';
import Appendix from '../components/Test/Appendix';

class WizardForm50Page extends Component {
  state = {
    loading: false,
  };

  generatePDFTest = (event) => {
    event.preventDefault();
    const { values, tests, recommendations, appendices } = this.props;
    const data = {
      values,
      appendixReducer: appendices.Tests,
      testSelectedReducer: tests,
      recommendations,
    };
    console.log('generatePDFTest values, ', data);

    this.setState({ loading: true });

    // use axios' post method to the create-pdf route passing the data from state
    // blobs are immutable objects the represent raw data, like our PDF
    // For prod use https://onpdfgenerator.azurewebsites.net/
    axios
      .post('http://localhost:5000/create-pdf', data)
      .then(() =>
        axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }),
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'newPDF.pdf');
        this.setState({ loading: false });
      });

    // const formapiConfig = new FormAPI.Configuration();
    // formapiConfig.apiTokenId = "api_test_nK62yQ9snkS4CQqJYA";
    // formapiConfig.apiTokenSecret =
    //   "xO7QZdhq_CqdfJHdPx8wWqwZrwrncNO2I5LNvOZe6Pg";
    // const formapiClient = new FormAPI.Client(formapiConfig);
    // const TEMPLATE_ID = "tpl_kbrXFcG2zFCHQTyrSQ";
    // const OPTIONS = {
    //   data: values,
    //   test: true
    // };

    // formapiClient.generatePDF(TEMPLATE_ID, OPTIONS, function(error, response) {
    //   let downloadURL = response.submission.download_url;
    //   let status = response.submission.state;
    //   console.log("FormAPI response", response);
    //   console.log("Make download go now!", downloadURL);

    //   if (error) throw error;

    //   status !== "processed"
    //     ? console.log("API is processing")
    //     : downloadPDF(downloadURL);
    // });

    // const downloadPDF = url => {
    //   console.log("API is done");
    //   window.open(url);
    //   this.setState({ loading: false });
    // };
  };

  render() {
    // const { handleSubmit } = this.props;
    const { values } = this.props;
    const { loading } = this.state;
    console.log('Wizard50 props, ', this.props);
    console.log('Wizard50 values, ', values);
    return (
      <form className="col" onSubmit={this.generatePDFTest}>
        <Appendix values={this.props} />
        <div className="flex flex--center-vertical">
          <Button
            onClick={this.generatePDFTest}
            buttonLabel="Make a PDF"
            cssClasses="btn--width-auto"
          />
          {loading ? (
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

WizardForm50Page.propTypes = {
  values: PropTypes.object,
  tests: PropTypes.array,
  Tests: PropTypes.array,
  recommendations: PropTypes.array,
  appendices: PropTypes.object,
};

// Grab the Redux Form's values and load it into props
WizardForm50Page = connect((state) => ({
  values: getFormValues('wizard')(state),
  tests: state.testsSelectedReducer,
  appendices: state.appendixReducer,
}))(WizardForm50Page);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm50Page);
