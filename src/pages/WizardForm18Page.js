import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import DescriptionCheckboxCard from '../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';

const WizardForm18Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex" onClick={() => handleDisable(18)}>
        <SectionSubHeader subHeader="Development" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: 'A',
            cardNameCheckbox: 'mdhWalkingDifficulty',
            cardNameDescription: 'mdhWalkingDifficultyDescription',
            cardLabel: 'Walking difficulty',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '1',
          },
          {
            cardKey: 'B',
            cardNameCheckbox: 'mdhUnclearSpeech',
            cardNameDescription: 'mdhUnclearSpeechDescription',
            cardLabel: 'Unclear speech',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '2',
          },
          {
            cardKey: 'C',
            cardNameCheckbox: 'mdhFeedingProblem',
            cardNameDescription: 'mdhFeedingProblemDescription',
            cardLabel: 'Feeding problem',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '3',
          },
          {
            cardKey: 'D',
            cardNameCheckbox: 'mdhUnderweightProblem',
            cardNameDescription: 'mdhUnderweightProblemDescription',
            cardLabel: 'Underweight problem',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '4',
          },
          {
            cardKey: 'E',
            cardNameCheckbox: 'mdhOverweightProblem',
            cardNameDescription: 'mdhOverweightProblemDescription',
            cardLabel: 'Overweight problem',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '5',
          },
          {
            cardKey: 'F',
            cardNameCheckbox: 'mdhColic',
            cardNameDescription: 'mdhColicDescription',
            cardLabel: 'Colic',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '6',
          },
          {
            cardKey: 'G',
            cardNameCheckbox: 'mdhSleepProblem',
            cardNameDescription: 'mdhSleepProblemDescription',
            cardLabel: 'Sleep problem',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '7',
          },
          {
            cardKey: 'H',
            cardNameCheckbox: 'mdhEatingProblem',
            cardNameDescription: 'mdhEatingProblemDescription',
            cardLabel: 'Eating problem',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '8',
          },
          {
            cardKey: 'I',
            cardNameCheckbox: 'mdhLearningRideBike',
            cardNameDescription: 'mdhLearningRideBikeDescription',
            cardLabel: 'Difficulty learning to ride a bike',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '9',
          },
          {
            cardKey: 'J',
            cardNameCheckbox: 'mdhLearningSkip',
            cardNameDescription: 'mdhLearningSkipDescription',
            cardLabel: 'Difficulty learning how to skip',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '10',
          },
          {
            cardKey: 'K',
            cardNameCheckbox: 'mdhLearningThrowCatch',
            cardNameDescription: 'mdhLearningThrowCatchDescription',
            cardLabel: 'Difficulty learning to throw or catch',
            liClasses: 'question__choice--full-width desc-checkbox',
            tabOrder: '11',
          },
        ]}
        label="Has this child"
        labelBold="experienced"
        labelLast="any of the following"
        name="mdhDevelopmentIssuesGroup"
        classes="question question--thumbless"
        disabled={disabled}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm18Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm18Page);
