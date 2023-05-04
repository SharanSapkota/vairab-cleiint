import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginAction } from "../../services";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { loginSchema } from "../../common/validation";


const LoginForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
    navigate('/home')
      
    }
  });
  const handleSubmit = (values) => {
    loginAction(values).then(data => {
    navigate('/home')
    })
  };
    return (
      <>
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <label>
                  Email: <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  Password:
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </>
    );
}

export default LoginForm;
