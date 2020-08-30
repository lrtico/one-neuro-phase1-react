import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import './formCard.css';
import '../../../app.css';
import '../cardStyles.css';
import MaterialIcon from 'react-google-material-icons';
import RequiredText from '../../Required/RequiredText';
import { randomId } from '../../../utils/Helpers';
import {
  onlyNums,
  normalizeCapitalizeWords,
  normalizePhone,
} from '../../../utils/Normalize';

function handleTextboxTickInputs(event) {
  const tar = event.currentTarget;
  const addDeleteEl = tar.parentNode.nextSibling.children[1];
  const requiredText = tar.parentNode.nextSibling.nextSibling;
  const val = tar.value;
  console.log('input value onBlur before hasValue call', val);
  // Check both inputs values
  // If both are "", remove the class
  // Else add the class
  const inputs = tar.parentNode.querySelectorAll('input');
  const makeArr = Array.from(inputs);
  let hasValue = false;
  makeArr.forEach(input => {
    if (input.value !== '') {
      hasValue = true;
    }
  });

  if (hasValue) {
    tar.parentNode.parentNode.classList.add('question__checkbox--selected');
    addDeleteEl.classList.add('question__key-text--visible');
    requiredText.classList.remove('question__required-text--visible');
  } else {
    tar.parentNode.parentNode.classList.remove('question__checkbox--selected');
    addDeleteEl.classList.remove('question__key-text--visible');
  }
}
function handleTextboxTick(event) {
  const tar = event.currentTarget;
  const addDeleteEl = tar.nextSibling.children[1];
  const requiredText = tar.nextSibling.nextSibling;
  const val = tar.value;
  if (val !== '') {
    tar.parentNode.classList.add('question__checkbox--selected');
    addDeleteEl.classList.add('question__key-text--visible');
    requiredText.classList.remove('question__required-text--visible');
  } else {
    tar.parentNode.classList.remove('question__checkbox--selected');
    addDeleteEl.classList.remove('question__key-text--visible');
  }
}

function handleRequired(event) {
  const tar = event.currentTarget;
  const requiredText = tar.nextSibling;
  const val = tar.parentNode.querySelector('input').value;
  if (val !== '') {
    requiredText.classList.remove('question__required-text--visible');
  } else {
    requiredText.classList.add('question__required-text--visible');
  }
}

function handleDelete(event) {
  event.stopPropagation();
  const tar = event.currentTarget;
  const val = tar.parentNode.parentNode.previousSibling.value;
  const addDeleteEl = tar.parentNode;
  console.log('input = ', tar.parentNode.parentNode.previousSibling.value);
  if (val !== '') {
    addDeleteEl.parentNode.parentNode.classList.remove(
      'question__checkbox--selected',
    );
    addDeleteEl.classList.remove('question__key-text--visible');
    tar.parentNode.parentNode.previousSibling.value = '';
  }
  document
    .querySelector('.question__required-text')
    .classList.remove('question__required-text--visible');
}

const FormCardStacked = ({
  label,
  labelBold,
  labelLast,
  cardInfo,
  classes,
  disabled,
  meta: { touched, error },
}) => {
  return (
    <div className={disabled ? `${classes} content--disabled` : classes}>
      <label>
        {label} <strong>{labelBold}</strong> {labelLast}?
      </label>
      <div className="question__multiple-choice">
        Select all that apply please
      </div>
      {/* Cards */}
      <ul className="question__cards flex--wrap flex--stretch-vertical">
        <div
          className={
            disabled
              ? 'question__choice--radio-shield content--disabled'
              : 'question__choice--radio-shield'
          }
        />
        {cardInfo.map((card, index) => (
          <li
            key={randomId()}
            className="question__card question__form-card flex--col question__card--vertical-center flex--center-vertical"
            tabIndex={card.tabOrder}
          >
            <div className="question__tick-wrap">
              <MaterialIcon icon="check" />
            </div>
            {card.thumbnail === undefined ? null : (
              <div className="question__image-wrap">
                <img src={card.thumbnail} alt={card.thumbnailAlt} />
              </div>
            )}
            <label className="cardLabel">{card.cardLabel}</label>
            {card.cardFloat ? (
              <div className="question__form-card__inline-inputs">
                <Field
                  name={card.card1Name}
                  component="input"
                  type={undefined ? 'text' : card.card1Type}
                  className="cardTextInput"
                  onKeyUp={handleTextboxTickInputs}
                  normalize={card.normalizeOnlyNums ? onlyNums : null}
                />
                <Field
                  name={card.card2Name}
                  component="input"
                  type={undefined ? 'text' : card.card2Type}
                  className="cardTextInput"
                  onKeyUp={handleTextboxTickInputs}
                  normalize={card.normalizeOnlyNums ? onlyNums : null}
                />
                <div className="question__form-card__inline-inputs__label">
                  {card.card1Placeholder}
                </div>
                <div className="question__form-card__inline-inputs__label">
                  {card.card2Placeholder}
                </div>
              </div>
            ) : (
              <Field
                name={card.cardName}
                component="input"
                type={undefined ? 'text' : card.cardType}
                value={undefined ? null : card.cardValue}
                min={undefined ? null : card.cardMinValue}
                className="cardTextInput"
                placeholder={card.cardPlaceholder}
                onKeyUp={handleTextboxTick}
                normalize={
                  card.normalizePhone
                    ? normalizePhone
                    : card.normalizeCapitalizeWords
                    ? normalizeCapitalizeWords
                    : null
                }
              />
            )}

            <div
              className="question__key-label flex flex--center-vertical"
              onClick={handleRequired}
            >
              <div className="question__key">
                <span>{index + 1}</span>
              </div>
              <div className="question__key-text">
                <span>Add</span>
                <span onClick={handleDelete}>Delete</span>
              </div>
            </div>
            <RequiredText
              requiredText="Enter required info above :)"
              customRequiredTextClass="question__required-text"
            />
            <div className="question__bg" />
          </li>
        ))}
        {touched && error && <span>{error}</span>}
      </ul>
    </div>
  );
};

FormCardStacked.propTypes = {
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  label: PropTypes.string,
  labelBold: PropTypes.string,
  labelLast: PropTypes.string,
  cardInfo: PropTypes.array,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

export default FormCardStacked;
