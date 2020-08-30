import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from '../validate';
import TextQuestion from '../components/TextQuestion';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import CheckboxCard from '../components/Card/CheckboxCard/CheckboxCard';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

const WizardForm10Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex" onClick={() => handleDisable(10)}>
        <SectionTitle titleBold="Family" titleRegular="history" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="flex">
        <Field
          name="fhParentalCloseness"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'fhCloseness',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '1',
            },
            {
              cardName: 'fhCloseness',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '2',
            },
          ]}
          label="Is this child"
          labelBold="closer"
          labelLast="to one parent than the other"
          classes="question question--thumbless grid__three-quarters"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="If"
          labelBold="yes"
          labelLast=", which one"
          name="fhParentalClosenessChoice"
          tabOrder="3"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <Field
        name="fhLifeExperiences"
        component={RadioCard}
        cardInfo={[
          {
            cardName: 'fhExperienced',
            cardKey: 'A',
            cardLabel: 'Yes',
            tabOrder: '4',
          },
          {
            cardName: 'fhExperienced',
            cardKey: 'B',
            cardLabel: 'No',
            tabOrder: '5',
          },
        ]}
        label="Has this child ever experienced any"
        labelBold="parental separations, divorces, or death"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          component={TextQuestion}
          label="If yes,"
          labelBold="when"
          name="fhLifeExperiencesDate"
          tabOrder="6"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="Child's"
          labelBold="age"
          labelLast="at the time"
          name="fhLifeExperiencesAge"
          tabOrder="7"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <Field
        component={TextQuestion}
        label="Please describe the"
        labelBold="circumstances"
        name="fhLifeExperiencesDetails"
        tabOrder="8"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <div className="flex">
        <SectionSubHeader subHeader="If the parents are separated or divorced" />
      </div>
      <FieldArray
        component={CheckboxCard}
        checkboxInfo={[
          {
            cardName: 'fhCustodyMother',
            cardKey: 'A',
            cardLabel: 'Mother',
            tabOrder: '9',
          },
          {
            cardName: 'fhCustodyFather',
            cardKey: 'B',
            cardLabel: 'Father',
            tabOrder: '10',
          },
          {
            cardName: 'fhCustodyBoth',
            cardKey: 'C',
            cardLabel: 'Both',
            tabOrder: '11',
          },
        ]}
        name="fhCustodyGroup"
        label="Who has"
        labelBold="custody"
        labelLast="of this child"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Field
        name="fhVisitationGroup"
        component={RadioCard}
        cardInfo={[
          {
            cardName: 'fhVisitation',
            cardKey: 'A',
            cardLabel: 'Weekly or more often',
            tabOrder: '12',
          },
          {
            cardName: 'fhVisitation',
            cardKey: 'B',
            cardLabel: 'Once or twice per month',
            tabOrder: '13',
          },
          {
            cardName: 'fhVisitation',
            cardKey: 'C',
            cardLabel: '50/50',
            tabOrder: '14',
          },
          {
            cardName: 'fhVisitation',
            cardKey: 'D',
            cardLabel: 'Few times per year',
            tabOrder: '15',
          },
          {
            cardName: 'fhVisitation',
            cardKey: 'E',
            cardLabel: 'Never',
            tabOrder: '16',
          },
        ]}
        label="How often does one parent"
        labelBold="see"
        labelLast="this child (Check one)"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm10Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm10Page);
