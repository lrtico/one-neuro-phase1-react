import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import DescriptionCheckboxCard from '../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

// const handleTextBoxClick = (name, props) => {
//   console.log(`Name passed into handleTextBoxClick function ${name}`);
//   props.change(name, true);
// };
const WizardForm19Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  console.log('WizardPage19 props, ', props);
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex" onClick={() => handleDisable(19)}>
        <SectionSubHeader subHeader="Development" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: 'A',
            cardNameCheckbox: 'mdhMotorSkillsFirstFour',
            cardNameDescription: 'mdhMotorSkillsFirstFourDescription',
            cardLabel: 'Motor skills',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '1',
          },
          {
            cardKey: 'B',
            cardNameCheckbox: 'mdhTemperTantrum',
            cardNameDescription: 'mdhTemperTantrumDescription',
            cardLabel: 'Temper trantrums',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '2',
          },
          {
            cardKey: 'C',
            cardNameCheckbox: 'mdhNoThriveFirstFour',
            cardNameDescription: 'mdhNoThriveFirstFourDescription',
            cardLabel: 'Failure to thrive',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '3',
          },
          {
            cardKey: 'D',
            cardNameCheckbox: 'mdhSeparationAnxiety',
            cardNameDescription: 'mdhSeparationAnxietyDescription',
            cardLabel: 'Separating from parents',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '4',
          },
          {
            cardKey: 'E',
            cardNameCheckbox: 'mdhExcessiveCrying',
            cardNameDescription: 'mdhExcessiveCryingDescription',
            cardLabel: 'Excessive crying',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '5',
          },
        ]}
        label="During this child's"
        labelBold="first four years,"
        labelLast="were there any special problems noted in the following areas"
        name="mdhDevelopmentFirstFourGroup"
        classes="question question--thumbless"
        disabled={disabled}
        // onTextBoxClick={name => handleTextBoxClick(name)}
      />
      <div className="flex">
        <Field
          name="mdhChangeWritingHandGroup"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'mdhChangeWritingHand',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '6',
            },
            {
              cardName: 'mdhChangeWritingHand',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '7',
            },
          ]}
          label="Has this child ever been forced to"
          labelBold="change writing hand"
          classes="question question--thumbless"
          disabled={disabled}
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm19Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm19Page);
