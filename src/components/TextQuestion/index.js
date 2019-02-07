import React, { Component } from "react";
import "./textQuestionStyles.css";
import "../../app.css";
import MaterialIcon from "react-google-material-icons";
import CopyForwardButton from "../ButtonToggle/CopyForwardButton";
import store from "../../store";

class TextQuestion extends Component {
  addCopyForward = () => {
    const val = this.props.input.value;
    const input = this.props.input;
    const clickedInputName = input.name;
    let inputName = "";
    switch (clickedInputName) {
      case "reason-referral-1":
        inputName = `sof-${clickedInputName}`;
      case "reason-referral-2":
        inputName = `sof-${clickedInputName}`;
      case "reason-referral-3":
        inputName = `sof-${clickedInputName}`;
      default:
        inputName = inputName;
    }

    console.log(`
      Copy forward button clicked
      ===========================
      val = ${val}
      input = ${input}
      inputName = ${inputName}
      props = ${JSON.stringify(this.props)}
    `);
    // store.dispatch({
    //   type: "ADD_COPY_FORWARD_DATA",
    //   payload: `sof-${inputName}: ${val}`
    // });
    this.props.handleCopyForward(inputName, val);
    //return val;
  };
  render() {
    const { handleCopyForward, doThisFunction } = this.props;
    const {
      input,
      label,
      labelBold,
      labelLast,
      placeholder,
      type,
      tabOrder,
      src,
      alt,
      classes,
      materialIcon,
      copyForward,
      maxCharacters,
      meta: { touched, error }
    } = this.props;
    console.log("TextQuestion props, ", this.props);

    return (
      <div className={classes}>
        <label hidden={label == null ? true : false}>
          {label} <strong>{labelBold}</strong> {labelLast}?
        </label>
        <div className="flex question__input">
          {src === undefined ? null : <img src={src} alt={alt} />}
          {materialIcon === undefined ? null : (
            <MaterialIcon icon={materialIcon} />
          )}
          <input
            {...input}
            placeholder={placeholder}
            type={type}
            tabIndex={tabOrder}
            maxLength={maxCharacters === undefined ? null : maxCharacters}
          />
          {copyForward === undefined ? null : (
            <div
              className="question__input__copy-forward"
              //onClick={() => handleCopyForward("test")}
              onClick={this.addCopyForward}
              //onClick={() => doThisFunction()}
            >
              <CopyForwardButton
                buttonToggleLabel="copy forward"
                // handleCopyForward={event => addCopyForward(event)}
              />
            </div>
          )}
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  }
}

export default TextQuestion;
