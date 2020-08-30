import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';
import { reduxForm, FieldArray } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ButtonToggle from '../components/ButtonToggle';
import DatabaseResultsList from '../components/LiveSearch/DatabaseResultsList/DatabaseResultsList';
import CheckboxEducationalCodeCard from '../components/Card/CheckboxCard/CheckboxEducationalCodeCard';

class WizardForm48Page extends Component {
  state = {
    educationalCodes: [],
    // educationalCodesLoading: true,
  };

  componentDidMount() {
    // Load the educational classifications into state
    const URL = 'https://onpdfgenerator.azurewebsites.net/api/edu/all';
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ educationalCodes: data });
        console.log('Educational classifications from AIP, ', data);
      })
      .catch((error) =>
        console.log('Educational classifciation API error, ', error),
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
              checkboxInfo={educationalCodes.map((e) => ({
                cardName: `eduCode${e.DisabilityCode.toLowerCase()
                  .replace('/', '')
                  .replace(' – ', ' ')
                  .replace('{', '')
                  .replace('}', '')
                  .replace('-', ' ')
                  .replace(':', '')
                  .replace(/\(|\)/g, ' ')
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join('')}`,
                cardKey: e.id,
                cardLabel: e.DisabilityCode,
                tabIndex: e.id + 1,
              }))}
              label=""
              labelBold="Educational"
              labelLast="classification"
              name="educationalClassificationGroup"
              classes="question question--thumbless"
            />
          </div>
        </div>
        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

WizardForm48Page.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm48Page);
