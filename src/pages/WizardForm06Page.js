import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from '../validate';
import TextQuestion from '../components/TextQuestion';
import SectionTitle from '../components/SectionTitle';
import SectionSubTitle from '../components/SectionSubTitle';
import Button from '../components/Button';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import SectionSubHeader from '../components/SectionSubHeader';
import CopyForwardButton, { PillButton } from '../components/ButtonToggle/CopyForwardButton';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';
import { normalizePhone } from '../utils/Normalize';

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

class WizardForm06Page extends Component {
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

    const { change } = this.props;

    motherName = motherName === undefined ? "(Mother's name)" : motherName;
    motherAge = motherAge === undefined ? "(mother's age)" : motherAge;
    stepmother = stepmother === 'Yes' ? 'stepmother' : 'mother';
    motherAddress = motherAddress === undefined ? "(mother's address)" : motherAddress;
    motherHomePhone = motherHomePhone === undefined ? "(mother's home phone)" : motherHomePhone;
    motherCellPhone = motherCellPhone === undefined ? "(mother's cell phone)" : motherCellPhone;
    motherWorkPhone = motherWorkPhone === undefined ? "(mother's work phone)" : motherWorkPhone;
    motherEmployer = motherEmployer === undefined ? "(mother's employer)" : motherEmployer;
    motherOccupation = motherOccupation === undefined ? "(mother's occupation)" : motherOccupation;
    motherWorkLength = motherWorkLength === undefined ? "(mother's work length)" : motherWorkLength;
    motherPrimaryLang = motherPrimaryLang === undefined ? "(mother's primary language)" : motherPrimaryLang;
    motherSecondaryLang = motherSecondaryLang === undefined ? "(mother's secondary language)" : motherSecondaryLang;
    fatherName = fatherName === undefined ? "(Father's name)" : fatherName;
    fatherAge = fatherAge === undefined ? "(father's age)" : fatherAge;
    stepfather = stepfather === 'Yes' ? 'stepfather' : 'father';
    fatherAddress = fatherAddress === undefined ? "(father's address)" : fatherAddress;
    fatherHomePhone = fatherHomePhone === undefined ? "(father's home phone)" : fatherHomePhone;
    fatherCellPhone = fatherCellPhone === undefined ? "(father's cell phone)" : fatherCellPhone;
    fatherWorkPhone = fatherWorkPhone === undefined ? "(father's work phone)" : fatherWorkPhone;
    fatherEmployer = fatherEmployer === undefined ? "(father's employer)" : fatherEmployer;
    fatherOccupation = fatherOccupation === undefined ? "(father's occupation)" : fatherOccupation;
    fatherWorkLength = fatherWorkLength === undefined ? "(father's work length)" : fatherWorkLength;
    fatherPrimaryLang = fatherPrimaryLang === undefined ? "(father's primary language)" : fatherPrimaryLang;
    fatherSecondaryLang = fatherSecondaryLang === undefined ? "(father's secondary language)" : fatherSecondaryLang;
    primaryCaregiverName = primaryCaregiverName === undefined ? "(Primary caregiver's name)" : primaryCaregiverName;
    primaryCaregiverAge = primaryCaregiverAge === undefined ? "(Primary caregiver's age)" : primaryCaregiverAge;
    primaryCaregiverRelationship = primaryCaregiverRelationship === undefined
      ? '(Primary caregiver relationship)'
      : primaryCaregiverRelationship;
    primaryCaregiverAddress = primaryCaregiverAddress === undefined
      ? "(Primary caregiver's address)"
      : primaryCaregiverAddress;
    primaryCaregiverHomePhone = primaryCaregiverHomePhone === undefined
      ? "(Primary caregiver's home phone)"
      : primaryCaregiverHomePhone;
    primaryCaregiverCellPhone = primaryCaregiverCellPhone === undefined
      ? "(Primary caregiver's cell phone)"
      : primaryCaregiverCellPhone;
    primaryCaregiverWorkPhone = primaryCaregiverWorkPhone === undefined
      ? "(Primary caregiver's work phone)"
      : primaryCaregiverWorkPhone;

    const bgHistoryCopyForward = `${motherName}, ${motherAge}, the ${stepmother}, lives at ${motherAddress}. Her home phone number is ${motherHomePhone}, her cell phone is ${motherCellPhone}, and her work phone is ${motherWorkPhone}.\n\n${motherName} has worked ${motherWorkLength} years for ${motherEmployer} as a ${motherOccupation}.\n\nHer primary language is ${motherPrimaryLang}. Her secondary language is ${motherSecondaryLang}.\n\n${fatherName}, ${fatherAge}, the ${stepfather}, lives at ${fatherAddress}. His home phone number is ${fatherHomePhone}, his cell phone is ${fatherCellPhone}, and his work phone is ${fatherWorkPhone}.\n\n${fatherName} has worked ${fatherWorkLength} years for ${fatherEmployer} as a ${fatherOccupation}.\n\nHis primary language is ${fatherPrimaryLang}. His secondary language is ${fatherSecondaryLang}.\n\n${primaryCaregiverName}, ${primaryCaregiverAge}, the ${primaryCaregiverRelationship}, lives at ${primaryCaregiverAddress}. His home phone number is ${primaryCaregiverHomePhone}, his cell phone is ${primaryCaregiverCellPhone}, and his work phone is ${primaryCaregiverWorkPhone}.`;

