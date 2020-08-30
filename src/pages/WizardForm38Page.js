import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TextQuestion from '../components/TextQuestion';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

const WizardForm38Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Recreation &amp; Interests" />
        <div onClick={() => handleDisable(38)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>
      <Field
        alt="Basketball hoop"
        component={TextQuestion}
        label="What"
        labelBold="sport"
        labelLast="activities does this child enjoy"
        name="riActivitesSports"
        src="img/icons-basketball-hoop.svg"
        tabOrder="1"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Lego"
        component={TextQuestion}
        label="What"
        labelBold="hobbies"
        labelLast="does this child enjoy"
        name="riActivitesHobbies"
        src="img/icons-lego-brick.svg"
        tabOrder="2"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        alt="Question mark"
        component={TextQuestion}
        label="What"
        labelBold="other"
        labelLast="activities does this child enjoy"
        name="riActivitesOther"
        src="img/icons-question-mark-plain.svg"
        tabOrder="3"
        type="input"
        classes="question"
        disabled={disabled}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm38Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm38Page);
