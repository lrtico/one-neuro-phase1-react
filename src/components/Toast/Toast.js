import React from "react";
import "./toast.css";
import MaterialIcon from "react-google-material-icons";

const Toast = props => {
  const { onClearError, errors } = props;
  return (
    <div
      className={
        errors.length > 0 ? "toast toast--has-error flex" : "toast flex"
      }
    >
      <span>{errors}</span>
      <div onClick={onClearError}>
        <MaterialIcon icon="close" size={36} />
      </div>
    </div>
  );
};
export default Toast;
