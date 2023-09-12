import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Can't be empty"),
  password: yup.string().required("Can't be empty"),
});
