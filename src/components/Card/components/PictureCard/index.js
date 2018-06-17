import React, { Component } from "react";
import "./pictureCard.css";
import "../../../../app.css";
import MaterialIcon from "react-google-material-icons";
import { Field } from "redux-form";

export default class PictureCard extends Component {
  handleTick = event => {
    const card = event.target;
    card.classList.toggle("question__checkbox--selected");
    const input = event.target.parentNode.firstChild.checked;
    console.log(`This is a ${input}`);
    // this.refs.myRefs.checked = true;
    //console.log(this.document.getElementById("B"));
  };

  render() {
    const {
      tabOrder,
      cardName,
      cardKey,
      cardLabel,
      thumbnail,
      thumbnailAlt
    } = this.props;

    return (
      <li
        className="question__choice"
        tabIndex={tabOrder}
        onClick={this.handleTick}
      >
        <Field
          name={cardName}
          type="radio"
          component="input"
          value={cardLabel}
          ref={cardKey}
          id={cardKey}
        />
        <div className="question__tick-wrap">
          <MaterialIcon icon="check" />
        </div>
        {thumbnail === undefined ? null : (
          <div className="question__image-wrap">
            <img src={thumbnail} alt={thumbnailAlt} />
          </div>
        )}
        <div className="question__text-wrap flex flex--center-vertical">
          <div className="question__label">
            <div className="question__letter">
              <span>{cardKey}</span>
            </div>
          </div>
          <div className="question__text-label">{cardLabel}</div>
        </div>
        <div className="question__bg" />
      </li>
    );
  }
}
