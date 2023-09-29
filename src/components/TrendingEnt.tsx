import styled from "styled-components";

const TrendingEnt = (): JSX.Element => {
  return (
    <TrendingMain>
      <h2> Trending</h2>
    </TrendingMain>
  );
};

const TrendingMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  h2 {
    color: #fff;
    font-family: "Outfit", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
  }
`;
export default TrendingEnt;
