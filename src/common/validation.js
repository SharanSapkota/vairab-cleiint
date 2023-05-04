import { object, string, ref } from "yup";


export const loginSchema = object().shape({
    password: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: string().email("Invalid email").required("Required")
  });

  export const RegisterValidation = object().shape({
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