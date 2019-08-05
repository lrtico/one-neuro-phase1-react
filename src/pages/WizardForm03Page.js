import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import TextQuestion from '../components/TextQuestion';
import NormalizePhoneInput from '../components/TextQuestion/NormalizePhoneInput';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import Button from '../components/Button';
import { normalizePhone } from '../utils/Normalize';

const WizardForm03Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Person" titleRegular="answering questions" />
      <div className="flex">
        <Field
          alt="Person"
          component={TextQuestion}
          label="What is the person's"
          labelBold="name"
          name="paqName"
          src="img/icons-happy-face-name.svg"
          tabOrder="1"
          type="input"
          classes="question grid__half"
        />
        <Field
          alt="Building"
          component={TextQuestion}
          label="What is the person's"
          labelBold="address"
          name="paqAddress"
          src="img/icons-house.svg"
          tabOrder="2"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'paqGuardian',
              cardKey: 'A',
              cardLabel: 'Mother',
              tabOrder: '3',
            },
            {
              cardName: 'paqGuardian',
              cardKey: 'B',
              cardLabel: 'Father',
              tabOrder: '4',
            },
            {
              cardName: 'paqGuardian',
              cardKey: 'C',
              cardLabel: 'Grandmother',
              tabOrder: '5',
            },
            {
              cardName: 'paqGuardian',
              cardKey: 'D',
              cardLabel: 'Grandfather',
              tabOrder: '5',
            },
            {
              cardName: 'paqGuardian',
              cardKey: 'E',
              cardLabel: 'Aunt',
              tabOrder: '6',
            },
            {
              cardName: 'paqGuardian',
              cardKey: 'F',
              cardLabel: 'Self',
              tabOrder: '7',
            },
            {
              cardName: 'paqGuardian',
              cardKey: 'G',
              cardLabel: 'Other',
              tabOrder: '8',
            },
          ]}
          label="What is the"
          labelBold="relationship"
          labelLast="to the client"
          name="paqRelationship"
          classes="question question--thumbless"
        />
        <Field
          component={TextQuestion}
          label="Other"
          labelBold="relationship"
          name="paqGuardianOtherGroup"
          tabOrder="7"
          type="input"
          classes="question grid__quarter"
        />
      </div>
      <div className="flex">
        <Field
          alt="Phone"
          component={NormalizePhoneInput}
          label=""
          labelBold="Home"
          labelLast="phone"
          name="paqHomePhone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="8"
          type="text"
          classes="question grid__third"
          normalize={normalizePhone}
        />
        <Field
          alt="Phone"
          component={NormalizePhoneInput}
          label=""
          labelBold="Work"
          labelLast="phone"
          name="paqWorkPhone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="9"
          type="text"
          classes="question grid__third"
          normalize={normalizePhone}
        />
        <Field
          alt="Phone"
          component={NormalizePhoneInput}
          label=""
          labelBold="Cell"
          labelLast="phone"
          name="paqCellPhone"
          maxCharacters={14}
          src="img/icons-phone.svg"
          tabOrder="10"
          type="text"
          classes="question grid__third"
          normalize={normalizePhone}
        />
      </div>
      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm03Page.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm03Page);
