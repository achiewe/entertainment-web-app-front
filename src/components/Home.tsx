import styled from "styled-components";
import Header from "./Header";

const Home = (): JSX.Element => {
  return (
    <MainHome>
      <Header />
    </MainHome>
  );
};

const MainHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export default Home;
