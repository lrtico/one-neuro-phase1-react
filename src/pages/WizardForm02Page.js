import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import TextQuestion from "../components/TextQuestion";
import TextQuestionAutoCalculate from "../components/TextQuestion/TextQuestionAutoCalculate";
import NormalizePhoneInput from "../components/TextQuestion/NormalizePhoneInput";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import { normalizePhone } from "../utils/Normalize";

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
        age = currYear - birthYear - 1;
      } else {
        age = currYear - birthYear;
      }

      this.props.change("di-age", age);
      store.dispatch({
        type: "ADD_PATIENT_AGE",
        payload: age
      });
    } else {
      return false;
    }
  };

  render() {
    const { handleSubmit } = this.props;
    const { calculateAge } = this;
    console.log("Auto age should be, ", this.props.age);
    return (
      <form className="col" onSubmit={handleSubmit}>
        <SectionTitle titleBold="Demographics" titleRegular="info" />
        <div className="flex">
          <Field
            alt="Person"
            component={TextQuestion}
            label="What's the patient's"
            labelBold="name"
            name="di-name"
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
            name="di-evaluationlocation"
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
            label="What's their"
            labelBold="date of birth"
            name="di-dateofbirth"
            src="img/icons-birthday-cake.svg"
            tabOrder="3"
            type="date"
            classes="question grid__half"
            onChange={calculateAge}
          />
          <Field
            component={TextQuestionAutoCalculate}
            label="What's their"
            labelBold="age"
            name="di-age"
            tabOrder="4"
            type="input"
            classes="question grid__half"
            age={this.props.age}
            //copyForward="true"
          />
        </div>
        <div className="flex">
          <Field
            alt="School"
            component={TextQuestion}
            label="What school did they attend"
            name="di-school"
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
            name="di-grade"
            type="input"
            tabOrder="6"
            classes="question grid__half"
          />
        </div>
        <div className="flex">
          <Field
            alt="Person"
            component={TextQuestion}
            label="What's their parent's name"
            name="di-parent-name"
            type="input"
            src="img/icons-happy-face-name.svg"
            tabOrder="7"
            classes="question grid__half"
          />
          <Field
            alt="Phone"
            component={NormalizePhoneInput}
            label="What's their parent's"
            labelBold="phone"
            name="di-parent-phone"
            src="img/icons-phone.svg"
            type="input"
            tabOrder="8"
            classes="question grid__half"
            maxCharacters={14}
            normalize={normalizePhone}
          />
        </div>
        <div className="flex">
          <div>
            <Field
              name="di-gender-group"
              component={RadioCard}
              cardInfo={[
                {
                  thumbnail: "img/icons-woman-generic.svg",
                  thumbnailAlt: "Girl",
                  cardName: "di-gender",
                  cardKey: "A",
                  cardLabel: "Girl",
                  tabOrder: "9"
                },
                {
                  thumbnail: "img/icons-man-generic.svg",
                  thumbnailAlt: "Boy",
                  cardName: "di-gender",
                  cardKey: "B",
                  cardLabel: "Boy",
                  tabOrder: "10"
                }
              ]}
              label="What's the"
              labelBold="gender"
              labelLast="of this child"
              classes="question question--thumb grid__half"
            />
          </div>
          <div>
            <Field
              name="di-hand-ing"
              component={RadioCard}
              cardInfo={[
                {
                  thumbnail: "img/icons-hand-left.svg",
                  thumbnailAlt: "Left hand",
                  cardName: "di-handedness",
                  cardKey: "A",
                  cardLabel: "Left",
                  tabOrder: "13"
                },
                {
                  thumbnail: "img/icons-hand-right.svg",
                  thumbnailAlt: "Right hand",
                  cardName: "di-handedness",
                  cardKey: "B",
                  cardLabel: "Right",
                  tabOrder: "14"
                }
              ]}
              label="Which"
              labelBold="hand"
              labelLast="is dominant"
              classes="question question--thumb grid__half"
            />
          </div>
        </div>
        <div className="question grid__half">
          <Field
            alt="Calendar"
            component={TextQuestion}
            label="What's the"
            labelBold="date(s)"
            labelLast="of testing"
            name="di-dateoftesting"
            src="img/icons-calendar-large.svg"
            tabOrder="13"
            type="date"
            classes="question"
          />
        </div>
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
