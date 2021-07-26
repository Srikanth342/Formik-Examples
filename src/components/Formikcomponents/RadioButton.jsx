import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

function RadioButton(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((option, index) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          })
        }
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
}

export default RadioButton;
