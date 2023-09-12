import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Can't be empty"),
  password: yup
    .string()
    .min(5, "Must be at least 5 characters")
    .max(15, "Must not exceed 15 characters")
    .required("Can't be empty")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{5,15}$/,
      "must include !@#$%^&*()_+"
    ),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Can't be empty"),
});
