import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { Field, reduxForm, FieldArray } from "redux-form";
import validate from "../validate";
import TextQuestion from "../components/TextQuestion";
import TextQuestionAutoCalculate from "../components/TextQuestion/TextQuestionAutoCalculate";
import FormCardTextDate from "../components/Card/FormCard/FormCardTextDate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import RadioCard from "../components/Card/RadioCard/RadioCard";

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

class WizardForm02Page extends Component {
  calculateAge = event => {
    let birthdate = event.target.value;
    if (birthdate !== "" && birthdate.length >= 4) {
      let birthYear = event.target.value.slice(0, 4);
      let birthMonth = event.target.value.slice(5, 7);
      let d = new Date();
      let currYear = d.getFullYear();
      let currMonth = d.getMonth() + 1;
      let age = "";
      //let x = currMonth < birthMonth;
      // console.log(`
      //   Variables
      //   =========
      //   birthMonth = ${birthMonth}
      //   birthYear = ${birthYear}
      //   currMonth = ${currMonth}
      //   currYear = ${currYear}
      //   currMonth - birthMonth = ${x}
      // `);
      if (currMonth < birthMonth) {
        age = parseFloat(currYear - birthYear - 1);
      } else {
        age = parseFloat(currYear - birthYear);
      }

      this.props.change("diAge", age);
      store.dispatch({
        type: "ADD_PATIENT_AGE",
        payload: age
      });
    } else {
      return false;
    }
  };

  makeNumber = event => {
    // console.log(
    //   "makeNumber function event and value of age, ",
    //   event,
    //   event.target.value
    // );
    // const input = event.target;
    // input.value = parseFloat(event.target.value);
    event.preventDefault();
  };

  render() {
    const { handleSubmit } = this.props;
    const { calculateAge, makeNumber } = this;
    console.log("Auto age should be, ", this.props.age);
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Demographics" titleRegular="info" />
        <div className="flex">
          <Field
            alt="Person"
            component={TextQuestion}
            label="What is the patient's"
            labelBold="name"
            name="diName"
            src="img/icons-happy-face-name.svg"
            tabOrder="1"
            type="input"
            classes="question grid__half"
            //copyForward="true"
          />
          <Field
            alt="Building"
            component={TextQuestion}
            label="Where were they"
            labelBold="evaluated"
            name="diEvaluationlocation"
            src="img/icons-office-building.svg"
            tabOrder="2"
            type="input"
            classes="question grid__half"
          />
        </div>
        <div className="flex">
          <Field
            alt="Cake"
            component={TextQuestion}
            label="What is their"
            labelBold="date of birth"
            name="diDateofbirth"
            src="img/icons-birthday-cake.svg"
            tabOrder="3"
            type="date"
            classes="question grid__half"
            onChange={calculateAge}
          />
          <Field
            component={TextQuestionAutoCalculate}
            label="What is their"
            labelBold="age"
            name="diAge"
            tabOrder="4"
            type="number"
            classes="question grid__half"
            age={this.props.age}
            readOnly="readonly"
            onBlur={makeNumber}
            //copyForward="true"
          />
        </div>
        <div className="flex">
          <Field
            alt="School"
            component={TextQuestion}
            label="Name of"
            labelBold="school"
            labelLast="attending"
            name="diSchool"
            src="img/icons-school.svg"
            tabOrder="5"
            type="input"
            classes="question grid__half"
          />
          <Field
            component={TextQuestion}
            label="What"
            labelBold="grade"
            labelLast="are they in"
            name="diGrade"
            type="input"
            tabOrder="6"
            classes="question grid__half"
          />
        </div>
        <div className="flex">
          <div className="question grid__half">
            <Field
              name="diGenderGroup"
              component={RadioCard}
              cardInfo={[
                {
                  thumbnail: "img/icons-woman-generic.svg",
                  thumbnailAlt: "Girl",
                  cardName: "diGender",
                  cardKey: "A",
                  cardLabel: "Girl",
                  tabOrder: "9"
                },
                {
                  thumbnail: "img/icons-man-generic.svg",
                  thumbnailAlt: "Boy",
                  cardName: "diGender",
                  cardKey: "B",
                  cardLabel: "Boy",
                  tabOrder: "10"
                }
              ]}
              label="What is the"
              labelBold="gender"
              labelLast="of this child"
              classes="question question--thumb"
            />
          </div>
          <div className="question grid__half">
            <Field
              name="diHandGroup"
              component={RadioCard}
              cardInfo={[
                {
                  thumbnail: "img/icons-hand-left.svg",
                  thumbnailAlt: "Left hand",
                  cardName: "diHandedness",
                  cardKey: "A",
                  cardLabel: "Left",
                  tabOrder: "13"
                },
                {
                  thumbnail: "img/icons-hand-right.svg",
                  thumbnailAlt: "Right hand",
                  cardName: "diHandedness",
                  cardKey: "B",
                  cardLabel: "Right",
                  tabOrder: "14"
                }
              ]}
              label="Which"
              labelBold="hand"
              labelLast="is dominant"
              classes="question question--thumb"
            />
          </div>
        </div>
        <div>
          <div className="question">
            <Field
              alt="Person"
              component={TextQuestion}
              label="What is the"
              labelBold="name"
              labelLast="of the evaluator"
              name="diEvaluator"
              src="img/icons-happy-face-name.svg"
              tabOrder="14"
              type="text"
              classes="question"
            />
          </div>
          {/* <div className="question grid__third">
            <Field
              alt="Date"
              component={TextQuestion}
              label="What's the"
              labelBold="date(s)"
              labelLast="of testing"
              name="di-dateoftesting"
              src="img/icons-date-selected.svg"
              tabOrder="13"
              type="date"
              classes="question"
            />
          </div> */}
        </div>
        <div>
          <label>
            What are the <strong>date(s)</strong> testing was administered?
          </label>
        </div>
        <FieldArray
          name="diDateoftesting"
          component={FormCardTextDate}
          buttonText="Add Date"
        />
        <Button onClick={handleSubmit} buttonLabel="OK" />
      </form>
    );
  }
}

WizardForm02Page = connect(state => ({
  age: state.patientAge
}))(WizardForm02Page);

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm02Page);
