import React, { Component } from "react";
import "../cardStyles.css";
import "./RadioCard.css";
import "../../../app.css";
import MaterialIcon from "react-google-material-icons";
import { randomId } from "../../../utils/Helpers";
import { Field } from "redux-form";

class RadioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  handleShow = cardKey => {
    console.log("Fired!", cardKey);
    if (cardKey === "1") {
      console.log("cardkey = 1");
      this.props.showLetterFormat();
    } else if (cardKey === "2") {
      this.props.showDomainBased();
    }
  };

  render() {
    const {
      label,
      labelBold,
      labelLast,
      cardInfo,
      classes,
      disabled,
      meta: { touched, error }
    } = this.props;

    return (
      <div className={disabled ? `${classes} content--disabled` : classes}>
        <label hidden={label == null ? true : false}>
          {label} <strong>{labelBold}</strong> {labelLast}?
        </label>
        <div className="question__input">
          <div className="question__single-choice">Pick one please</div>
          {/* Radio Buttons */}
          <ul className="question__choices flex--wrap">
            <div
              className={
                disabled
                  ? "question__choice--radio-shield content--disabled"
                  : "question__choice--radio-shield"
              }
            />
            {cardInfo.map(card => (
              <li
                onClick={() => this.handleShow(card.cardKey)}
                key={randomId()}
                className="question__choice"
                tabIndex={card.tabOrder}
              >
                <Field
                  name={card.cardName}
                  type="radio"
                  component="input"
                  value={card.cardLabel}
                />
                <span className="question__tick--bg" />
                <span className="question__tick" />
                <div className="question__tick-wrap">
                  <MaterialIcon icon="check" />
                </div>
                {card.thumbnail === undefined ? null : (
                  <div className="question__image-wrap">
                    <img src={card.thumbnail} alt={card.thumbnailAlt} />
                  </div>
                )}
                {card.cardText == null ? null : (
                  <p className="question__choice__radioCard-text">
                    {card.cardText}
                  </p>
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

export default RadioCard;
