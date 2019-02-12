import React from "react";
import "./textQuestionStyles.css";
import "../../app.css";
import MaterialIcon from "react-google-material-icons";
import CopyForwardButton from "../ButtonToggle/CopyForwardButton";
import store from "../../store";

const addCopyForward = event => {
  const val = event.target.parentNode.parentNode.previousSibling.value;
  const input = event.target.parentNode.parentNode.previousSibling;
  console.log("Copy forward button clicked", val, input);
  store.dispatch({
    type: "ADD_COPY_FORWARD_DATA",
    payload: {
      "sof-reason-referral-1": val
    }
  });
};

const TextQuestionAutoCalculate = ({
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
  age,
  readOnly,
  maxCharacters,
  meta: { touched, error }
}) => (
  <div className={classes}>
    <label hidden={label == null ? true : false}>
      {label} <strong>{labelBold}</strong> {labelLast}?
    </label>
    <div className="flex question__input">
      {src === undefined ? null : <img src={src} alt={alt} />}
      {materialIcon === undefined ? null : <MaterialIcon icon={materialIcon} />}
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        tabIndex={tabOrder}
        maxLength={maxCharacters === undefined ? null : maxCharacters}
        readOnly={readOnly}
        value={age === "" ? "" : age}
      />
      {copyForward === undefined ? null : (
        <div className="question__input__copy-forward">
          <CopyForwardButton
            buttonToggleLabel="copy forward"
            handleCopyForward={event => addCopyForward(event)}
          />
        </div>
      )}
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default TextQuestionAutoCalculate;
