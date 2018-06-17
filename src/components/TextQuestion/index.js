import React from "react";
import "./textQuestionStyles.css";
import "../../app.css";
import MaterialIcon from "react-google-material-icons";

const TextQuestion = ({
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
  meta: { touched, error }
}) => (
  <div className={classes}>
    <label>
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
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default TextQuestion;
