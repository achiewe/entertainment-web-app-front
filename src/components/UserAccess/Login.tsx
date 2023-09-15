import styled from "styled-components";
import logoSvg from "../../../public/assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userSchema } from "./LoginModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

interface TypeLogin {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeLogin>({
    resolver: yupResolver(userSchema),
  });

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const onSubmit = (data: TypeLogin) => {
    const email = data.email;
    const password = data.password;
    const logIn = async () => {
      try {
        await axios.post("http://localhost:3000/login", {
          email: email,
          password: password,
        });
        navigate("/");
      } catch (error) {
        const fault = error as any;
        if (fault.response && fault.response.status === 404) {
          console.log("invalid user");
          setErrorMsg("Invalid password");
        } else if (fault.response && fault.response.status === 400) {
          setErrorMsg("Invalid email address");
        } else {
          console.log(error);
        }
      }
    };
    logIn();
  };

  return (
    <MainLogin>
      <img src={logoSvg} alt="logo icon" />
      <form onSubmit={handleSubmit(onSubmit)} className="loginCont">
        <h2> Login</h2>
        <div className="loginInput">
          <label>
            <input
              className="inputEmail"
              type="email"
              placeholder="Email address"
              {...register("email")}
            />
            <p className="errorEmail">{errors.email?.message} </p>
            <hr />
          </label>
          <label>
            <input
              className="inputPassword"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <hr />
            <p className="errorPassword">{errors.password?.message} </p>
          </label>
        </div>
        <div className="buttonDiv">
          <button type="submit"> Login to your account</button>
          <p>
            Don’t have an account? <Link to="/SignUp"> Sign Up</Link>
          </p>
        </div>
      </form>
    </MainLogin>
  );
};

const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 58px;
  margin-top: 58px;

  .loginCont {
    width: 327px;
    padding: 24px 24px 32px 24px;
    background-color: #161d2f;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    input {
      width: 100%;
      background: none;
      border: none;
      outline: none;
      color: #ffffff;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      padding-left: 16px;

      :focus {
        outline: none;
      }
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

    .loginInput {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      gap: 24px;

      .errorEmail {
        position: absolute;
        right: 0;
        color: #fc4747;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        bottom: 40px;
      }

      .errorPassword {
        position: absolute;
        right: 0;
        color: #fc4747;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        bottom: -20px;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 18px;
        width: 100%;
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
export default Login;
