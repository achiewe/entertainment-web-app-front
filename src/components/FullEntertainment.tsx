import styled from "styled-components";
import dotImg from "../../public/assets/Oval.svg";
import movieSvg from "../../public/assets/icon-nav-movies.svg";
import bookmarkSvg from "../../public/assets/icon-bookmark-empty.svg";

const FullEntertainment = (): JSX.Element => {
  return (
    <EntertainmentCont>
      <h2> Recommended for you</h2>
      <div className="recommendDiv">
        <div className="movieStructure">
          <div className="imageDiv"> </div>
          <div className="bookmark">
            <img
              src={bookmarkSvg}
              className="bookmarkSvg"
              alt="empty bookmark"
            />
          </div>
          <div className="infoMovie">
            <h4> 2019</h4>
            <img src={dotImg} className="dot" />
            <img src={movieSvg} className="movieSerielog" />
            <h4> Movie</h4>
            <img src={dotImg} className="dot" />
            <h4> E</h4>
          </div>
          <h2> The Great Lands</h2>
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
    position: relative;
    gap: 4px;

    .imageDiv {
      width: 164px;
      border-radius: 8px;
    }

    .bookmark {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #10141e;
    }

    .infoMovie {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 6px;

      h4 {
        color: #fff;
        font-size: 11px;
        font-style: normal;
        font-weight: 300;
        opacity: 0.75;
        line-height: normal;
      }

      .dot {
        width: 2px;
        height: 2px;
      }

      .movieSerielog {
        width: 10px;
        height: 10px;
      }
    }

    h2 {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export default FullEntertainment;
