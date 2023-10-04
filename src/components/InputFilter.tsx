import styled from "styled-components";
import SearchSvg from "../../public/assets/icon-search.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../store/InputFilterSlice";
import { RootState } from "../store/redux";

const InputFilter = (): JSX.Element => {
  const path = window.location.pathname;
  const dispatch = useDispatch();
  useNavigate();

  const value = useSelector((store: RootState) => store.value.value);

  console.log(value);
  return (
    <InputContainer path={path}>
      <img className="searchSvg" src={SearchSvg} alt="search icon" />
      <input
        onChange={(e) => {
          dispatch(setValue(e.target.value));
        }}
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
    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
  @media (min-width: 768px) {
    gap: 24px;
    padding-left: 25px;
  }
  @media (min-width: 1024px) {
    padding-left: 0;
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
    @media (min-width: 768px) {
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
`;
export default InputFilter;
