import styled from "styled-components";
import SearchSvg from "../../public/assets/icon-search.svg";
import { useNavigate } from "react-router-dom";

const InputFilter = (): JSX.Element => {
  const path = window.location.pathname;
  useNavigate();
  return (
    <InputContainer path={path}>
      <img className="searchSvg" src={SearchSvg} alt="search icon" />
      <input
        type="text"
        placeholder={
          path === "/"
            ? "Search for movies or TV series"
            : path === "/Movies"
            ? "Search for movies"
            : path === "/TVSeries"
            ? "Search for TV series"
            : path === "/Bookmarked"
            ? "Search for bookmarked shows"
            : ""
        }
      />
    </InputContainer>
  );
};

const InputContainer = styled.div<{ path: string }>`
  width: 100%;
  display: ${(props) =>
    props.path === "/Login"
      ? "none"
      : props.path === "/SignUp"
      ? "none"
      : "flex"};
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  .searchSvg {
    width: 24px;
    height: 24px;
  }

  input {
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: #ffffff;
  }
`;
export default InputFilter;
