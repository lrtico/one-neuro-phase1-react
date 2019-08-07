import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import FormCardTextDate from '../components/Card/FormCard/FormCardTextDate';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

const WizardForm05Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex" onClick={() => handleDisable(5)}>
        <SectionTitle titleBold="Records" titleRegular="reviewed" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <FieldArray name="recordsReviewed" component={FormCardTextDate} disabled={disabled} />
      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm05Page.propTypes = {
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
  disabled: PropTypes.bool,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm05Page);
