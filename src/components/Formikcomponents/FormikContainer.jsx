import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const options = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "roption1" },
    { key: "Option 2", value: "roption2" },
    { key: "Option 3", value: "roption3" },
  ];

  const CheckBoxOptions = [
    { key: "Option 1", value: "coption1" },
    { key: "Option 2", value: "coption2" },
    { key: "Option 3", value: "coption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkOption: Yup.array().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("value", values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              type="email"
              name="email"
              label="Email"
              control="input"
            />
            <FormikControl
              type="textarea"
              name="description"
              label="Description"
              control="textarea"
            />

            <FormikControl
              control="select"
              name="selectOption"
              label="Select Option"
              options={options}
            />
            <FormikControl
              control="radio"
              name="radioOption"
              label="Radio topic"
              options={radioOptions}
            />

            <FormikControl
              control="checkbox"
              name="checkOption"
              label="checkbox topic"
              options={CheckBoxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
