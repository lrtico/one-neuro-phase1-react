/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import './formCard.css';
import '../../../app.css';
import '../../ButtonToggle/buttonToggleStyles.css';
import MaterialIcon from 'react-google-material-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RequiredText from '../../Required/RequiredText';

class FormCardBrotherSister extends Component {
  handleTick = (event) => {
    const tar = event.currentTarget;
    const addDeleteEl = tar.children[1];
    const requiredText = tar.nextSibling;
    const val = tar.parentNode.children[1].value;

    console.log('val =', tar.parentNode.children[1]);

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

  handleKeyUp = (event) => {
    console.log('Key pressed = ', event.currentTarget);
    const tar = event.currentTarget;
    const val = tar.value;
    const addDeleteEl = tar.parentNode.querySelector('.question__key-label').children[1];
    const requiredText = tar.parentNode.querySelector('.question__required-text');
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

  handleDelete = (event) => {
    const { fields } = this.props;
    const tar = event.currentTarget;
    const val = tar.parentNode.parentNode.parentNode.children[1].value;
    console.log('value = ', val);
    const addDeleteEl = tar.parentNode;
    const checkboxes = tar.parentNode.parentNode.parentNode.querySelectorAll('input');
    // console.log("Checkboxes", checkboxes);
    if (val !== '') {
      addDeleteEl.classList.remove('question__checkbox--selected');
      addDeleteEl.classList.remove('question__key-text--visible');
      tar.parentNode.parentNode.parentNode.children[1].value = '';
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      fields.pop(event);
    }
  };

  addRecord = (event) => {
    const { fields } = this.props;
    const button = event.currentTarget;
    fields.push({});
    button.classList.toggle('toggleVis--active');
  };

  render() {
    const minHeight = { minHeight: '380px' };
    const { disabled, fields } = this.props;
    console.log('FormCardBrotherSister props =', this.props);
    return (
      <div className={disabled ? 'question content--disabled' : 'question'}>
        <div className="toggleVis add-button" onClick={this.addRecord}>
          <div className="btn__hover" />
          <button
            type="button"
            className="flex--col-vertical-center flex--wrap"
            disabled={!!disabled}
          >
            <span>New Record</span>
          </button>
        </div>

        <ul className="question__cards question__cards--none-visible flex--wrap" style={minHeight}>
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
            {fields.map((card, index) => (
              <li
                key={index + 1}
                className="question__card question__form-card flex--col flex--center-vertical flex--space-between"
              >
                <div className="question__tick-wrap">
                  <MaterialIcon icon="check" />
                </div>
                <Field
                  name={`${card}.age`}
                  type="text"
                  component="input"
                  className="cardTextInput"
                  placeholder="Age"
                  onKeyUp={this.handleKeyUp}
                />
                <div className="question-card__radio">
                  <Field
                    name={`${card}.relationship`}
                    type="radio"
                    component="input"
                    value="Sister"
                    className="radio-visible"
                    id={`bs-choice-${index}-${index + 2}`}
                  />
                  <label htmlFor={`bs-choice-${index}-${index + 2}`}>Sister</label>
                </div>
                <div className="question-card__radio">
                  <Field
                    name={`${card}.relationship`}
                    type="radio"
                    component="input"
                    value="Brother"
                    className="radio-visible"
                    id={`bs-choice-${index}-${index + 3}`}
                  />
                  <label htmlFor={`bs-choice-${index}-${index + 3}`}>Brother</label>
                </div>
                <div className="question-card__radio">
                  <Field
                    name={`${card}.home`}
                    type="radio"
                    component="input"
                    value="Yes"
                    className="radio-visible"
                    id={`bs-choice-${index}-${index + 4}`}
                  />
                  <label htmlFor={`bs-choice-${index}-${index + 4}`}>Lives at home</label>
                </div>
                <div className="question-card__radio">
                  <Field
                    name={`${card}.home`}
                    type="radio"
                    component="input"
                    value="No"
                    className="radio-visible"
                    id={`bs-choice-${index}-${index + 5}`}
                  />
                  <label htmlFor={`bs-choice-${index}-${index + 5}`}>Not at home</label>
                </div>
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
                  requiredText="Enter all info above :)"
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

FormCardBrotherSister.propTypes = {
  fields: PropTypes.object,
  disabled: PropTypes.bool,
};

export default FormCardBrotherSister;
