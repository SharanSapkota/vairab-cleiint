import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import { registerAction } from "../../services";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const RegisterValidation = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),

  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  password: string().min(3, "Password must be of length more than 3").required("Required"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
});

const Input = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold" for={field.name}>
        {label}
      </label>
      <input
        className={`${
          meta.error && meta.touched ? "border-red-500" : ""
        } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

function Registration() {
  const handleSubmit = async (values) => {
    const {firstName, lastName, email, password} = values
    console.log(values)
     await registerAction({firstName, lastName, email, password}).then(data => {
      console.log(data)
     }).catch((e) => {
      console.log(e)
     })
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",

          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidation}
      >
        {() => {
          return (
            <Form className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8">
              <Input name="firstName" label="First Name" />
              <Input name="lastName" label="Last Name" />
              <Input name="email" label="Email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            <ToastContainer />

            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Registration;