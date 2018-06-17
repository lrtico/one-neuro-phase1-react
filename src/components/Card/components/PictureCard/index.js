import React, { Component } from "react";
import "./pictureCard.css";
import "../../../../app.css";
import MaterialIcon from "react-google-material-icons";
import { Field } from "redux-form";

export default class PictureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps, nextState", nextProps, nextState);
    return true;
  }

  handleTick = () => {
    //const card = event.currentTarget;
    //const parent = card.parentNode;
    //console.log(parent);
    // const list = card.parentNode.children;
    // console.log(list);
    // for (let item of list) {
    //   item.classList.remove("question__checkbox--selected");
    // }
    // card.classList.add("question__checkbox--selected");
    // console.log(card);
    //const input = card.firstChild;
    // console.log(input);
    //input.checked = true;
    this.setState(prevState => {
      return { isChecked: !prevState.isChecked };
    });
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
        className={
          this.state.isChecked
            ? "question__choice question__checkbox--selected"
            : "question__choice"
        }
        tabIndex={tabOrder}
      >
        <Field
          name={cardName}
          type="radio"
          component="input"
          value={cardLabel}
          onChange={this.handleTick}
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
