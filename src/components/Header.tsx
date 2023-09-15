import styled from "styled-components";
import logoSvg from "../../public/assets/logo.svg";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <MainContainer>
      <img className="logoImg" src={logoSvg} alt="logo icon" />
      <div className="controlPanel"></div>
    </MainContainer>
  );
};

const MainContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  background-color: #161d2f;
  .logoImg {
    width: 25px;
    height: 20px;
  }

  .controlPanel {
    width: 133.536px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Header;
