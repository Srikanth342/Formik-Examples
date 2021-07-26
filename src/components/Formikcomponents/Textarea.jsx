import React from "react";
import { ErrorMessage, Field } from "formik";

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field component="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
}

export default Textarea;
