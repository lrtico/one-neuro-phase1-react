import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import validate from "../validate";
import TextQuestion from "../components/TextQuestion/";
import SectionTitle from "../components/SectionTitle";
import SectionSubTitle from "../components/SectionSubTitle";
import Button from "../components/Button";
import CopyForwardButton from "../components/ButtonToggle/CopyForwardButton";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import SectionSubHeader from "../components/SectionSubHeader";
import ButtonToggle from "../components/ButtonToggle";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";
import NormalizePhoneInput from "../components/TextQuestion/NormalizePhoneInput";
import { normalizePhone } from "../utils/Normalize";

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

class WizardForm07Page extends Component {
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
      primaryCaregiverWorkPhone
    } = this.props;
    motherName = motherName === undefined ? "(Mother's name)" : motherName;
    motherAge = motherAge === undefined ? "(mother's age)" : motherAge;
    stepmother = stepmother === "Yes" ? "stepmother" : "mother";
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
    stepfather = stepfather === "Yes" ? "stepfather" : "father";
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
        ? "(Primary caregiver relationship)"
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

    this.props.change("relevant-background-history", bgHistoryCopyForward);
  };

  handlePrimaryCaregiver = () => {
    this.props.change("bh-primary-caregiver-father", true);
    this.props.change("bh-primary-caregiver-mother", false);
  };

  handlePaqCopyForward = () => {
    let {
      paqName,
      paqAddress,
      paqHomePhone,
      paqWorkPhone,
      paqCellPhone
    } = this.props;
    this.props.change("bh-father-name", paqName);
    this.props.change("bh-father-address", paqAddress);
    this.props.change("bh-father-home-phone", paqHomePhone);
    this.props.change("bh-father-work-phone", paqWorkPhone);
    this.props.change("bh-father-cell-phone", paqCellPhone);
  };

  render() {
    const { handleSubmit, handleDisable, disabled } = this.props;
    const {
      addCopyForward,
      handlePrimaryCaregiver,
      handlePaqCopyForward
    } = this;
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Background" titleRegular="history" />
        <SectionSubTitle subTitleFirst="Parent's" subTitleBold="information" />
        <div className="flex">
          <SectionSubHeader subHeader="Father" />
          <div onClick={handlePrimaryCaregiver}>
            <ButtonToggle buttonToggleLabel="primary caregiver" />
          </div>
          <div onClick={event => addCopyForward(event)}>
            <CopyForwardButton buttonToggleLabel="copy forward" />
          </div>
          <div onClick={handlePaqCopyForward}>
            <CopyForwardButton buttonToggleLabel="person answering questions" />
          </div>
          <div className="flex" onClick={() => handleDisable(7)}>
            <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
          </div>
        </div>
        <div className="flex">
          <Field
            alt="Person"
            component={TextQuestion}
            label="What is the father's"
            labelBold="name"
            name="bh-father-name"
            src="img/icons-happy-face-name.svg"
            tabOrder="1"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            name="bh-stepfather-yes-no"
            component={RadioCard}
            cardInfo={[
              {
                cardName: "bh-stepfather",
                cardKey: "A",
                cardLabel: "Yes",
                tabOrder: "2"
              },
              {
                cardName: "bh-stepfather",
                cardKey: "B",
                cardLabel: "No",
                tabOrder: "3"
              }
            ]}
            label="Is he the"
            labelBold="stepfather"
            classes="question question--thumbless"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="House"
            component={TextQuestion}
            label="What is his"
            labelBold="address"
            name="bh-father-address"
            src="img/icons-house.svg"
            tabOrder="4"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="What is his"
            labelBold="age"
            name="bh-father-age"
            tabOrder="5"
            type="input"
            classes="question grid__half"
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
            name="bh-father-home-phone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="6"
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
            name="bh-father-work-phone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="7"
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
            name="bh-father-cell-phone"
            maxCharacters={14}
            src="img/icons-phone.svg"
            tabOrder="8"
            type="text"
            classes="question grid__third"
            normalize={normalizePhone}
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="Man"
            component={TextQuestion}
            label="What is the father's"
            labelBold="occupation"
            name="bh-father-occupation"
            src="img/icons-man-generic.svg"
            tabOrder="9"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="Who is his"
            labelBold="employer"
            name="bh-father-employer"
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
            labelLast="has he worked there"
            src="img/icons-number.svg"
            alt="Calendar"
            name="bh-father-length-employement"
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
            name="bh-father-highest-grade"
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
            name="bh-father-primary-language"
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
            name="bh-father-secondary-language"
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

// Decorate with connect to read form values
const selector = formValueSelector("wizard"); // <-- same as form name
WizardForm07Page = connect(state => {
  // can select values individually
  const motherName = selector(state, "bh-mother-name");
  const motherAge = selector(state, "bh-mother-age");
  const stepmother = selector(state, "bh-stepmother");
  const motherAddress = selector(state, "bh-mother-address");
  const motherHomePhone = selector(state, "bh-mother-home-phone");
  const motherCellPhone = selector(state, "bh-mother-work-phone");
  const motherWorkPhone = selector(state, "bh-mother-cell-phone");
  const motherWorkLength = selector(state, "bh-mother-length-employement");
  const motherEmployer = selector(state, "bh-mother-employer");
  const motherOccupation = selector(state, "bh-mother-occupation");
  const motherPrimaryLang = selector(state, "bh-mother-primary-language");
  const motherSecondaryLang = selector(state, "bh-mother-secondary-language");
  const fatherName = selector(state, "bh-father-name");
  const fatherAge = selector(state, "bh-father-age");
  const faepmother = selector(state, "bh-stepfather");
  const fatherAddress = selector(state, "bh-father-address");
  const fatherHomePhone = selector(state, "bh-father-home-phone");
  const fatherCellPhone = selector(state, "bh-father-work-phone");
  const fatherWorkPhone = selector(state, "bh-father-cell-phone");
  const fatherWorkLength = selector(state, "bh-father-length-employement");
  const fatherEmployer = selector(state, "bh-father-employer");
  const fatherOccupation = selector(state, "bh-father-occupation");
  const fatherPrimaryLang = selector(state, "bh-father-primary-language");
  const fatherSecondaryLang = selector(state, "bh-father-secondary-language");
  const primaryCaregiverName = selector(state, "bh-primary-caregiver-name");
  const primaryCaregiverAge = selector(state, "bh-other-parent-stepparent-age");
  const primaryCaregiverRelationship = selector(
    state,
    "bh-other-parent-stepparent-guardian"
  );
  const primaryCaregiverAddress = selector(
    state,
    "bh-other-parent-stepparent-address"
  );
  const primaryCaregiverHomePhone = selector(
    state,
    "bh-other-parent-stepparent-home-phone"
  );
  const primaryCaregiverCellPhone = selector(
    state,
    "bh-other-parent-stepparent-cell-phone"
  );
  const primaryCaregiverWorkPhone = selector(
    state,
    "bh-other-parent-stepparent-work-phone"
  );
  const paqName = selector(state, "paq-name");
  const paqAddress = selector(state, "paq-address");
  const paqHomePhone = selector(state, "paq-home-phone");
  const paqWorkPhone = selector(state, "paq-work-phone");
  const paqCellPhone = selector(state, "paq-cell-phone");
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
    paqCellPhone
  };
})(WizardForm07Page);

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm07Page);
