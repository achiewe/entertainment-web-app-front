import styled from "styled-components";
import dotImg from "../../public/assets/Oval.svg";
import movieSvg from "../../public/assets/icon-nav-movies.svg";
import serieSvg from "../../public/assets/icon-nav-tv-series.svg";
import emptybook from "../../public/assets/icon-bookmark-empty.svg";
import Fullbook from "../../public/assets/icon-bookmark-full.svg";
import playSvg from "../../public/assets/icon-play.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux";
import axios from "axios";
import { takeInfo } from "../App";

const FullEntertainment = (): JSX.Element => {
  const dispatch = useDispatch();

  const enjoyment = useSelector(
    (ent: RootState) => ent.entertainment.entertainment
  );

  const clientEmail = useSelector(
    (user: RootState) => user.clientEmail.clientEmail
  );

  const logIn = useSelector((user: RootState) => user.logIn.logIn);

  const renewEnt = async (id: string, bookmarked: boolean) => {
    try {
      console.log(
        `Renewing entertainment with ID: ${id}, isBookmarked: ${bookmarked}`
      );
      await axios.put(
        `http://localhost:3000/changeBookmark/${clientEmail}/${id}`,
        {
          isBookmarked: bookmarked,
        }
      );
      console.log("Bookmark updated successfully");
      takeInfo(clientEmail, logIn, dispatch);
    } catch (error) {
      console.log("Error updating bookmark:", error);
    }
  };

  return (
    <EntertainmentCont>
      <h2> Recommended for you</h2>
      <div className="recommendDiv">
        {enjoyment.map((ent, index) => (
          <div key={index} className="movieStructure">
            <div className="imageDiv">
              <img
                className="imgThumb"
                src={ent.thumbnail.regular.small}
                alt="entertainment image"
              />
              <div className="overlay">
                <button className="playDiv">
                  <img className="playSvg" src={playSvg} alt="play svg" />
                  <h3>Play </h3>
                </button>
              </div>
            </div>
            <div className="bookmark">
              <img
                className="bookmarkImg"
                onClick={async (e) => {
                  e.preventDefault();
                  console.log(`Clicked on bookmark for ID: ${ent._id}`);
                  console.log("Before update:", ent);
                  await renewEnt(ent._id, !ent.isBookmarked);
                  console.log("After update:", ent);
                }}
                src={ent.isBookmarked === false ? emptybook : Fullbook}
                alt="bookmark"
              />
            </div>
            <div className="infoMovie">
              <h4> {ent.year}</h4>
              <img src={dotImg} className="dot" />
              <img
                src={ent.category === "Movie" ? movieSvg : serieSvg}
                className="movieSerielog"
              />
              <h4> {ent.category}</h4>
              <img src={dotImg} className="dot" />
              <h4> {ent.rating}</h4>
            </div>
            <h2> {ent.title}</h2>
          </div>
        ))}
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
      width: 100%;
      border-radius: 100%;

      border-radius: 8px;

      .imgThumb {
        width: 164px;
        height: 110px;
        border-radius: 8px;
        position: relative;
        cursor: pointer;
      }

      .overlay {
        display: none;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );

        .playDiv {
          width: 60px;
          height: 25px;
          border-radius: 28.5px;
          border: none;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.25);

          .playSvg {
            width: 16px;
            height: 16px;
            z-index: 2;
          }

          h3 {
            color: #fff;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }

      .imageDiv:hover .overlay {
        display: flex;
      }
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
      background: rgba(6, 0, 27, 0.501);
      z-index: 2;

      .bookmarkImg {
      }
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
