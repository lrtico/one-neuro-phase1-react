import React from "react";
import "./textAreaStyles.css";
import "../../app.css";
import MaterialIcon from "react-google-material-icons";
import ButtonToggle from "../ButtonToggle";

const TextArea = ({
  input,
  label,
  labelBold,
  labelLast,
  helpertext,
  tabOrder,
  src,
  type,
  alt,
  classes,
  materialIcon,
  copyForward,
  rows,
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
      <textarea
        {...input}
        placeholder={helpertext}
        tabIndex={tabOrder}
        type={type}
        readOnly={disabled ? true : false}
        rows={rows}
      >
        {" "}
      </textarea>
      {copyForward === undefined ? null : (
        <div className="question__input__copy-forward">
          <ButtonToggle buttonToggleLabel="copy forward" />
        </div>
      )}
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default TextArea;
