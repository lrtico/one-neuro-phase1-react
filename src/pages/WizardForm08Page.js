import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from '../validate';
import TextQuestion from '../components/TextQuestion';
import SectionTitle from '../components/SectionTitle';
import SectionSubTitle from '../components/SectionSubTitle';
import Button from '../components/Button';
import CopyForwardButton from '../components/ButtonToggle/CopyForwardButton';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import SectionSubHeader from '../components/SectionSubHeader';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';
import NormalizePhoneInput from '../components/TextQuestion/NormalizePhoneInput';
import { normalizePhone } from '../utils/Normalize';

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

class WizardForm08Page extends Component {
  addCopyForward = () => {
    let {
      motherName,
      motherAge,
      stepmother,
      motherAddress,
      motherHomePhone,
      motherCellPhone,
      motherWorkPhone,
      motherEmployer,
      motherOccupation,
      motherWorkLength,
      motherPrimaryLang,
      motherSecondaryLang,
      fatherName,
      fatherAge,
      stepfather,
      fatherAddress,
      fatherHomePhone,
      fatherCellPhone,
      fatherWorkPhone,
      fatherEmployer,
      fatherOccupation,
      fatherWorkLength,
      fatherPrimaryLang,
      fatherSecondaryLang,
      primaryCaregiverName,
      primaryCaregiverAge,
      primaryCaregiverRelationship,
      primaryCaregiverAddress,
      primaryCaregiverHomePhone,
      primaryCaregiverCellPhone,
      primaryCaregiverWorkPhone,
    } = this.props;
    motherName = motherName === undefined ? "(Mother's name)" : motherName;
    motherAge = motherAge === undefined ? "(mother's age)" : motherAge;
    stepmother = stepmother === 'Yes' ? 'stepmother' : 'mother';
    motherAddress =
      motherAddress === undefined ? "(mother's address)" : motherAddress;
    motherHomePhone =
      motherHomePhone === undefined ? "(mother's home phone)" : motherHomePhone;
    motherCellPhone =
      motherCellPhone === undefined ? "(mother's cell phone)" : motherCellPhone;
    motherWorkPhone =
      motherWorkPhone === undefined ? "(mother's work phone)" : motherWorkPhone;
    motherEmployer =
      motherEmployer === undefined ? "(mother's employer)" : motherEmployer;
    motherOccupation =
      motherOccupation === undefined
        ? "(mother's occupation)"
        : motherOccupation;
    motherWorkLength =
      motherWorkLength === undefined
        ? "(mother's work length)"
        : motherWorkLength;
    motherPrimaryLang =
      motherPrimaryLang === undefined
        ? "(mother's primary language)"
        : motherPrimaryLang;
    motherSecondaryLang =
      motherSecondaryLang === undefined
        ? "(mother's secondary language)"
        : motherSecondaryLang;
    fatherName = fatherName === undefined ? "(Father's name)" : fatherName;
    fatherAge = fatherAge === undefined ? "(father's age)" : fatherAge;
    stepfather = stepfather === 'Yes' ? 'stepfather' : 'father';
    fatherAddress =
      fatherAddress === undefined ? "(father's address)" : fatherAddress;
    fatherHomePhone =
      fatherHomePhone === undefined ? "(father's home phone)" : fatherHomePhone;
    fatherCellPhone =
      fatherCellPhone === undefined ? "(father's cell phone)" : fatherCellPhone;
    fatherWorkPhone =
      fatherWorkPhone === undefined ? "(father's work phone)" : fatherWorkPhone;
    fatherEmployer =
      fatherEmployer === undefined ? "(father's employer)" : fatherEmployer;
    fatherOccupation =
      fatherOccupation === undefined
        ? "(father's occupation)"
        : fatherOccupation;
    fatherWorkLength =
      fatherWorkLength === undefined
        ? "(father's work length)"
        : fatherWorkLength;
    fatherPrimaryLang =
      fatherPrimaryLang === undefined
        ? "(father's primary language)"
        : fatherPrimaryLang;
    fatherSecondaryLang =
      fatherSecondaryLang === undefined
        ? "(father's secondary language)"
        : fatherSecondaryLang;
    primaryCaregiverName =
      primaryCaregiverName === undefined
        ? "(Primary caregiver's name)"
        : primaryCaregiverName;
    primaryCaregiverAge =
      primaryCaregiverAge === undefined
        ? "(Primary caregiver's age)"
        : primaryCaregiverAge;
    primaryCaregiverRelationship =
      primaryCaregiverRelationship === undefined
        ? '(Primary caregiver relationship)'
        : primaryCaregiverRelationship;
    primaryCaregiverAddress =
      primaryCaregiverAddress === undefined
        ? "(Primary caregiver's address)"
        : primaryCaregiverAddress;
    primaryCaregiverHomePhone =
      primaryCaregiverHomePhone === undefined
        ? "(Primary caregiver's home phone)"
        : primaryCaregiverHomePhone;
    primaryCaregiverCellPhone =
      primaryCaregiverCellPhone === undefined
        ? "(Primary caregiver's cell phone)"
        : primaryCaregiverCellPhone;
    primaryCaregiverWorkPhone =
      primaryCaregiverWorkPhone === undefined
        ? "(Primary caregiver's work phone)"
        : primaryCaregiverWorkPhone;

    const bgHistoryCopyForward = `${motherName}, ${motherAge}, the ${stepmother}, lives at ${motherAddress}. Her home phone number is ${motherHomePhone}, her cell phone is ${motherCellPhone}, and her work phone is ${motherWorkPhone}.\n\n${motherName} has worked ${motherWorkLength} years for ${motherEmployer} as a ${motherOccupation}.\n\nHer primary language is ${motherPrimaryLang}. Her secondary language is ${motherSecondaryLang}.\n\n${fatherName}, ${fatherAge}, the ${stepfather}, lives at ${fatherAddress}. His home phone number is ${fatherHomePhone}, his cell phone is ${fatherCellPhone}, and his work phone is ${fatherWorkPhone}.\n\n${fatherName} has worked ${fatherWorkLength} years for ${fatherEmployer} as a ${fatherOccupation}.\n\nHis primary language is ${fatherPrimaryLang}. His secondary language is ${fatherSecondaryLang}.\n\n${primaryCaregiverName}, ${primaryCaregiverAge}, the ${primaryCaregiverRelationship}, lives at ${primaryCaregiverAddress}. His home phone number is ${primaryCaregiverHomePhone}, his cell phone is ${primaryCaregiverCellPhone}, and his work phone is ${primaryCaregiverWorkPhone}.`;

    this.props.change('relevantBackgroundHistory', bgHistoryCopyForward);
  };

