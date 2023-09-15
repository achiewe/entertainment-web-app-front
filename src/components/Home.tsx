import styled from "styled-components";
import Header from "./Header";
import InputFilter from "./InputFilter";

const Home = (): JSX.Element => {
  return (
    <MainHome>
      <Header />
      <InputFilter />
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
