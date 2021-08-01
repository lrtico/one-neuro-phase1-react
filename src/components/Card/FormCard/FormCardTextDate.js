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

class FormCardTextDate extends Component {
  handleTick = (event) => {
    const tar = event.currentTarget;
    const val = tar.parentNode.children[1].value;
    const requiredText = tar.nextSibling;
    const addDeleteEl = tar.children[1];

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
    // console.log('Key pressed = ', event.currentTarget.value);
    const tar = event.currentTarget;
    const val = tar.value;
    const requiredText = tar.parentNode.querySelector('.question__required-text');
    const addDeleteEl = tar.parentNode.querySelector('.question__key-label').children[1];

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
    const minHeight = {
      minHeight: '200px',
    };
    console.log('Page 5 props passed from parent, ', this.props);
    const { buttonText, disabled, fields } = this.props;
    return (
      <div className={disabled ? 'question content--disabled' : 'question'}>
        <div className="toggleVis add-button" onClick={this.addRecord}>
          <div className="btn__hover" />
          <button
            type="button"
            className="flex--col-vertical-center flex--wrap"
            disabled={disabled}
          >
            <span>{buttonText || 'New Record'}</span>
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
            {fields.map((recordsReviewed, index) => (
              <li
                key={index}
                className="question__card question__form-card flex--col flex--center-vertical flex--space-between"
              >
                <div className="question__tick-wrap">
                  <MaterialIcon icon="check" />
                </div>
                <Field
                  name={`${recordsReviewed}.title`}
                  type="text"
                  component="input"
                  label="Title"
                  className="cardTextInput"
                  placeholder="Type a title"
                  onKeyUp={this.handleKeyUp}
                />
                <Field
                  name={`${recordsReviewed}.date`}
                  type="date"
                  component="input"
                  label="Date"
                  className="cardTextInput"
                  onKeyUp={this.handleKeyUp}
                />
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
                  requiredText="Please add a title and date"
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

FormCardTextDate.propTypes = {
  fields: PropTypes.object,
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FormCardTextDate;
