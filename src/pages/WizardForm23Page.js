import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import FormCardStacked from '../components/Card/FormCard/FormCardStacked';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

class WizardForm23Page extends Component {
  handleDelete = input1Name => {
    const { change } = this.props;
    // console.log('WizardForm16Page handleDelete fired', input1Name, input2Name);
    console.log('WizardForm16Page handleDelete ref = ', input1Name);

    change(input1Name, '');
  };

  render() {
    const { handleSubmit, handleDisable, disabled } = this.props;

    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Medical" titleRegular="development" />
        <div className="flex" onClick={() => handleDisable(23)}>
          <SectionSubHeader subHeader="Gastrointestinal" />
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
        <div className="flex">
          <Field
            name="mdGastrointestinalGroup"
            component={FormCardStacked}
            onDelete={this.handleDelete}
            cardInfo={[
              {
                cardName: 'mdVomiting',
                cardLabel: 'Excessive vomitting?',
                cardPlaceholder: 'How often?',
                tabOrder: '1',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdDiarrhea',
                cardLabel: 'Frequent diarrhea?',
                cardPlaceholder: 'How often?',
                tabOrder: '2',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdConstipation',
                cardLabel: 'Constipation?',
                cardPlaceholder: 'How often?',
                tabOrder: '3',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdStomachPain',
                cardLabel: 'Stomach pain?',
                cardPlaceholder: 'How often?',
                tabOrder: '4',
                normalizeCapitalizeWords: true,
              },
            ]}
            label="Does this child"
            labelBold="currently"
            labelLast="have any of the following problems"
            classes="question"
            disabled={disabled}
          />
        </div>

        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

WizardForm23Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
  change: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm23Page);
