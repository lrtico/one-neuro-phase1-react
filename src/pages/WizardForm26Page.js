import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import FormCardStacked from '../components/Card/FormCard/FormCardStacked';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

class WizardForm26Page extends Component {
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
        <div className="flex" onClick={() => handleDisable(26)}>
          <SectionSubHeader subHeader="Skin" />
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
        <div className="flex">
          <Field
            name="mdSkinGroup"
            component={FormCardStacked}
            onDelete={this.handleDelete}
            cardInfo={[
              {
                cardName: 'mdFrequentRashes',
                cardLabel: 'Frequent rashes?',
                cardPlaceholder: 'When/where?',
                tabOrder: '1',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdBruises',
                cardLabel: 'Bruises easily?',
                cardPlaceholder: 'How often?',
                tabOrder: '2',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdSores',
                cardLabel: 'Sores?',
                cardPlaceholder: 'How often?',
                tabOrder: '3',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdAcne',
                cardLabel: 'Severe acne?',
                cardPlaceholder: 'How often?',
                tabOrder: '4',
                normalizeCapitalizeWords: true,
              },
              {
                cardName: 'mdItchy',
                cardLabel: 'Itchy skin?',
                cardPlaceholder: 'How often?',
                tabOrder: '5',
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

WizardForm26Page.propTypes = {
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
})(WizardForm26Page);
