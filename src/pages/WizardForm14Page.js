import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, FieldArray } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import DescriptionCheckboxCard from '../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard';
import CheckboxCard from '../components/Card/CheckboxCard/CheckboxCard';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

const WizardForm14Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex" onClick={() => handleDisable(14)}>
        <SectionSubHeader subHeader="Pregnancy" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="flex">
        <Field
          name="mdhPlannedPregnancyGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'mdhPlannedPregnancy',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '1',
            },
            {
              cardName: 'mdhPlannedPregnancy',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '2',
            },
          ]}
          label="Was this a"
          labelBold="planned"
          labelLast="pregnancy"
          classes="question grid__half question--thumbless"
          disabled={disabled}
        />
        <Field
          name="mdhDrCareGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'mdhDrCare',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '3',
            },
            {
              cardName: 'mdhDrCare',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '4',
            },
          ]}
          label="Was the mother under a"
          labelBold="doctor's"
          labelLast="care"
          classes="question grid__half question--thumbless"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'mdhTotalPregnancies',
              cardLabel: '0',
              tabOrder: '5',
            },
            {
              cardName: 'mdhTotalPregnancies',
              cardLabel: '1',
              tabOrder: '6',
            },
            {
              cardName: 'mdhTotalPregnancies',
              cardLabel: '2',
              tabOrder: '7',
            },
            {
              cardName: 'mdhTotalPregnancies',
              cardLabel: '3',
              tabOrder: '9',
            },
            {
              cardName: 'mdhTotalPregnancies',
              cardLabel: '4',
              tabOrder: '9',
            },
            {
              cardName: 'mdhTotalPregnancies',
              cardLabel: '5',
              tabOrder: '10',
            },
            {
              cardName: 'mdhTotalPregnancies',
              cardLabel: '6',
              tabOrder: '11',
            },
          ]}
          label="The number of"
          labelBold="previous"
          labelLast="pregnancies/miscarriages"
          name="mdhTotalPregnanciesGroup"
          classes="question question--thumbless question--numbers"
          disabled={disabled}
        />
      </div>
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardKey: 'A',
            cardName: 'mdhPregnancyDifficultConception',
            cardLabel: 'Difficulty in conception',
            tabOrder: '12',
          },
          {
            cardKey: 'B',
            cardName: 'mdhPregnancyToxemia',
            cardLabel: 'Toxemia',
            tabOrder: '13',
          },
          {
            cardKey: 'C',
            cardName: 'mdhPregnancyWeightGain',
            cardLabel: 'Abnormal weight gain',
            tabOrder: '14',
          },
          {
            cardKey: 'D',
            cardName: 'mdhPregnancyVomiting',
            cardLabel: 'Excessive vomiting',
            tabOrder: '15',
          },
          {
            cardName: 'mdhPregnancyGermanMeasels',
            cardKey: 'E',
            cardLabel: 'German measels',
            tabOrder: '16',
          },
          {
            cardKey: 'F',
            cardName: 'mdhPregnancySwelling',
            cardLabel: 'Excessive swelling',
            tabOrder: '17',
          },
          {
            cardKey: 'G',
            cardName: 'mdhPregnancyEmotional',
            cardLabel: 'Emotional problems',
            tabOrder: '18',
          },
          {
            cardKey: 'H',
            cardName: 'mdhPregnancyVaginalBleeding',
            cardLabel: 'Vaginal bleeding',
            tabOrder: '19',
          },
          {
            cardKey: 'I',
            cardName: 'mdhPregnancyFlu',
            cardLabel: 'Flu',
            tabOrder: '20',
          },
          {
            cardKey: 'J',
            cardName: 'mdhPregnancyAnemia',
            cardLabel: 'Anemia',
            tabOrder: '21',
          },
          {
            cardKey: 'K',
            cardName: 'mdhPregnancyBloodPressure',
            cardLabel: 'High blood pressure',
            tabOrder: '22',
          },
          {
            cardKey: 'L',
            cardName: 'mdhPregnancyInjury',
            cardLabel: 'Maternal injury',
            tabOrder: '23',
            cardDescription: 'mdhMaternalInjuryDescription',
          },
        ]}
        label="Check any of the following"
        labelBold="complications"
        labelLast="that occured during pregnancy"
        name="mdhComplicationsPregnancyGroup"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: 'B',
            cardLabel: 'Other',
            tabOrder: '24',
            cardNameCheckbox: 'mdhOtherComplication',
            cardNameDescription: 'mdhOtherComplicationDescription',
            liClasses: 'desc-checkbox',
          },
        ]}
        label="Any other"
        labelBold="complications"
        labelLast="during pregnancy"
        name="mdhComplicationsPregnancyGroup"
        classes="question question--thumbless question__choice--full-width"
        type="text"
        disabled={disabled}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm14Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm14Page);
