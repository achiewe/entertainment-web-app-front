import styled from "styled-components";

const FullEntertainment = (): JSX.Element => {
  return (
    <EntertainmentCont>
      <h2> Recommended for you</h2>
      <div className="recommendDiv">
        <div className="movieStructure">
          <div className="imageDiv"> </div>
        </div>
      </div>
    </EntertainmentCont>
  );
};

const EntertainmentCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  gap: 24px;

  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
  }

  .recommendDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 15px;
  }

  .movieStructure {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .imageDiv {
      width: 164px;
      border-radius: 8px;
      background-image: url();
    }
  }
`;

export default FullEntertainment;
