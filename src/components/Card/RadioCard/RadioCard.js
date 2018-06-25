import React, { Component } from "react";
import "../cardStyles.css";
import "../../../app.css";
import MaterialIcon from "react-google-material-icons";
import { randomId } from "../../../utils/Helpers";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class RadioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: ""
    };
  }

  handleTick = () => {
    this.setState(prevState => {
      return { isChecked: !prevState.isChecked };
    });
  };
  render() {
    const {
      label,
      labelBold,
      labelLast,
      tabOrder,
      cardName,
      cardKey,
      cardLabel,
      cardInfo,
      classes,
      thumbnail,
      thumbnailAlt,
      meta: { touched, error }
    } = this.props;

    return (
      <div className={classes}>
        <label>
          {label} <strong>{labelBold}</strong> {labelLast}?
        </label>
        <div className="question__input">
          <div className="question__single-choice">Pick one please</div>
          {/* Radio Buttons */}
          <ul className="question__choices flex--wrap">
            {cardInfo.map(card => (
              <li
                key={randomId()}
                className={
                  this.props.ReduxValue1 === card.cardLabel ||
                  this.props.ReduxValue2 === card.cardLabel ||
                  this.props.ReduxValue3 === card.cardLabel ||
                  this.props.ReduxValue4 === card.cardLabel ||
                  this.props.ReduxValue5 === card.cardLabel ||
                  this.props.ReduxValue6 === card.cardLabel ||
                  this.props.ReduxValue7 === card.cardLabel ||
                  this.props.ReduxValue8 === card.cardLabel ||
                  this.props.ReduxValue9 === card.cardLabel ||
                  this.props.ReduxValue10 === card.cardLabel ||
                  this.props.ReduxValue11 === card.cardLabel ||
                  this.props.ReduxValue12 === card.cardLabel ||
                  this.props.ReduxValue13 === card.cardLabel ||
                  this.props.ReduxValue14 === card.cardLabel ||
                  this.props.ReduxValue15 === card.cardLabel ||
                  this.props.ReduxValue16 === card.cardLabel ||
                  this.props.ReduxValue17 === card.cardLabel ||
                  this.props.ReduxValue18 === card.cardLabel ||
                  this.props.ReduxValue19 === card.cardLabel ||
                  this.props.ReduxValue20 === card.cardLabel
                    ? "question__choice question__checkbox--selected"
                    : "question__choice"
                }
                tabIndex={card.tabOrder}
                onChange={this.handleTick}
              >
                <Field
                  name={card.cardName}
                  type="radio"
                  component="input"
                  value={card.cardLabel}
                />
                <div className="question__tick-wrap">
                  <MaterialIcon icon="check" />
                </div>
                {card.thumbnail === undefined ? null : (
                  <div className="question__image-wrap">
                    <img src={card.thumbnail} alt={card.thumbnailAlt} />
                  </div>
                )}
                <div className="question__text-wrap flex flex--center-vertical">
                  <div className="question__label">
                    <div className="question__letter">
                      <span>{card.cardKey}</span>
                    </div>
                  </div>
                  <div className="question__text-label">{card.cardLabel}</div>
                </div>
                <div className="question__bg" />
              </li>
            ))}
            {touched && error && <span>{error}</span>}
          </ul>
        </div>
      </div>
    );
  }
}

// Decorate with redux-form
RadioCard = reduxForm({
  form: "wizard" // a unique identifier for this form
})(RadioCard);

// Decorate with connect to read form values
const selector = formValueSelector("wizard"); // <-- same as form name
RadioCard = connect(state => {
  // can select values individually
  const ReduxValue1 = selector(state, "di-gender");
  const ReduxValue2 = selector(state, "di-handedness");
  const ReduxValue3 = selector(state, "paq-guardian");
  const ReduxValue4 = selector(state, "bh-stepmother");
  const ReduxValue5 = selector(state, "bh-stepfather");
  const ReduxValue6 = selector(state, "bh-other-parent-stepparent");
  const ReduxValue7 = selector(state, "bh-other-parent-stepparent-guardian");
  const ReduxValue8 = selector(state, "fh-closeness");
  const ReduxValue9 = selector(state, "fh-custody");
  const ReduxValue10 = selector(state, "fh-visitation");
  const ReduxValue11 = selector(state, "fh-experienced");
  const ReduxValue12 = selector(state, "cr-residence");
  const ReduxValue13 = selector(state, "cr-residence-length");
  const ReduxValue14 = selector(state, "fr-agree-discipline");
  const ReduxValue15 = selector(state, "fr-disciplinarian");
  const ReduxValue16 = selector(state, "fr-grandparent-frequency");
  const ReduxValue17 = selector(state, "fr-education-level");
  const ReduxValue18 = selector(state, "mdh-hospital-birth");
  const ReduxValue19 = selector(state, "mdh-mother-length-hospital");
  const ReduxValue20 = selector(state, "mdh-child-length-hospital");

  return {
    ReduxValue1,
    ReduxValue2,
    ReduxValue3,
    ReduxValue4,
    ReduxValue5,
    ReduxValue6,
    ReduxValue7,
    ReduxValue8,
    ReduxValue9,
    ReduxValue10,
    ReduxValue11,
    ReduxValue12,
    ReduxValue13,
    ReduxValue14,
    ReduxValue15,
    ReduxValue16,
    ReduxValue17,
    ReduxValue18,
    ReduxValue19,
    ReduxValue20
  };
})(RadioCard);

export default RadioCard;
