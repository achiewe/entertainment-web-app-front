import styled from "styled-components";
import logoSvg from "../../../public/assets/logo.svg";

const Login = (): JSX.Element => {
  return (
    <MainLogin>
      <img src={logoSvg} alt="logo icon" />
      <div className="loginCont">
        <h2> Login</h2>
        <div className="loginInput">
          <label>
            <input
              className="inputEmail"
              type="email"
              placeholder="Email address"
            />
            <hr />
          </label>
          <label>
            <input
              className="inputPassword"
              type="password"
              placeholder="Password"
            />
            <hr />
          </label>
        </div>
        <div className="buttonDiv">
          <button type="submit"> Login to your account</button>
          <p>
            Don’t have an account? <span> Sign Up</span>
          </p>
        </div>
      </div>
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

    .loginInput {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 24px;

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

        span {
          color: #fc4747;
          font-size: 15px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          cursor: pointer;
        }

        span:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
export default Login;
