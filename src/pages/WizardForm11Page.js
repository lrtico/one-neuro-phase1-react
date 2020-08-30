import React from 'react';
import PropTypes from 'prop-types';
import '../app.css';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TextQuestion from '../components/TextQuestion';
import FormCardBrotherSister from '../components/Card/FormCard/FormCardBrotherSister';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

const WizardForm11Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex" onClick={() => handleDisable(11)}>
        <SectionTitle titleBold="Siblings" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>

      <FieldArray
        name="brothersSisters"
        component={FormCardBrotherSister}
        disabled={disabled}
      />

      <div className="question">
        <Field
          component={TextQuestion}
          label="How does this child"
          labelBold="get along"
          labelLast="with their brother(s) and sister(s)"
          name="bsGetAlong"
          tabOrder="8"
          type="input"
          classes="question"
          disabled={disabled}
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm11Page.propTypes = {
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
  disabled: PropTypes.bool,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm11Page);
