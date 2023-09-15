import styled from "styled-components";

const Header = (): JSX.Element => {
  return <MainContainer></MainContainer>;
};

const MainContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  background-color: #161d2f;
`;
export default Header;
