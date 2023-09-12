import styled from "styled-components";
import logoSvg from "../../../public/assets/logo.svg";
import { Link } from "react-router-dom";

const SignUp = (): JSX.Element => {
  return (
    <MainContainer>
      <img src={logoSvg} alt="logo icon" />
      <div className="signUpCont">
        <h2> Sign Up</h2>
        <div className="signInput">
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

          <label>
            <input
              className="inputPassword"
              type="password"
              placeholder="Repeat Password"
            />
            <hr />
          </label>
        </div>
        <div className="buttonDiv">
          <button type="submit"> Login to your account</button>
          <p>
            Alread have an account? <Link to="/Login"> Login</Link>
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
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
