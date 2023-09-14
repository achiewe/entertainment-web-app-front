import styled from "styled-components";
import logoSvg from "../../../public/assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "./SignupModal";
import axios from "axios";
import { useState } from "react";

interface signProps {
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUp = (): JSX.Element => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signProps>({
    resolver: yupResolver(SignUpSchema),
  });

  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = (data: signProps) => {
    const email = data.email;
    const password = data.password;
    const produceUser = async (): Promise<void> => {
      try {
        await axios.post("http://localhost:3000/Signup", {
          email: email,
          password: password,
        });
        navigate("/Login");
      } catch (error) {
        const fault = error as any;
        if (fault.response && fault.response.status === 400) {
          setErrorMsg("This email address is already registered");
        } else {
          console.log(error);
        }
      }
    };
    produceUser();
  };
  return (
    <MainContainer errorMsg={errorMsg}>
      <img src={logoSvg} alt="logo icon" />
      <form className="signUpCont" onSubmit={handleSubmit(onSubmit)}>
        <h2> Sign Up</h2>
        <div className="signInput">
          <label>
            <input
              className="inputEmail"
              type="email"
              placeholder="Email address"
              {...register("email")}
            />
            <p className="emailErr">{errors.email?.message} </p>
            <p className="errorEmail">{errorMsg}</p>
            <hr />
          </label>

          <label>
            <input
              className="inputPassword"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="passwordErr">{errors.password?.message} </p>
            <hr />
          </label>

          <label>
            <input
              className="inputPassword"
              type="password"
              placeholder="Repeat Password"
              {...register("repeatPassword")}
            />
            <p className="repPasswordErr">{errors.repeatPassword?.message} </p>
            <hr />
          </label>
        </div>
        <div className="buttonDiv">
          <button type="submit"> Login to your account</button>
          <p>
            Alread have an account? <Link to="/Login"> Login</Link>
          </p>
        </div>
      </form>
    </MainContainer>
  );
};

const MainContainer = styled.div<{ errorMsg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  gap: 58px;

  .signUpCont {
    width: 327px;
    padding: 24px;
    background-color: #161d2f;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    input {
      width: 100%;
      background-color: #161d2f;
      border: none;
      outline: none;
      color: #ffffff;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      padding-left: 16px;
    }

    hr {
      border: none;
      outline: none;
      width: 100%;
      background-color: #5a698f;
      height: 1px;
    }

    h2 {
      color: #ffffff;
      font-size: 32px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: -0.5px;
    }

    .signInput {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      gap: 24px;

      label {
        display: flex;
        flex-direction: column;
        gap: 18px;
        width: 100%;
      }

      .emailErr {
        position: absolute;
        right: 0;
        color: #fc4747;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        top: 40px;
      }

      .errorEmail {
        position: absolute;
        color: #fc4747;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        display: ${(props) => (props.errorMsg ? "block" : "none")};
        top: 40px;
        right: 0;
      }

      .passwordErr {
        position: absolute;
        right: 0;
        color: #fc4747;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        top: 100px;
      }

      .repPasswordErr {
        position: absolute;
        right: 0;
        color: #fc4747;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        bottom: -20px;
      }
    }

    .buttonDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 24px;

      button {
        width: 100%;
        height: 48px;
        border-radius: 6px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fc4747;
        color: #ffffff;
        text-align: center;
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        cursor: pointer;
      }

      p {
        color: #ffffff;
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        a {
          color: #fc4747;
          font-size: 15px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          cursor: pointer;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
export default SignUp;