  render() {
    const { handleSubmit, handleDisable, disabled } = this.props;
    const { addCopyForward } = this;
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Background" titleRegular="history" />
        <SectionSubTitle
          subTitleFirst="Primary caregiver"
          subTitleBold="if not"
          subTitleRegular="Mother or Father"
        />
        <div className="flex">
          <SectionSubHeader subHeader="Other" />
          <div onClick={(event) => addCopyForward(event)}>
            <CopyForwardButton buttonToggleLabel="copy forward" />
          </div>
          <div className="flex" onClick={() => handleDisable(8)}>
            <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
          </div>
        </div>

        <div className="flex">
          <Field
            alt="Person"
            component={TextQuestion}
            label="Name of"
            labelBold="primary caregiver"
            name="bhPrimaryCaregiverName"
            src="img/icons-happy-face-name.svg"
            tabOrder="1"
            type="text"
            classes="question grid__three-quarters"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="What is their"
            labelBold="age"
            name="bhOtherParentStepparentAge"
            tabOrder="4"
            type="text"
            classes="question grid__quarter"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            component={RadioCard}
            cardInfo={[
              {
                cardName: 'bhOtherParentStepparentGuardian',
                cardKey: 'A',
                cardLabel: 'Foster Parent',
                tabOrder: '5',
              },
              {
                cardName: 'bhOtherParentStepparentGuardian',
                cardKey: 'B',
                cardLabel: 'Case Manager',
                tabOrder: '6',
              },
              {
                cardName: 'bhOtherParentStepparentGuardian',
                cardKey: 'C',
                cardLabel: 'Social Worker',
                tabOrder: '7',
              },
              {
                cardName: 'bhOtherParentStepparentGuardian',
                cardKey: 'D',
                cardLabel: 'Sibling',
                tabOrder: '8',
              },
              {
                cardName: 'bhOtherParentStepparentGuardian',
                cardKey: 'E',
                cardLabel: 'Other',
                tabOrder: '9',
              },
              {
                cardName: 'bhOtherParentStepparentGuardian',
                cardKey: 'F',
                cardLabel: 'State',
                tabOrder: '10',
              },
            ]}
            label="What is the"
            labelBold="relationship"
            labelLast="to the child"
            name="bhOtherParentStepparentRelationship"
            classes="question question--thumbless"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="Other"
            labelBold="relationship"
            name="bhOtherParentStepparentGuardianOther"
            tabOrder="11"
            type="input"
            classes="question grid__quarter"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="Phone"
            component={NormalizePhoneInput}
            label=""
            labelBold="Home"
            labelLast="phone"
            name="bhOtherParentStepparentHomePhone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="12"
            type="text"
            classes="question grid__third"
            normalize={normalizePhone}
            disabled={disabled}
          />
          <Field
            alt="Phone"
            component={NormalizePhoneInput}
            label=""
            labelBold="Work"
            labelLast="phone"
            name="bhOtherParentStepparentWorkPhone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="13"
            type="text"
            classes="question grid__third"
            normalize={normalizePhone}
            disabled={disabled}
          />
          <Field
            alt="Phone"
            component={NormalizePhoneInput}
            label=""
            labelBold="Cell"
            labelLast="phone"
            name="bhOtherParentStepparentCellPhone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="14"
            type="text"
            classes="question grid__third"
            normalize={normalizePhone}
            disabled={disabled}
          />
        </div>
        <Field
          alt="House"
          component={TextQuestion}
          label="What is their"
          labelBold="address"
          name="bhOtherParentStepparentAddress"
          src="img/icons-house.svg"
          tabOrder="15"
          type="input"
          classes="question"
          disabled={disabled}
        />

        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

// Decorate with connect to read form values
const selector = formValueSelector('wizard'); // <-- same as form name
WizardForm08Page = connect((state) => {
  // can select values individually
  const motherName = selector(state, 'bhMotherName');
  const motherAge = selector(state, 'bhMotherAge');
  const stepmother = selector(state, 'bhStepmother');
  const motherAddress = selector(state, 'bhMotherAddress');
  const motherHomePhone = selector(state, 'bhMotherHomePhone');
  const motherCellPhone = selector(state, 'bhMotherWorkPhone');
  const motherWorkPhone = selector(state, 'bhMotherCellPhone');
  const motherWorkLength = selector(state, 'bhMotherLengthEmployement');
  const motherEmployer = selector(state, 'bhMotherEmployer');
  const motherOccupation = selector(state, 'bhMotherOccupation');
  const motherPrimaryLang = selector(state, 'bh-MtherPrimaryLanguage');
  const motherSecondaryLang = selector(state, 'bhMotherSecondaryLanguage');
  const fatherName = selector(state, 'bhFatherName');
  const fatherAge = selector(state, 'bhFatherAge');
  const stepfather = selector(state, 'bhStepfather');
  const fatherAddress = selector(state, 'bhFatherAddress');
  const fatherHomePhone = selector(state, 'bhFatherHomePhone');
  const fatherCellPhone = selector(state, 'bhFatherWorkPhone');
  const fatherWorkPhone = selector(state, 'bhFatherCellPhone');
  const fatherWorkLength = selector(state, 'bhFatherLengthEmployement');
  const fatherEmployer = selector(state, 'bhFatherEmployer');
  const fatherOccupation = selector(state, 'bhFatherOccupation');
  const fatherPrimaryLang = selector(state, 'bhFatherPrimaryLanguage');
  const fatherSecondaryLang = selector(state, 'bhFatherSecondaryLanguage');
  const primaryCaregiverName = selector(state, 'bhPrimaryCaregiverName');
  const primaryCaregiverAge = selector(state, 'bhOtherParentStepparentAge');
  const primaryCaregiverRelationship = selector(
    state,
    'bhOtherParentStepparentGuardian',
  );
  const primaryCaregiverAddress = selector(
    state,
    'bhOtherParentStepparentAddress',
  );
  const primaryCaregiverHomePhone = selector(
    state,
    'bhOtherParentStepparentHomePhone',
  );
  const primaryCaregiverCellPhone = selector(
    state,
    'bhOtherParentStepparentCellPhone',
  );
  const primaryCaregiverWorkPhone = selector(
    state,
    'bhOtherParentStepparentWorkPhone',
  );
  return {
    motherName,
    motherAge,
    stepmother,
    motherAddress,
    motherHomePhone,
    motherCellPhone,
    motherWorkPhone,
    motherWorkLength,
    motherEmployer,
    motherOccupation,
    motherPrimaryLang,
    motherSecondaryLang,
    fatherName,
    fatherAge,
    stepfather,
    fatherAddress,
    fatherHomePhone,
    fatherCellPhone,
    fatherWorkPhone,
    fatherWorkLength,
    fatherEmployer,
    fatherOccupation,
    fatherPrimaryLang,
    fatherSecondaryLang,
    primaryCaregiverName,
    primaryCaregiverAge,
    primaryCaregiverRelationship,
    primaryCaregiverAddress,
    primaryCaregiverHomePhone,
    primaryCaregiverCellPhone,
    primaryCaregiverWorkPhone,
  };
})(WizardForm08Page);

WizardForm08Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
  change: PropTypes.func,
  motherName: PropTypes.string,
  motherAge: PropTypes.string,
  stepmother: PropTypes.string,
  motherAddress: PropTypes.string,
  motherHomePhone: PropTypes.string,
  motherCellPhone: PropTypes.string,
  motherWorkPhone: PropTypes.string,
  motherWorkLength: PropTypes.string,
  motherEmployer: PropTypes.string,
  motherOccupation: PropTypes.string,
  motherPrimaryLang: PropTypes.string,
  motherSecondaryLang: PropTypes.string,
  fatherName: PropTypes.string,
  fatherAge: PropTypes.string,
  stepfather: PropTypes.string,
  fatherAddress: PropTypes.string,
  fatherHomePhone: PropTypes.string,
  fatherCellPhone: PropTypes.string,
  fatherWorkPhone: PropTypes.string,
  fatherWorkLength: PropTypes.string,
  fatherEmployer: PropTypes.string,
  fatherOccupation: PropTypes.string,
  fatherPrimaryLang: PropTypes.string,
  fatherSecondaryLang: PropTypes.string,
  primaryCaregiverName: PropTypes.string,
  primaryCaregiverAge: PropTypes.string,
  primaryCaregiverRelationship: PropTypes.string,
  primaryCaregiverAddress: PropTypes.string,
  primaryCaregiverHomePhone: PropTypes.string,
  primaryCaregiverCellPhone: PropTypes.string,
  primaryCaregiverWorkPhone: PropTypes.string,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm08Page);
