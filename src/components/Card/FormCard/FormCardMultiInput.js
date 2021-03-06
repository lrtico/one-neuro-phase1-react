import React, { Component } from 'react';
import { Field } from 'redux-form';
import './formCard.css';
import '../../../app.css';
import '../../ButtonToggle/buttonToggleStyles.css';
import MaterialIcon from 'react-google-material-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RequiredText from '../../Required/RequiredText';
import {
  normalizePhone,
  normalizeCapitalizeWords,
} from '../../../utils/Normalize';

class FormCardMultiInput extends Component {
  handleTick = event => {
    const tar = event.currentTarget;
    const addDeleteEl = tar.children[1];
    const requiredText = tar.nextSibling;
    tar.parentNode.classList.toggle('question__checkbox--selected');
    const val = tar.parentNode.children[1].value;
    if (val !== '') {
      tar.parentNode.classList.add('question__checkbox--selected');
      addDeleteEl.classList.add('question__key-text--visible');
      requiredText.classList.remove('question__required-text--visible');
    } else {
      tar.parentNode.classList.remove('question__checkbox--selected');
      addDeleteEl.classList.remove('question__key-text--visible');
      requiredText.classList.add('question__required-text--visible');
    }
  };

  handleKeyUp = event => {
    console.log('Key pressed = ', event.currentTarget.value);
    const tar = event.currentTarget;
    const val = tar.value;
    const addDeleteEl = tar.parentNode.querySelector('.question__key-label')
      .children[1];
    if (val !== '') {
      tar.parentNode.classList.add('question__checkbox--selected');
      addDeleteEl.classList.add('question__key-text--visible');
    } else {
      tar.parentNode.classList.remove('question__checkbox--selected');
      addDeleteEl.classList.remove('question__key-text--visible');
    }
  };

  handleDelete = event => {
    const tar = event.currentTarget;
    const val = tar.parentNode.parentNode.parentNode.children[1].value;
    console.log('value = ', val);
    const addDeleteEl = tar.parentNode;
    const checkboxes = tar.parentNode.parentNode.parentNode.querySelectorAll(
      'input',
    );
    // console.log("Checkboxes", checkboxes);
    if (val !== '') {
      addDeleteEl.classList.remove('question__checkbox--selected');
      addDeleteEl.classList.remove('question__key-text--visible');
      tar.parentNode.parentNode.parentNode.children[1].value = '';
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
      });
      this.props.fields.pop(event);
    }
  };

  addRecord = event => {
    const button = event.currentTarget;
    this.props.fields.push({});
    button.classList.toggle('toggleVis--active');
  };

  // handleNormalize = (normalize, value) => {
  //   console.log("Make normalize logic go now!");
  //   console.log("Value of passed in input.normalize val, ", normalize);
  //   if (normalize) {
  //     return normalizePhone(value);
  //   } else {
  //     return false;
  //   }
  // };

  render() {
    const minHeight = {
      minHeight: '285px',
    };
    const { disabled } = this.props;
    // console.log("FormCardMultiInput's props received, ", this.props);
    return (
      <div className={disabled ? 'question content--disabled' : 'question'}>
        <div className="toggleVis add-button" onClick={this.addRecord}>
          <div className="btn__hover" />
          <button
            type="button"
            className="flex--col-vertical-center flex--wrap"
            disabled={disabled ? true : false}
          >
            <span>New Record</span>
          </button>
        </div>
        <ul className="question__cards flex--wrap" style={minHeight}>
          <div
            className={
              disabled
                ? 'question__choice--radio-shield content--disabled'
                : 'question__choice--radio-shield'
            }
          />
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeOut={10000}
            transitionLeaveTimeOut={5000}
          >
            {this.props.fields.map((multiInput, index) => (
              <li
                key={index}
                className="question__card question__form-card flex--col flex--center-vertical flex--space-between"
              >
                <div className="question__tick-wrap">
                  <MaterialIcon icon="check" />
                </div>
                {this.props.fieldInputs.map(input => (
                  <Field
                    name={`${multiInput}.${input.inputName}`}
                    type={input.inputType}
                    component="input"
                    label={input.inputLabel}
                    className={input.inputClasses}
                    placeholder={input.inputPlaceholder}
                    onKeyUp={this.handleKeyUp}
                    normalize={
                      input.normalizePhone
                        ? normalizePhone
                        : input.normalizeCapitalizeWords
                        ? normalizeCapitalizeWords
                        : null
                    }
                  />
                ))}
                <div
                  className="question__key-label flex flex--center-vertical"
                  onClick={this.handleTick}
                >
                  <div className="question__key">
                    <span>{index + 1}</span>
                  </div>
                  <div className="question__key-text">
                    <span>Add</span>
                    <span onClick={this.handleDelete}>Delete</span>
                  </div>
                </div>
                <RequiredText
                  requiredText="Enter required info above :)"
                  customRequiredTextClass="question__required-text"
                />
                <div className="question__bg" />
              </li>
            ))}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default FormCardMultiInput;
