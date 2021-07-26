import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "srikanth",
  email: "srikanthp@outlook.com",
  channel: "sp",
  comments: "welcome to formik",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("form Data", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email formate").required("Required"),
  channel: Yup.string().required("Required"),
});

function YoutubeForm() {
  const [formValues, setFormValues] = useState(null);

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      enableReinitialize
    >
      {(formikBag) => {
        console.log("formikBag", formikBag);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Emali</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                name="channel"
                id="channel"
                placeholder="channel"
              />
              <ErrorMessage name="channel" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field as="textarea" id="comments" name="comments" />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field name="address">
                {(props) => {
                  const { field, meta, form } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">facebook Profile</label>
              <Field type="text" name="social.facebook" id="facebook" />
              <ErrorMessage
                name="social.facebook"
                component="div"
                className="error"
              />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">twitter Profile</label>
              <Field type="text" name="social.twitter" id="twitter" />
              <ErrorMessage
                name="social.twitter"
                component="div"
                className="error"
              />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone Number</label>
              <Field type="text" name="phoneNumbers[0]" id="primaryPh" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">secondary Phone Number</label>
              <Field type="text" name="phoneNumbers[1]" id="secondaryPh" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">List of Phone Number</label>
              <FieldArray name="phNumbers">
                {(props) => {
                  const { remove, form, push } = props;
                  const { values } = form;
                  const { phNumbers } = values;
                  console.log("formErrors", form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, i) => (
                        <div>
                          <Field name={`phNumbers[${i}]`} />
                          <button onClick={() => remove(i)}> - </button>
                        </div>
                      ))}
                      <button onClick={() => push("")}> + </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/*<button
              type="button"
              onClick={() => formikBag.validateField("comments")}
            >
              validate comments
            </button>
            <button type="button" onClick={() => formikBag.validateForm()}>
              validate all
            </button>

            <button
              type="button"
              onClick={() => formikBag.setFieldTouched("comments")}
            >
              validate comments
            </button>
            <button
              type="button"
              onClick={() =>
                formikBag.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              validate fields
            </button>*/}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load saved Data
            </button>
            <button type="reset">Reset</button>

            <button
              type="submit"
              disabled={!formikBag.isValid || formikBag.isSubmitting}
            >
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
