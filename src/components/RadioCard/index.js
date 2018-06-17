import React from "react";

const RadioCard = ({ tabOrder, placeholder, type, value, name }) => (
  <input
    placeholder={placeholder}
    type={type}
    tabIndex={tabOrder}
    value={value}
    name={name}
  />
);
export default RadioCard;
