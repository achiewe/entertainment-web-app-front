import styled from "styled-components";
import SearchSvg from "../../public/assets/icon-search.svg";

const InputFilter = (): JSX.Element => {
  const path = window.location.pathname;
  return (
    <InputContainer>
      <img className="searchSvg" src={SearchSvg} alt="search icon" />
      <input
        type="text"
        placeholder={
          path === "/"
            ? "Search for movies or TV series"
            : path === "/Movies"
            ? "Search for movies"
            : path === "/TV Series"
            ? "Search for TV series"
            : path === "/Bookmarked"
            ? "Search for bookmarked shows"
            : ""
        }
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 257px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
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
