import styled from "styled-components";

const TrendingEnt = (): JSX.Element => {
  return (
    <TrendingMain>
      <h2> Trending</h2>
      <div className="silderDiv">
        <div className="trendingInfoDiv"></div>
        <div className="trendingInfoDiv"></div>
        <div className="trendingInfoDiv"></div>
        <div className="trendingInfoDiv"></div>
        <div className="trendingInfoDiv"></div>
      </div>
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
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
  }

  .silderDiv {
    display: flex;
    overflow-x: scroll;
  }

  .trendingInfoDiv {
    width: 10px;
    height: 10px;
    background-color: red;
  }
`;
export default TrendingEnt;
