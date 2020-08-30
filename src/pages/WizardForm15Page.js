import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { normalizeNumber } from '../utils/Normalize';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import CheckboxCard from '../components/Card/CheckboxCard/CheckboxCard';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';
import TextQuestion from '../components/TextQuestion';

class WizardForm15Page extends Component {
  componentDidMount() {
    const { patientAge, motherAge, fatherAge, change } = this.props;
    console.log(`Mother's age = ${motherAge}, father's age = ${fatherAge}`);
    if (motherAge !== undefined && patientAge !== undefined) {
      const motherAgeAtBirth = Number(motherAge - patientAge);
      console.log(`Mother's age at birth = ${motherAgeAtBirth}`);
      change('mdhMothersAge', motherAgeAtBirth);
    }
    if (fatherAge !== undefined && patientAge !== undefined) {
      const fatherAgeAtBirth = Number(fatherAge - patientAge);
      console.log(`Father's age at birth = ${fatherAgeAtBirth}`);
      change('mdhFathersAge', fatherAgeAtBirth);
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   if (
  //     this.props.motherAge !== nextProps.motherAge ||
  //     this.props.fatherAge !== nextProps.fatherAge
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    const { handleSubmit, handleDisable, disabled } = this.props;
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle
          titleBold="Medical &amp; development"
          titleRegular="history"
        />
        <div className="flex" onClick={() => handleDisable(15)}>
          <SectionSubHeader subHeader="Birth" />
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
        <div className="flex">
          <Field
            component={TextQuestion}
            label="At this"
            labelBold="child's birth,"
            labelLast="what was the mother's age"
            name="mdhMothersAge"
            tabOrder="1"
            type="input"
            classes="question grid__half"
            disabled={disabled}
            normalize={normalizeNumber}
          />
          <Field
            alt="Speech bubble"
            component={TextQuestion}
            label="Father's"
            name="mdhFathersAge"
            tabOrder="2"
            type="input"
            classes="question grid__half"
            disabled={disabled}
            normalize={normalizeNumber}
          />
        </div>
        <Field
          component={TextQuestion}
          label="Mother's"
          labelBold="age at birth,"
          labelLast="of first child"
          name="mdhMothersAgeFirstChild"
          tabOrder="3"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <div className="flex">
          <Field
            name="mdhHospitalBirthGroup"
            component={RadioCard}
            cardInfo={[
              {
                cardName: 'mdhHospitalBirth',
                cardKey: 'A',
                cardLabel: 'Yes',
                tabOrder: '4',
              },
              {
                cardName: 'mdhHospitalBirth',
                cardKey: 'B',
                cardLabel: 'No',
                tabOrder: '5',
              },
            ]}
            label="Was this child"
            labelBold="born"
            labelLast="in a hospital"
            classes="question grid__half question--thumbless"
            disabled={disabled}
          />
          <Field
            component={TextQuestion}
            label="If no,"
            labelBold="where"
            name="mdhBirthLocation"
            tabOrder="6"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="Ruler"
            src="img/icons-length-ruler.svg"
            component={TextQuestion}
            label=""
            labelBold="Length"
            labelLast="of pregnancy (# of weeks)"
            name="mdhPregnancyLength"
            tabOrder="7"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            alt="Scale"
            src="img/icons-weight-scale.svg"
            component={TextQuestion}
            label="Birth"
            labelBold="weight"
            labelLast="(lbs &amp; oz)"
            name="mdhBirthWeight"
            tabOrder="8"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            alt="Ruler"
            src="img/icons-length-ruler.svg"
            component={TextQuestion}
            label=""
            labelBold="Length"
            labelLast="of labor"
            name="mdhLaborLength"
            tabOrder="9"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
          <Field
            alt="Scorecard"
            src="img/icons-scorecard.svg"
            component={TextQuestion}
            label=""
            labelBold="Apgar"
            labelLast="score"
            name="mdhApgarScore"
            tabOrder="10"
            type="input"
            classes="question grid__half"
            disabled={disabled}
          />
        </div>
        <Field
          component={TextQuestion}
          label="Child's"
          labelBold="condition"
          labelLast="at birth"
          name="mdhBirthConditionChild"
          tabOrder="11"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="Mother's"
          labelBold="condition"
          labelLast="at birth"
          name="mdhBirthConditionMother"
          tabOrder="12"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <FieldArray
          component={CheckboxCard}
          checkboxInfo={[
            {
              cardName: 'mdhForceps',
              cardKey: 'A',
              cardLabel: 'Forceps used',
              tabOrder: '13',
            },
            {
              cardName: 'mdhBreech',
              cardKey: 'B',
              cardLabel: 'Breech birth',
              tabOrder: '14',
            },
            {
              cardName: 'mdhInduced',
              cardKey: 'C',
              cardLabel: 'Labor induced',
              tabOrder: '15',
            },
            {
              cardName: 'mdhCeasarean',
              cardKey: 'D',
              cardLabel: 'Ceasarean delivery',
              tabOrder: '16',
            },
          ]}
          label="Check any of the following"
          labelBold="complications"
          labelLast="that occured during birth"
          name="mdhComplications"
          classes="question question--thumbless"
          disabled={disabled}
        />
        <Field
          alt="Complications"
          component={TextQuestion}
          label="Other"
          labelBold="delivery complications"
          name="mdhDeliveryComplications"
          src="img/icons-problem-triangle.svg"
          tabOrder="17"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          alt="Calendar"
          component={TextQuestion}
          label="Incubator:"
          labelBold="How long"
          name="mdhIncubator"
          src="img/icons-calendar-large.svg"
          tabOrder="18"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="Jaundiced: Bilirubin lights?"
          labelBold="How long"
          name="mdhJaundiced"
          tabOrder="19"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label=""
          labelBold="Breathing problems"
          labelLast="right after birth"
          name="mdhBreathingProblems"
          tabOrder="20"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label=""
          labelBold="Supplemental oxygen?"
          labelLast="If yes, how long"
          name="mdhSupplementalOxygen"
          tabOrder="21"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <Field
          component={TextQuestion}
          label="Was"
          labelBold="anesthesia"
          labelLast="used during delivery? If yes, what kind"
          name="mdhAnesthesia"
          tabOrder="22"
          type="input"
          classes="question"
          disabled={disabled}
        />
        <div className="flex">
          <FieldArray
            name="mdhMotherLengthHospitalGroup"
            component={RadioCard}
            cardInfo={[
              {
                cardName: 'mdhMotherLengthHospital',
                cardKey: 'A',
                cardLabel: '1-2 Days',
                tabOrder: '23',
              },
              {
                cardName: 'mdhMotherLengthHospital',
                cardKey: 'B',
                cardLabel: '3-7 Days',
                tabOrder: '24',
              },
              {
                cardName: 'mdhMotherLengthHospital',
                cardKey: 'C',
                cardLabel: '8-10 Days',
                tabOrder: '25',
              },
              {
                cardName: 'mdhMotherLengthHospital',
                cardKey: 'D',
                cardLabel: '11+ Days',
                tabOrder: '26',
              },
              {
                cardName: 'mdhMotherLengthHospital',
                cardKey: 'E',
                cardLabel: 'Undefined',
                tabOrder: '27',
              },
            ]}
            label="Mother's"
            labelBold="length"
            labelLast="of hospital stay"
            classes="question question--thumbless"
            disabled={disabled}
          />
        </div>
        <div className="flex">
          <Field
            name="mdhChildLengthHospitalGroup"
            component={RadioCard}
            cardInfo={[
              {
                cardName: 'mdhChildLengthHospital',
                cardKey: 'A',
                cardLabel: '1-2 Days',
                tabOrder: '28',
              },
              {
                cardName: 'mdhChildLengthHospital',
                cardKey: 'B',
                cardLabel: '3-7 Days',
                tabOrder: '29',
              },
              {
                cardName: 'mdhChildLengthHospital',
                cardKey: 'C',
                cardLabel: '8-10 Days',
                tabOrder: '30',
              },
              {
                cardName: 'mdhChildLengthHospital',
                cardKey: 'D',
                cardLabel: '11+ Days',
                tabOrder: '31',
              },
              {
                cardName: 'mdhChildLengthHospital',
                cardKey: 'E',
                cardLabel: 'Undefined',
                tabOrder: '32',
              },
            ]}
            label="Child's"
            labelBold="length"
            labelLast="of hospital stay"
            classes="question question--thumbless"
            disabled={disabled}
          />
        </div>

        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

// Decorate with connect to read form values
const selector = formValueSelector('wizard'); // <-- same as form name
WizardForm15Page = connect((state) => {
  // can select values individually
  const patientAge = selector(state, 'diAge');
  const motherAge = selector(state, 'bhMotherAge');
  const fatherAge = selector(state, 'bhFatherAge');
  return {
    patientAge,
    motherAge,
    fatherAge,
  };
})(WizardForm15Page);

WizardForm15Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
  change: PropTypes.func,
  patientAge: PropTypes.string,
  motherAge: PropTypes.string,
  fatherAge: PropTypes.string,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm15Page);
