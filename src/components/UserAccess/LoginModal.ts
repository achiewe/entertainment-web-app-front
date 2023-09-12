import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Can't be empty"),
  password: yup.string().min(4).max(10).required("Can't be empty"),
});
