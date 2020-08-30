import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';
import Textarea from '../components/Textarea/Textarea';

const WizardForm43Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Religious &amp; racial ethnic"
        titleRegular="identification"
      />
      <div className="flex" onClick={() => handleDisable(43)}>
        <SectionSubHeader subHeader="CURRENT RELIGIOUS DENOMINATION/AFFILIATION" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="grid__half">
        <Field
          name="rdaSpiritualImportance"
          label="How important are"
          labelBold="spiritual concerns"
          labelLast="in your life"
          component={Textarea}
          type="text"
          disabled={disabled}
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm43Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm43Page);
