import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
}

export default Input;