    console.log(
      `
        Info we need to pass to the relevant background history
        =======================================================
        Mother Name = ${motherName}
        Mother Age = ${motherAge}
        Mother/Stepmother = ${stepmother}
        Mother address = ${motherAddress}
        Mother home phone = ${motherHomePhone}
        Mother cell phone = ${motherCellPhone}
        Mother work phone = ${motherWorkPhone}
        Mother employer = ${motherEmployer}
        Mother occupation = ${motherOccupation}
        Mother years at job = ${motherWorkLength}
        Mother primary language = ${motherPrimaryLang}
        Mother secondary language = ${motherSecondaryLang}
        -------------------
        Father Name =
        Father Age =
        Father/Stepmother =
        Father address =
        Father home phone =
        Father cell phone =
        Father work phone =
        Father employer =
        Father occupation =
        Father years at job =
        Father primary language =
        Father secondary language =
      `,
    );
    console.log(
      'WizardPage6 relevant background history copy forward string = ',
      bgHistoryCopyForward,
    );
    change('relevantBackgroundHistory', bgHistoryCopyForward);
  };

  handlePrimaryCaregiver = () => {
    const { change } = this.props;
    change('bhPrimaryCaregiverFather', false);
    change('bhPrimaryCaregiverMother', true);
  };

  handlePaqCopyForward = () => {
    const {
      paqName, paqAddress, paqHomePhone, paqWorkPhone, paqCellPhone, change,
    } = this.props;
    change('bhMotherName', paqName);
    change('bhMotherAddress', paqAddress);
    change('bhMotherHomePhone', paqHomePhone);
    change('bhMotherWorkPhone', paqWorkPhone);
    change('bhMotherCellPhone', paqCellPhone);
  };

  render() {
    const { handleSubmit, handleDisable, disabled } = this.props;
    const { addCopyForward, handlePrimaryCaregiver, handlePaqCopyForward } = this;
    console.log('WizardPage6 props, ', this.props);
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Background" titleRegular="history" />
        <SectionSubTitle subTitleFirst="Parent's" subTitleBold="information" />
        <div className="flex">
          <SectionSubHeader subHeader="Mother" />
          <div onClick={handlePrimaryCaregiver}>
            <PillButton buttonToggleLabel="primary caregiver" />
          </div>
          <div onClick={event => addCopyForward(event)}>
            <CopyForwardButton buttonToggleLabel="copy forward" />
          </div>
          <div onClick={handlePaqCopyForward}>
            <CopyForwardButton buttonToggleLabel="person answering questions" />
          </div>
          <div className="flex" onClick={() => handleDisable(6)}>
            <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
          </div>
        </div>
        <div className="flex">
          <Field
            alt="Person"
            component={TextQuestion}
            label="What is the mother's"
            labelBold="name"
            name="bhMotherName"
            src="img/icons-happy-face-name.svg"
            tabOrder="1"
            type="input"
            classes="question grid__half"
            disabled={disabled}
            // copyForward="true"
            // handleCopyForward={this.copyPaqNameForward}
          />
          <Field
            name="bhStepmotherYesNo"
            component={RadioCard}
            cardInfo={[
              {
                cardName: 'bhStepmother',
                cardKey: 'A',
                cardLabel: 'Yes',
                tabOrder: '2',
              },
              {
                cardName: 'bhStepmother',
                cardKey: 'B',
                cardLabel: 'No',
                tabOrder: '3',
              },
            ]}
            label="Is she the"
            labelBold="stepmother"
            classes="question question--thumbless"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="House"
            component={TextQuestion}
            label="What is her"
            labelBold="address"
            name="bhMotherAddress"
            src="img/icons-house.svg"
            tabOrder="4"
            type="input"
            classes="question grid__half"
            disabled={disabled}
            // copyForward="true"
            // handleCopyForward={this.copyPaqAddressForward}
          />
          <Field
            component={TextQuestion}
            label="What is her"
            labelBold="age"
            name="bhMotherAge"
            tabOrder="5"
            type="input"
            classes="question grid__half"
            disabled={disabled}
            // copyForward="true"
          />
        </div>
        <div className="flex">
          <Field
            alt="Phone"
            component={TextQuestion}
            label=""
            labelBold="Home"
            labelLast="phone"
            name="bhMotherHomePhone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="6"
            type="text"
            classes="question grid__third"
            // copyForward="true"
            // handleCopyForward={this.copyPaqHomePhoneForward}
            normalize={normalizePhone}
            disabled={disabled}
          />
          <Field
            alt="Phone"
            component={TextQuestion}
            label=""
            labelBold="Work"
            labelLast="phone"
            name="bhMotherWorkPhone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="7"
            type="text"
            classes="question grid__third"
            // copyForward="true"
            // handleCopyForward={this.copyPaqWorkPhoneForward}
            normalize={normalizePhone}
            disabled={disabled}
          />
          <Field
            alt="Phone"
            component={TextQuestion}
            label=""
            labelBold="Cell"
            labelLast="phone"
            name="bhMotherCellPhone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="8"
            type="text"
            classes="question grid__third"
            // copyForward="true"
            // handleCopyForward={this.copyPaqCellPhoneForward}
            normalize={normalizePhone}
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="Woman"
            component={TextQuestion}
            label="What is the mother's"
            labelBold="occupation"
            name="bhMotherOccupation"
            src="img/icons-woman-generic.svg"
            tabOrder="9"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="Who is her"
            labelBold="employer"
            name="bhMotherEmployer"
            alt="Office"
            src="img/icons-business-building.svg"
            type="input"
            tabOrder="10"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            component={TextQuestion}
            label="How many"
            labelBold="years"
            labelLast="has she worked there"
            src="img/icons-number.svg"
            alt="Calendar"
            name="bhMotherLengthEmployement"
            tabOrder="11"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="What is the"
            labelBold="highest grade"
            labelLast="achieved"
            src="img/icons-graduation-cap.svg"
            alt="Graduation cap"
            name="bhMotherHighestGrade"
            type="input"
            tabOrder="12"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            component={TextQuestion}
            label="What is their"
            labelBold="primary language"
            src="img/icons-speech-bubble.svg"
            alt="Speech bubble"
            name="bhMotherPrimaryLanguage"
            tabOrder="13"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="What is their"
            labelBold="secondary language"
            labelLast="achieved"
            src="img/icons-speech-bubble.svg"
            alt="Speech bubble"
            name="bhMotherSecondaryLanguage"
            type="input"
            tabOrder="14"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

WizardForm06Page.propTypes = {
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
  disabled: PropTypes.bool,
  change: PropTypes.func,
  paqName: PropTypes.string,
  paqAddress: PropTypes.string,
  paqHomePhone: PropTypes.string,
  paqWorkPhone: PropTypes.string,
  paqCellPhone: PropTypes.string,
  motherName: PropTypes.string,
  motherAge: PropTypes.string,
  stepmother: PropTypes.string,
  motherAddress: PropTypes.string,
  motherHomePhone: PropTypes.string,
  motherCellPhone: PropTypes.string,
  motherWorkPhone: PropTypes.string,
  motherEmployer: PropTypes.string,
  motherOccupation: PropTypes.string,
  motherWorkLength: PropTypes.string,
  motherPrimaryLang: PropTypes.string,
  motherSecondaryLang: PropTypes.string,
  fatherName: PropTypes.string,
  fatherAge: PropTypes.string,
  stepfather: PropTypes.string,
  fatherAddress: PropTypes.string,
  fatherHomePhone: PropTypes.string,
  fatherCellPhone: PropTypes.string,
  fatherWorkPhone: PropTypes.string,
  fatherEmployer: PropTypes.string,
  fatherOccupation: PropTypes.string,
  fatherWorkLength: PropTypes.string,
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

// Decorate with connect to read form values
const selector = formValueSelector('wizard'); // <-- same as form name
WizardForm06Page = connect(state => {
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
  const motherPrimaryLang = selector(state, 'bhMotherPrimaryLanguage');
  const motherSecondaryLang = selector(state, 'bhMotherSecondaryLanguage');
  const fatherName = selector(state, 'bhFatherName');
  const fatherAge = selector(state, 'bhFatherAge');
  const faepmother = selector(state, 'bhStepfather');
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
  const primaryCaregiverRelationship = selector(state, 'bhOtherParentStepparentGuardian');
  const primaryCaregiverAddress = selector(state, 'bhOtherParentStepparentAddress');
  const primaryCaregiverHomePhone = selector(state, 'bhOtherParentStepparentHomePhone');
  const primaryCaregiverCellPhone = selector(state, 'bhOtherParentStepparentCellPhone');
  const primaryCaregiverWorkPhone = selector(state, 'bhOtherParentStepparentWorkPhone');
  const paqName = selector(state, 'paqName');
  const paqAddress = selector(state, 'paqAddress');
  const paqHomePhone = selector(state, 'paqHomePhone');
  const paqWorkPhone = selector(state, 'paqWorkPhone');
  const paqCellPhone = selector(state, 'paqCellPhone');
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
    faepmother,
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
    paqName,
    paqAddress,
    paqHomePhone,
    paqWorkPhone,
    paqCellPhone,
  };
})(WizardForm06Page);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm06Page);
