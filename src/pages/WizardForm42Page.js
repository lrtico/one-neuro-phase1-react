import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';
import RadioCard from '../components/Card/RadioCard/RadioCard';

const WizardForm42Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Religious &amp; racial ethnic"
        titleRegular="identification"
      />
      <div className="flex" onClick={() => handleDisable(42)}>
        <SectionSubHeader subHeader="Current religious denomination/affiliation" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <Field
        name="rdaReligonAffiliationGroup"
        component={RadioCard}
        cardInfo={[
          {
            cardName: 'rdaReligonAffiliation',
            cardKey: 'A',
            cardLabel: 'Protestant',
            tabOrder: '1',
          },
          {
            cardName: 'rdaReligonAffiliation',
            cardKey: 'B',
            cardLabel: 'Catholic',
            tabOrder: '2',
          },
          {
            cardName: 'rdaReligonAffiliation',
            cardKey: 'C',
            cardLabel: 'Jewish',
            tabOrder: '3',
          },
          {
            cardName: 'rdaReligonAffiliation',
            cardKey: 'D',
            cardLabel: 'Islamic',
            tabOrder: '4',
          },
          {
            cardName: 'rdaReligonAffiliation',
            cardKey: 'E',
            cardLabel: 'Buddhist',
            tabOrder: '5',
          },
          {
            cardName: 'rdaReligonAffiliation',
            cardKey: 'F',
            cardLabel: 'Hindu',
            tabOrder: '6',
          },
          {
            cardName: 'rdaReligonAffiliation',
            cardKey: 'G',
            cardLabel: 'Other',
            tabOrder: '7',
          },
        ]}
        classes="question question--thumbless"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'rdaReligonInvolvement',
              cardLabel: '1',
              tabOrder: '8',
            },
            {
              cardName: 'rdaReligonInvolvement',
              cardLabel: '2',
              tabOrder: '9',
            },
            {
              cardName: 'rdaReligonInvolvement',
              cardLabel: '3',
              tabOrder: '10',
            },
            {
              cardName: 'rdaReligonInvolvement',
              cardLabel: '4',
              tabOrder: '11',
            },
            {
              cardName: 'rdaReligonInvolvement',
              cardLabel: '5',
              tabOrder: '12',
            },
          ]}
          label="How"
          labelBold="involved are you,"
          labelLast="with 1 being not very and 5 being very involved"
          name="rdaReligonInvolvmentGroup"
          classes="question question--thumbless question--numbers"
          disabled={disabled}
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm42Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm42Page);
