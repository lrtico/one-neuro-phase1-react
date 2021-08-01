import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textQuestionStyles.css';
import '../../app.css';
import MaterialIcon from 'react-google-material-icons';
import CopyForwardButton from '../ButtonToggle/CopyForwardButton';
// import store from "../../store";

class TextQuestion extends Component {
  addCopyForward = () => {
    const val = this.props.input.value;
    const input = this.props.input;
    const clickedInputName = input.name;
    const { handleCopyForward } = this.props;
    let inputName = '';
    switch (clickedInputName) {
      case 'reasonReferral1':
        inputName = `sof${clickedInputName}`;
        break;
      case 'reasonReferral2':
        inputName = `sof${clickedInputName}`;
        break;
      case 'reasonReferral3':
        inputName = `sof${clickedInputName}`;
        break;
      default:
        inputName = '';
    }

    console.log(`
      Copy forward button clicked
      ===========================
      val = ${val}
      input = ${input}
      clickedInputName = ${clickedInputName}
      inputName = ${inputName}
      props = ${JSON.stringify(this.props)}
    `);
    // store.dispatch({
    //   type: "ADD_COPY_FORWARD_DATA",
    //   payload: `sof-${inputName}: ${val}`
    // });
    handleCopyForward(inputName, val);
    // return val;
  };

  render() {
    // const { handleCopyForward, doThisFunction } = this.props;
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
      disabled,
      meta: { touched, error },
    } = this.props;

    return (
      <div className={disabled ? `${classes} content--disabled` : classes}>
        <label hidden={label == null}>
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
            readOnly={!!disabled}
          />
          {copyForward === undefined ? null : (
            <div
              className="question__input__copy-forward"
              // onClick={() => handleCopyForward("test")}
              // onClick={this.props.handleCopyForward}
              onClick={this.addCopyForward}
              // onClick={() => doThisFunction()}
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

TextQuestion.propTypes = {
  handleCopyForward: PropTypes.func,
  input: PropTypes.object,
  label: PropTypes.string,
  labelBold: PropTypes.string,
  labelLast: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  tabOrder: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  classes: PropTypes.string,
  materialIcon: PropTypes.string,
  copyForward: PropTypes.string,
  maxCharacters: PropTypes.string,
  disabled: PropTypes.string,
  meta: PropTypes.string,
};

export default TextQuestion;
