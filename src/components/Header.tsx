import styled from "styled-components";
import logoSvg from "../../public/assets/logo.svg";
import avatarImg from "../../public/assets/image-avatar.png";
import defaultAvatarImg from "../../public/assets/user.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux";
import { setLogIn } from "../store/LoggedInSlice";
import { setClientEmail } from "../store/ClientEmailSlice";

const Header = (): JSX.Element => {
  const path = window.location.pathname;

  const [openFrame, setOpenFrame] = useState<boolean>(false);

  const logIn = useSelector((store: RootState) => store.logIn.logIn);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // here is commnet what should happend when onclick on the signout button
  const signOut = (): void => {
    dispatch(setLogIn(false));
    dispatch(setClientEmail(""));
    localStorage.removeItem("login");
    localStorage.removeItem("clientEmail");
    navigate("/");
  };

  return (
    <MainContainer path={path} openFrame={openFrame} logIn={logIn}>
      <img
        className="logoImg"
        src={logoSvg}
        alt="logo icon"
        onClick={() => {
          window.location.href =
            "https://entertainment-web-app-front.vercel.app/";
        }}
      />
      <div className="controlPanel">
        <Link to="/" className="homeLink">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ fill: path === "/" ? "white" : "" }}
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill="#5A698F"
            />
          </svg>
        </Link>

        <Link to="/Movies" className="moviesLink">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ fill: path === "/Movies" ? "white" : "" }}
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill="#5A698F"
            />
          </svg>
        </Link>

        <Link to="/TVSeries" className="TVSeriesLink">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ fill: path === "/TVSeries" ? "white" : "" }}
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill="#5A698F"
            />
          </svg>
        </Link>

        <Link to="/Bookmarked" className="BookmarkedLink">
          <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ fill: path === "/Bookmarked" ? "white" : "" }}
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
      </div>
      <img
        className="avatarImg"
        src={logIn ? avatarImg : defaultAvatarImg}
        alt="avatar image"
        onClick={() => {
          setOpenFrame(!openFrame);
        }}
      />
      {logIn === false ? (
        <div className="frame">
          <Link to="/Login">Login</Link>
          <Link to="/SignUp"> Sign Up</Link>
        </div>
      ) : (
        <div className="frame">
          <button
            onClick={() => {
              signOut();
            }}
            className="signOut"
          >
            sign out
          </button>
        </div>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.header<{
  path: string;
  openFrame: boolean;
  logIn: boolean;
}>`
  width: 100%;
  display: ${(props) =>
    props.path === "/Login"
      ? "none"
      : props.path === "/SignUp"
      ? "none"
      : "flex"};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  background-color: #161d2f;
  position: relative;
  @media (min-width: 768px) {
    width: 719px;
    margin-top: 23px;
    border-radius: 10px;
    padding: 24px 16px 22px 24px;
  }
  @media (min-width: 1024px) {
    width: 96px;
    height: 960px;
    flex-direction: column;
    padding: 35px 28px 32px 28px;
    border-radius: 20px;
    margin-top: 32px;
  }

  .frame {
    display: ${(props) => (props.openFrame ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-direction: column;
    position: absolute;
    right: 15px;
    top: 75px;
    width: 130px;
    height: 90px;
    background-color: #161d2f;
    border-radius: 8px;
    @media (min-width: 768px) {
      width: 180px;
      height: 100px;
    }

    @media (min-width: 1024px) {
      width: 120px;
      height: 120px;
      top: 840px;
      right: -130px;
      z-index: 2;
    }

    a {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      cursor: pointer;
      text-decoration: none;
      font-weight: 300;
      line-height: normal;
      background-color: #fc4747;
      width: 80px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }

    .signOut {
      width: 80px;
      height: 40px;
      border-radius: 8px;
      border: none;
      background-color: #fc4747;
      color: #fff;
      cursor: pointer;
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;

      @media (min-width: 768px) {
        width: 100px;
        height: 50px;
      }

      @media (min-width: 1024px) {
        width: 80px;
        height: 40px;
      }
    }

    .signOut:hover {
      background-color: #fff;
      color: #fc4747;
    }

    a:hover {
      background-color: #fff;
      color: #fc4747;
    }
  }

  .logoImg {
    width: 25px;
    height: 20px;
    cursor: pointer;
    @media (min-width: 768px) {
      width: 32px;
      height: 25.6px;
    }
  }

  .controlPanel {
    width: 133.536px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
      width: 172.92px;
    }

    @media (min-width: 1024px) {
      flex-direction: column;
      height: 200px;
      width: 20px;
    }

    a {
      cursor: pointer;
      :hover {
        fill: #fc4747;
      }
    }

    .BookmarkedLink {
      display: ${(props) => (props.logIn ? "flex" : "none")};
    }
  }

  .avatarImg {
    width: 24px;
    height: 24px;
    border: 1px solid #fff;
    border-radius: 24px;
    cursor: pointer;
    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }

    @media (min-width: 1024px) {
      width: 40px;
      height: 40px;
    }
  }
`;
export default Header;
