import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";
import RadioCard from "./components/Card/RadioCard/RadioCard";
import TextQuestion from "./components/TextQuestion";

const WizardForm41Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Educational" titleRegular="history" />
      <div className="flex">
        <SectionSubHeader subHeader="Elementary/High School" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="eh-changed-schools-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-changed-schools",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "1"
            },
            {
              cardName: "eh-changed-schools",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "2"
            }
          ]}
          label="Changed schools"
          labelBold="for reasons"
          labelLast="other than normal academic progression"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-changed-schools-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="3"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="eh-repeat-grade-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-repeat-grade",
              cardKey: "A",
              cardLabel: "Yes ",
              tabOrder: "4"
            },
            {
              cardName: "eh-repeat-grade",
              cardKey: "B",
              cardLabel: "No ",
              tabOrder: "5"
            }
          ]}
          label="Has been"
          labelBold="retained"
          labelLast="a grade in school"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-grade-repeat-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="6"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="eh-grade-skip-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-grade-skip",
              cardKey: "A",
              cardLabel: "Yes  ",
              tabOrder: "7"
            },
            {
              cardName: "eh-grade-skip",
              cardKey: "B",
              cardLabel: "No  ",
              tabOrder: "8"
            }
          ]}
          label="Has"
          labelBold="skipped"
          labelLast="a grade in school"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-grade-skip-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="9"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="eh-difficulty-reading-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-difficulty-reading",
              cardKey: "A",
              cardLabel: "Yes   ",
              tabOrder: "10"
            },
            {
              cardName: "eh-difficulty-reading",
              cardKey: "B",
              cardLabel: "No   ",
              tabOrder: "11"
            }
          ]}
          label="Does this child have"
          labelBold="difficulty reading"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-difficulty-reading-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="12"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="eh-difficulty-math-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-difficulty-math",
              cardKey: "A",
              cardLabel: "Yes    ",
              tabOrder: "13"
            },
            {
              cardName: "eh-difficulty-math",
              cardKey: "B",
              cardLabel: "No    ",
              tabOrder: "14"
            }
          ]}
          label="Does this child"
          labelBold="difficulty with math"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-difficulty-math-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="15"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="eh-poor-grades-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-poor-grades",
              cardKey: "A",
              cardLabel: "Yes     ",
              tabOrder: "16"
            },
            {
              cardName: "eh-poor-grades",
              cardKey: "B",
              cardLabel: "No     ",
              tabOrder: "17"
            }
          ]}
          label="Gets"
          labelBold="poor"
          labelLast="grades"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-poor-grades-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="18"
          type="input"
          classes="question grid__half"
        />
      </div>
      <div className="flex">
        <Field
          name="eh-special-ed-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-special-ed",
              cardKey: "A",
              cardLabel: "Yes      ",
              tabOrder: "19"
            },
            {
              cardName: "eh-special-ed",
              cardKey: "B",
              cardLabel: "No       ",
              tabOrder: "20"
            }
          ]}
          label="Has been"
          labelBold="tested"
          labelLast="for special education"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-special-ed-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="21"
          type="input"
          classes="question grid__half"
        />
      </div>
      <Field
        name="eh-special-ed-curr-yes-no"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "eh-special-ed-current",
            cardKey: "A",
            cardLabel: "Yes       ",
            tabOrder: "22"
          },
          {
            cardName: "eh-special-ed-current",
            cardKey: "B",
            cardLabel: "No        ",
            tabOrder: "23"
          }
        ]}
        label="Currently is placed in"
        labelBold="special education"
        classes="question question--thumbless grid__half"
      />
      <div className="flex">
        <Field
          alt="Question mark"
          component={TextQuestion}
          label="If yes, what type of"
          labelBold="class"
          name="eh-type-special-ed-class"
          src="img/icons-question-mark-plain.svg"
          tabOrder="24"
          type="input"
          classes="question grid__half"
        />
        <Field
          alt="Question mark"
          component={TextQuestion}
          label=""
          labelBold="Hours"
          labelLast="per day"
          name="eh-type-special-ed-hours"
          src="img/icons-stopwatch.svg"
          tabOrder="25"
          type="input"
          classes="question grid__half"
        />
      </div>
      <Field
        name="eh-dislikes-school-yes-no"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "eh-dislikes-school",
            cardKey: "A",
            cardLabel: "Yes        ",
            tabOrder: "26"
          },
          {
            cardName: "eh-dislikes-school",
            cardKey: "B",
            cardLabel: "No         ",
            tabOrder: "27"
          }
        ]}
        label=""
        labelBold="Dislikes"
        labelLast="going to school"
        classes="question question--thumbless grid__half"
      />
      <div className="flex">
        <Field
          name="eh-absent-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-absent",
              cardKey: "A",
              cardLabel: "Yes          ",
              tabOrder: "28"
            },
            {
              cardName: "eh-absent",
              cardKey: "B",
              cardLabel: "No          ",
              tabOrder: "29"
            }
          ]}
          label="Is"
          labelBold="absent"
          labelLast="from school frequently"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-absent-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="30"
          type="input"
          classes="question grid__half"
        />
      </div>
      <Field
        alt="Graduation cap"
        component={TextQuestion}
        label="If in"
        labelBold="high school"
        labelLast="when will this child graduate"
        name="eh-graduate-hs-desc"
        src="img/icons-graduation-cap.svg"
        tabOrder="31"
        type="date"
        classes="question"
      />
      <div className="flex">
        <Field
          name="eh-teacher-concerns-yes-no"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "eh-teacher-concerns",
              cardKey: "A",
              cardLabel: "Yes           ",
              tabOrder: "32"
            },
            {
              cardName: "eh-teacher-concerns",
              cardKey: "B",
              cardLabel: "No            ",
              tabOrder: "33"
            }
          ]}
          label="Do you have any concerns about the"
          labelBold="quality"
          labelLast="of this child's teachers"
          classes="question question--thumbless grid__half"
        />
        <Field
          alt="Speech bubble"
          component={TextQuestion}
          label="If"
          labelBold="yes,"
          labelLast="please describe"
          name="eh-absent-desc"
          src="img/icons-speech-bubble.svg"
          tabOrder="34"
          type="input"
          classes="question grid__half"
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm41Page);
