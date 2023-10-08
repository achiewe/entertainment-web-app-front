import styled from "styled-components";
import dotImg from "../../public/assets/Oval.svg";
import movieSvg from "../../public/assets/icon-nav-movies.svg";
import emptybook from "../../public/assets/icon-bookmark-empty.svg";
import Fullbook from "../../public/assets/icon-bookmark-full.svg";
import playSvg from "../../public/assets/icon-play.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { takeInfo } from "../App";
import { setFilteredEnt, setFilteredUndefined } from "../store/EntertSaveSlice";

const TvSeriesEnt = (): JSX.Element => {
  const dispatch = useDispatch();

  const enjoyment = useSelector(
    (ent: RootState) => ent.entertainment.entertainment
  );

  const clientEmail = useSelector(
    (user: RootState) => user.clientEmail.clientEmail
  );

  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const logIn = useSelector((user: RootState) => user.logIn.logIn);

  const serieEnt = enjoyment.filter((serie) => serie.category === "TV Series");

  const value = useSelector((user: RootState) => user.value.value);

  const filterValue = useSelector(
    (user: RootState) => user.filteredEnt.filtered
  );

  useEffect(() => {
    let data = serieEnt;
    if (value.length > 0) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setFilteredEnt(data));
    } else dispatch(setFilteredUndefined());
  }, [value]);

  const renewEnt = async (id: string, newIsBookmarked: boolean) => {
    try {
      console.log(
        `Renewing entertainment with ID: ${id}, isBookmarked: ${newIsBookmarked}`
      );
      await axios.put(
        `entertainment-web-app-api-production-ada6.up.railway.app/changeBookmark/${clientEmail}/${id}`,
        {
          isBookmarked: newIsBookmarked,
        }
      );
      console.log("Bookmark updated successfully");
      takeInfo(clientEmail, logIn, dispatch);
    } catch (error) {
      console.log("Error updating bookmark:", error);
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <MainSerieCont errorMessage={errorMessage}>
      <h2> TV Series</h2>
      <div className="recommendDiv">
        {(filterValue === undefined ? serieEnt : filterValue).map(
          (ent, index) => (
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

                    const newIsBookmarked = !ent.isBookmarked;
                    await renewEnt(ent._id, newIsBookmarked);
                  }}
                  src={ent.isBookmarked === true ? Fullbook : emptybook}
                  alt="bookmark"
                />
              </div>
              <div className="infoMovie">
                <h4> {ent.year}</h4>
                <img src={dotImg} className="dot" />
                <img src={movieSvg} className="movieSerielog" />
                <h4> {ent.category}</h4>
                <img src={dotImg} className="dot" />
                <h4> {ent.rating}</h4>
              </div>
              <h2> {ent.title}</h2>
            </div>
          )
        )}

        <div className="errorMsgBook">
          <p> Please log in to bookmark</p>
        </div>
      </div>
    </MainSerieCont>
  );
};

const MainSerieCont = styled.div<{ errorMessage: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  gap: 24px;
  padding-bottom: 61px;
  @media (min-width: 768px) {
    padding: 0 25px;
    padding-bottom: 56px;
  }
  @media (min-width: 1024px) {
    padding: 0 0px;
  }

  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
    @media (min-width: 768px) {
      font-size: 32px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: -0.5px;
    }
  }

  .recommendDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 15px;
    @media (min-width: 768px) {
      gap: 24px 29px;
    }

    @media (min-width: 1024px) {
      gap: 32px 40px;
    }
  }

  .errorMsgBook {
    display: flex;
    align-items: center;
    position: ${(props) => (props.errorMessage ? "absolute" : "fixed")};
    right: ${(props) => (props.errorMessage ? "10px" : "-100%")};
    height: 35px;
    top: 10px;
    background-color: #fc4747;
    padding: 0 8px;
    justify-content: center;
    border-radius: 7px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    transition: 0.5s;

    p {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.312px;
    }
  }

  .movieStructure {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 4px;
    @media (min-width: 768px) {
      gap: 5px;
    }

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
        @media (min-width: 768px) {
          width: 220px;
          height: 140px;
        }

        @media (min-width: 1024px) {
          width: 280px;
          height: 174px;
        }
      }
    }

    .overlay {
      display: none;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      border-radius: 8px;
      cursor: pointer;
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
      @media (min-width: 768px) {
        height: 140px;
      }

      @media (min-width: 1024px) {
        height: 174px;
      }

      .playDiv {
        width: 60px;
        height: 25px;
        border-radius: 28.5px;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        background: rgba(255, 255, 255, 0.25);
        @media (min-width: 768px) {
          width: 80px;
          height: 40px;
        }
        .playSvg {
          width: 16px;
          height: 16px;
          z-index: 2;
          @media (min-width: 768px) {
            width: 24px;
            height: 24px;
          }
        }

        h3 {
          color: #fff;
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          @media (min-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }

    .imageDiv:hover .overlay {
      display: flex;
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
      cursor: pointer;

      .bookmarkImg {
      }
    }

    .infoMovie {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 6px;
      @media (min-width: 768px) {
        gap: 8px;
      }

      h4 {
        color: #fff;
        font-size: 11px;
        font-style: normal;
        font-weight: 300;
        opacity: 0.75;
        line-height: normal;
        @media (min-width: 768px) {
          font-size: 13px;
        }
      }

      .dot {
        width: 2px;
        height: 2px;
        @media (min-width: 768px) {
          width: 3px;
          height: 3px;
        }
      }

      .movieSerielog {
        width: 10px;
        height: 10px;
        @media (min-width: 768px) {
          width: 12px;
          height: 12px;
        }
      }
    }

    h2 {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
`;
export default TvSeriesEnt;
