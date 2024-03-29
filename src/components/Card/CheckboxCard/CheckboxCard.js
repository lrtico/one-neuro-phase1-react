import React from 'react';
import { Field } from 'redux-form';
import './checkboxCardStyles.css';
import '../../../app.css';
import '../../Card/cardStyles.css';
import { randomId } from '../../../utils/Helpers';
import store from '../../../store';

function handleTick(event) {
  const tar = event.currentTarget;
  console.log('handleTick curr tar ', tar);
  //tar.classList.toggle("question__checkbox--selected");
}

// function handleCheckbox(event) {
//   const tar = event.currentTarget;
//   tar.parentNode.parentNode.firstChild.setAttribute("checked", "checked");
//   tar.parentNode.parentNode.firstChild.value = true;
// }

const handleRecommendation = (name, i) => {
  console.log(`Make ${name} ${i} recommendation go now!`);
  store.dispatch({
    type: 'ADD_RECOMMENDATION',
    payload: name,
  });
};


const CheckboxCard = ({
  label,
  labelBold,
  labelLast,
  tabOrder,
  checkboxInfo,
  classes,
  thumbnail,
  thumbnailAlt,
  columnHeader,
  noQuestionMark,
  disabled,
  ...props,
  meta: { touched, error }
}) => {
  console.log('checkboxinfo props, ', checkboxInfo);
  return (
    <div className={disabled ? `${classes} content--disabled` : classes}>
      <h4
        className="question__col-header"
        hidden={columnHeader == null ? true : false}
      >
        {columnHeader}
      </h4>
      <label hidden={label == null ? true : false}>
        {label} <strong>{labelBold}</strong> {labelLast}{noQuestionMark ? null : '?'}
      </label>
      <div className="question__input">
        <div className="question__multiple-choice">
          Select all that apply please
        </div>
        {/* Checkboxes */}
        <ul className="question__choices question__checkboxCard flex--wrap">
          <div className={
              disabled
                ? 'question__choice--radio-shield content--disabled'
                : 'question__choice--radio-shield'
            } />
          {checkboxInfo.map((card, i) => (
            <li
              key={randomId()}
              className={
                card.liClasses == null
                  ? 'question__choice'
                  : `${card.liClasses} question__choice`
              }
              tabIndex={card.tabOrder}
              onClick={handleTick}
            >
              <Field
                name={card.cardName}
                type="checkbox"
                component="input"
                onClick={
                  card.recommendation
                    ? () => handleRecommendation(card.cardLabel, i)
                    : null
                }
              />
              <span className="question__tick--bg" />
              <span className="question__tick" />
              {/* <div className="question__tick-wrap">
                <MaterialIcon icon="check" />
              </div> */}
              {thumbnail === undefined ? null : (
                <div className="question__image-wrap">
                  <img src={thumbnail} alt={thumbnailAlt} />
                </div>
              )}
              <div className="question__text-wrap flex flex--center-vertical">
                <div className="question__label">
                  <div className="question__letter">
                    <span>{card.cardKey}</span>
                  </div>
                </div>
                <div className="question__text-label">{card.cardLabel}</div>
                {/* <Field
                  name="test"
                  component="input"
                  type="text"
                  onClick={handleCheckbox}
                /> */}
              </div>
              <div className="question__bg" />
            </li>
          ))}
          {touched && error && <span>{error}</span>}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxCard;
