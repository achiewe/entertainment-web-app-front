import styled from "styled-components";
import Header from "./Header";
import InputFilter from "./InputFilter";
import FullEntertainment from "./FullEntertainment";

const Home = (): JSX.Element => {
  return (
    <MainHome>
      <Header />
      <InputFilter />
      <FullEntertainment />
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
