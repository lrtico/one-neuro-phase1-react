import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';
import SectionTitle from '../components/SectionTitle';
import SectionSubHeader from '../components/SectionSubHeader';
import Button from '../components/Button';
import ButtonDisable from '../components/ButtonToggle/ButtonDisable';
import RadioCard from '../components/Card/RadioCard/RadioCard';
import TextQuestion from '../components/TextQuestion';

const WizardForm41Page = (props) => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Educational" titleRegular="history" />
      <div className="flex">
        <SectionSubHeader subHeader="Elementary/High School" />
        <div onClick={() => handleDisable(41)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>
      <div className="flex">
        <Field
          name="ehChangedSchoolsYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehChangedSchools',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '1',
            },
            {
              cardName: 'ehChangedSchools',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '2',
            },
          ]}
          label="Changed schools"
          labelBold="for reasons"
          labelLast="other than normal academic progression"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehChangedSchoolsDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="3"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="ehRepeatGradeYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehRepeatGrade',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '4',
            },
            {
              cardName: 'ehRepeatGrade',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '5',
            },
          ]}
          label="Has been"
          labelBold="retained"
          labelLast="a grade in school"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehGradeRepeatDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="6"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="ehGradeSkipYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehGradeSkip',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '7',
            },
            {
              cardName: 'ehGradeSkip',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '8',
            },
          ]}
          label="Has"
          labelBold="skipped"
          labelLast="a grade in school"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehGradeSkipDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="9"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="ehDifficultyReadingYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehDifficultyReading',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '10',
            },
            {
              cardName: 'ehDifficultyReading',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '11',
            },
          ]}
          label="Does this child have"
          labelBold="difficulty reading"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehDifficultReadingDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="12"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="ehDifficultyMathYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehDifficultyMath',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '13',
            },
            {
              cardName: 'ehDifficultyMath',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '14',
            },
          ]}
          label="Does this child"
          labelBold="difficulty with math"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehDifficultyMathDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="15"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="ehPoorGradesYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehPoorGrades',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '16',
            },
            {
              cardName: 'ehPoorGrades',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '17',
            },
          ]}
          label="Gets"
          labelBold="poor"
          labelLast="grades"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehPoorGradesDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="18"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <div className="flex">
        <Field
          name="ehSpecialEdYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehSpecialEd',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '19',
            },
            {
              cardName: 'ehSpecialEd',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '20',
            },
          ]}
          label="Has been"
          labelBold="tested"
          labelLast="for special education"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehSpecialEdDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="21"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <Field
        name="ehSpecialEdCurrYesNo"
        component={RadioCard}
        cardInfo={[
          {
            cardName: 'ehSpecialEdCurrent',
            cardKey: 'A',
            cardLabel: 'Yes',
            tabOrder: '22',
          },
          {
            cardName: 'ehSpecialEdCurrent',
            cardKey: 'B',
            cardLabel: 'No',
            tabOrder: '23',
          },
        ]}
        label="Currently is placed in"
        labelBold="special education"
        classes="question question--thumbless grid__half"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          alt="Question mark"
          component={TextQuestion}
          label="If yes, what type of"
          labelBold="class"
          name="ehTypeSpecialEdClass"
          src="img/icons-question-mark-plain.svg"
          tabOrder="24"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
        <Field
          alt="Question mark"
          component={TextQuestion}
          label=""
          labelBold="Hours"
          labelLast="per day"
          name="ehTypeSpecialEdHours"
          src="img/icons-stopwatch.svg"
          tabOrder="25"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <Field
        name="ehDislikesSchoolYesNo"
        component={RadioCard}
        cardInfo={[
          {
            cardName: 'ehDislikesSchool',
            cardKey: 'A',
            cardLabel: 'Yes',
            tabOrder: '26',
          },
          {
            cardName: 'ehDislikesSchool',
            cardKey: 'B',
            cardLabel: 'No',
            tabOrder: '27',
          },
        ]}
        label=""
        labelBold="Dislikes"
        labelLast="going to school"
        classes="question question--thumbless grid__half"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          name="ehAbsentYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehAbsent',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '28',
            },
            {
              cardName: 'ehAbsent',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '29',
            },
          ]}
          label="Is"
          labelBold="absent"
          labelLast="from school frequently"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehAbsentDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="30"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>
      <Field
        alt="Graduation cap"
        component={TextQuestion}
        label="If in"
        labelBold="high school"
        labelLast="when will this child graduate"
        name="ehGraduateHsDesc"
        src="img/icons-graduation-cap.svg"
        tabOrder="31"
        type="date"
        classes="question"
        disabled={disabled}
      />
      <div className="flex">
        <Field
          name="ehTeacherConcernsYesNo"
          component={RadioCard}
          cardInfo={[
            {
              cardName: 'ehTeacherConcerns',
              cardKey: 'A',
              cardLabel: 'Yes',
              tabOrder: '32',
            },
            {
              cardName: 'ehTeacherConcerns',
              cardKey: 'B',
              cardLabel: 'No',
              tabOrder: '33',
            },
          ]}
          label="Do you have any concerns about the"
          labelBold="quality"
          labelLast="of this child's teachers"
          classes="question question--thumbless grid__half"
          disabled={disabled}
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="ehTeacherConcernsDesc"
          src="img/icons-speech-bubble.svg"
          tabOrder="34"
          type="input"
          classes="question grid__half"
          disabled={disabled}
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};

WizardForm41Page.propTypes = {
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleDisable: PropTypes.func,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm41Page);
