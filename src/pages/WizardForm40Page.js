import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TextQuestion from '../components/TextQuestion';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

const WizardForm40Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Educational" titleRegular="history" />
        <div onClick={() => handleDisable(40)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>
      <Field
        name="ehDaycareYesNo"
        component={RadioCard}
        cardInfo={[
          {
            cardName: 'ehDaycare',
            cardKey: 'A',
            cardLabel: 'Yes',
            tabOrder: '1',
          },
          {
            cardName: 'ehDaycare',
            cardKey: 'B',
            cardLabel: 'No',
            tabOrder: '2',
          },
        ]}
        label="Does or did this child"
        labelBold="attend"
        labelLast="preschool/daycare"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          alt="Birthday cake"
          component={TextQuestion}
          label="At what"
          labelBold="age"
          name="ehDaycareAge"
          src="img/icons-birthday-cake.svg"
          tabOrder="4"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          alt="Clock"
          component={TextQuestion}
          label="How many"
          labelBold="hours"
          labelLast="per week"
          name="ehDaycareTime"
          src="img/icons-stopwatch.svg"
          tabOrder="5"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <Field
        alt="Calendar"
        component={TextQuestion}
        label=""
        labelBold="Days"
        labelLast="per week"
        name="ehDaycareDays"
        src="img/icons-calendar-large.svg"
        tabOrder="6"
        type="input"
        classes="question grid__half"
        disabled={disabled}
      />
      <Field
        alt="Bomb"
        component={TextQuestion}
        label="Any"
        labelBold="problems"
        labelLast="in preschool/daycare"
        name="ehDaycareProblems"
        src="img/icons-bomb.svg"
        tabOrder="7"
        type="input"
        classes="question"
        disabled={disabled}
      />
      <Field
        name="ehKindergartenYesNo"
        component={RadioCard}
        cardInfo={[
          {
            cardName: 'ehKindergarten',
            cardKey: 'A',
            cardLabel: 'Yes',
            tabOrder: '8',
          },
          {
            cardName: 'ehKindergarten',
            cardKey: 'B',
            cardLabel: 'No',
            tabOrder: '9',
          },
        ]}
        label="Does or did this child"
        labelBold="attend"
        labelLast="kindergarten"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Field
        alt="Bomb"
        component={TextQuestion}
        label="Any"
        labelBold="problems"
        labelLast="in kindergarten"
        name="ehKindergartenProblems"
        src="img/icons-bomb.svg"
        tabOrder="10"
        type="input"
        classes="question"
        disabled={disabled}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm40Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm40Page);
