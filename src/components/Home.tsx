import styled from "styled-components";
import FullEntertainment from "./FullEntertainment";

const Home = (): JSX.Element => {
  return (
    <MainHome>
      <FullEntertainment />
    </MainHome>
  );
};

const MainHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default Home;
