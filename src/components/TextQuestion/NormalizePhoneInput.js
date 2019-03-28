import React from "react";
import "./textQuestionStyles.css";
import "../../app.css";
import MaterialIcon from "react-google-material-icons";
import ButtonToggle from "../ButtonToggle";
import RequiredText from "../Required/RequiredText";

const checkMinLength = event => {
  const value = event.target.value;
  //console.log("input's value = ", value);
  const length = value.length;
  //console.log("input's length = ", length);
  const requiredText = event.target.nextSibling;

  if (length > 0 && length < 14) {
    requiredText.classList.add("question__required-text--visible");
  } else {
    requiredText.classList.remove("question__required-text--visible");
  }
};
const NormalizePhoneInput = ({
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
  meta: { touched, error }
}) => (
  <div className={disabled ? `${classes} content--disabled` : classes}>
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
        readOnly={disabled ? true : false}
        onBlur={checkMinLength}
      />
      {copyForward === undefined ? null : (
        <div className="question__input__copy-forward">
          <ButtonToggle buttonToggleLabel="copy forward" />
        </div>
      )}
      <RequiredText requiredText="Please enter 10 digits :)" left="63" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default NormalizePhoneInput;
