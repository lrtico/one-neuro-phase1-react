import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';
import TextQuestion from '../components/TextQuestion';

const WizardForm45Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Religious &amp; racial ethnic"
        titleRegular="identification"
      />
      <div className="flex" onClick={() => handleDisable(45)}>
        <SectionSubHeader subHeader="Ethnicity, race, and other identification" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <Field
        alt="Face"
        component={TextQuestion}
        label="What is the patient's"
        labelBold="ethnicity"
        name="rdaEthnicity"
        src="img/icons-happy-face-name.svg"
        tabOrder="1"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Face"
        component={TextQuestion}
        label="What is the patient's"
        labelBold="race"
        name="rdaRace"
        src="img/icons-happy-face-name.svg"
        tabOrder="2"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Face"
        component={TextQuestion}
        label="Any other way you identify yourself and consider"
        labelBold="important"
        name="rdaIdenficationOther"
        src="img/icons-happy-face-name.svg"
        tabOrder="3"
        type="input"
        classes="question"
        disabled={disabled}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm45Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm45Page);
