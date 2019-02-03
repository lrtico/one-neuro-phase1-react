import React from "react";
import "./textQuestionStyles.css";
import "../../app.css";
import MaterialIcon from "react-google-material-icons";
import ButtonToggle from "../ButtonToggle";

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
  age,
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
      />
      {copyForward === undefined ? null : (
        <div className="question__input__copy-forward">
          <ButtonToggle buttonToggleLabel="copy forward" />
        </div>
      )}
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default NormalizePhoneInput;
