import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import FormCardStacked from '../components/Card/FormCard/FormCardStacked';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

class WizardForm22Page extends Component {
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
        <div className="flex" onClick={() => handleDisable(22)}>
          <SectionSubHeader subHeader="Cardiovascular" />
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
        <div className="flex">
          <Field
            name="md-cardiovascular-group"
            component={FormCardStacked}
            onDelete={this.handleDelete}
            cardInfo={[
              {
                cardName: 'mdPhysicalExertion',
                cardLabel:
                  'Shortness of breath or dizziness with physical exertion?',
                cardPlaceholder: 'How often?',
                tabOrder: '1',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdActivityLimits',
                cardLabel: 'Activity limitation due to heart condition?',
                cardPlaceholder: 'How often?',
                tabOrder: '2',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdHeartMurmur',
                cardLabel: 'Heart murmur?',
                cardPlaceholder: 'How often?',
                tabOrder: '3',
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

WizardForm22Page.propTypes = {
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
})(WizardForm22Page);
