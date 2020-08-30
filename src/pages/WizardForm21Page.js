import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import FormCardStacked from '../components/Card/FormCard/FormCardStacked';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

class WizardForm21Page extends Component {
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
        <div className="flex" onClick={() => handleDisable(21)}>
          <SectionSubHeader subHeader="Respiratory" />
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
        <div className="flex">
          <Field
            name="mdRespitoryGroup"
            component={FormCardStacked}
            onDelete={this.handleDelete}
            cardInfo={[
              {
                cardName: 'mdColds',
                cardLabel: 'Frequent colds?',
                cardPlaceholder: 'How often?',
                tabOrder: '1',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdChronicCough',
                cardLabel: 'Chronic cough?',
                cardPlaceholder: 'How often?',
                tabOrder: '2',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdAsthma',
                cardLabel: 'Asthma?',
                cardPlaceholder: 'How often?',
                tabOrder: '3',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdHayFever',
                cardLabel: 'Hay fever?',
                cardPlaceholder: 'How often?',
                tabOrder: '4',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdSinusCondition',
                cardLabel: 'Sinus condition?',
                cardPlaceholder: 'How often?',
                tabOrder: '5',
                normalizeCapitalizeWords: true,
              },
            ]}
            label="Please indicate if this child"
            labelBold="currently"
            labelLast="has any of the following problems. If yes, how often"
            classes="question"
            disabled={disabled}
          />
        </div>

        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

WizardForm21Page.propTypes = {
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
})(WizardForm21Page);
