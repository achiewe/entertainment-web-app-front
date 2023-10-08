import styled from "styled-components";
import fullBookTrend from "../../public/assets/icon-bookmark-full.svg";
import emptyBookTrend from "../../public/assets/icon-bookmark-empty.svg";
import dotSvg from "../../public/assets/Oval.svg";
import playSvg from "../../public/assets/icon-play.svg";
import serieSvgTrend from "../../public/assets/icon-nav-tv-series.svg";
import movieSvgTrend from "../../public/assets/icon-nav-movies.svg";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux";
import axios from "axios";
import { takeInfo } from "../App";

const TrendingEnt = (): JSX.Element => {
  const [width, setWidth] = useState<number | undefined>(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const enjoyment = useSelector(
    (ent: RootState) => ent.entertainment.entertainment
  );

  const isTrendFilter = enjoyment.filter((enjoy) => enjoy.isTrending === true);

  const leftConstraint = window.innerWidth >= 768 ? -1860 : -930;

  const clientEmail = useSelector(
    (user: RootState) => user.clientEmail.clientEmail
  );

  const logIn = useSelector((user: RootState) => user.logIn.logIn);

  const dispatch = useDispatch();

  const renewEnt = async (id: string, newIsBookmarked: boolean) => {
    try {
      console.log(
        `Renewing entertainment with ID: ${id}, isBookmarked: ${newIsBookmarked}`
      );
      await axios.put(
        `https://entertainment-web-app-api-production-ada6.up.railway.app/changeBookmark/${clientEmail}/${id}`,
        {
          isBookmarked: newIsBookmarked,
        }
      );
      console.log("Bookmark updated successfully");
      takeInfo(clientEmail, logIn, dispatch);
    } catch (error) {
      console.log("Error updating bookmark:", error);
    }
  };

  useEffect(() => {
    const current = carousel.current;
    if (current) {
      if (
        typeof current.scrollWidth !== "undefined" &&
        typeof current.offsetWidth !== "undefined"
      ) {
        setWidth(current.scrollWidth - current.offsetWidth);
      }
    }
  }, []);

  return (
    <TrendingMain>
      <h2 className="trendingTitle"> Trending</h2>
      {width !== undefined && (
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: leftConstraint,
            }}
            className="innerCarousel"
          >
            {isTrendFilter.map((trend) => (
              <motion.div className="item" key={trend._id}>
                <img
                  className="ImgTrend"
                  src={trend.thumbnail.trending.small}
                />
                <img
                  className="ImgTrendTab"
                  src={trend.thumbnail.trending.large}
                />

                <div className="overlay">
                  <button className="playButton">
                    <img className="playSvg" src={playSvg} alt="play svg" />
                    <h3>Play </h3>
                  </button>
                </div>

                <div className="trendingStructure">
                  <div className="bookmarkTrend">
                    <img
                      onClick={async (e) => {
                        e.preventDefault();

                        const newIsBookmarked = !trend.isBookmarked;
                        await renewEnt(trend._id, newIsBookmarked);
                      }}
                      src={trend.isBookmarked ? fullBookTrend : emptyBookTrend}
                      alt="bookmark svg"
                    />
                  </div>
                  <div className="TrendTitleDiv">
                    <div className="infoTrand">
                      <h4> year</h4>
                      <img src={dotSvg} className="dot" />
                      <img
                        src={
                          trend.category === "Movie"
                            ? movieSvgTrend
                            : serieSvgTrend
                        }
                        className="movieSerielog"
                      />
                      <h4> {trend.category}</h4>
                      <img src={dotSvg} className="dot" />
                      <h4> {trend.rating}</h4>
                    </div>
                    <h2> {trend.title}</h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </TrendingMain>
  );
};

const TrendingMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  overflow: hidden;
  @media (min-width: 768px) {
    gap: 25px;
  }

  .trendingTitle {
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

  .carousel {
    cursor: grab;
    overflow: hidden;
    background-color: #10141e;

    .innerCarousel {
      display: flex;
      background-color: #10141e;
      gap: 12px;
      @media (min-width: 768px) {
        gap: 40px;
      }
    }

    .item {
      width: 240px;
      height: 140px;
      border-radius: 8px;
      position: relative;
      @media (min-width: 768px) {
        width: 470px;
        height: 230px;
      }
      @media (min-width: 1024px) {
        width: 470px;
        height: 230px;
      }

      .ImgTrend {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        @media (min-width: 768px) {
          display: none;
        }
      }

      .ImgTrendTab {
        display: none;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        @media (min-width: 768px) {
          display: flex;
        }
      }

      .trendingStructure {
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 8px 8px 16px 16px;
        align-items: flex-end;
        gap: 46px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @media (min-width: 768px) {
          padding: 16px 24px 24px 24px;
          gap: 106px;
        }

        .bookmarkTrend {
          width: 32px;
          height: 32px;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(6, 0, 27, 0.501);
          z-index: 2;
          cursor: pointer;
        }

        .TrendTitleDiv {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          .infoTrand {
            width: 100%;
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
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              opacity: 0.75;
              @media (min-width: 768px) {
                font-size: 15px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
              }
            }

            .dot {
              width: 3px;
              height: 3px;
            }

            .movieSerielog {
              width: 12px;
              height: 12px;
            }
          }

          h2 {
            color: #fff;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            @media (min-width: 768px) {
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
          }
        }
      }
    }

    .overlay {
      display: none;
      position: absolute;
      justify-content: center;
      align-items: center;
      cursor: pointer;
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

      .playButton {
        width: 80px;
        height: 30px;
        border-radius: 28.5px;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        background: rgba(255, 255, 255, 0.25);
        @media (min-width: 768px) {
          width: 120px;
          height: 50px;
          gap: 8px;
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
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          @media (min-width: 768px) {
            font-size: 16px;
          }
        }
      }
    }

    .item:hover .overlay {
      display: flex;
    }
  }
`;
export default TrendingEnt;
