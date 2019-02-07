import React from "react";
import "./textQuestionStyles.css";
import "../../app.css";
import MaterialIcon from "react-google-material-icons";

const TextQuestionCopyForward = ({
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
  copyForwardData,
  maxCharacters,
  inputName,
  myName,
  ...props,
  meta: { touched, error }
}) => (
  <div className={classes}>
  {/* {console.log("Copy Forward data, ", copyForwardData)} */}
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
        //defaultValue={copyForwardData}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default TextQuestionCopyForward;
