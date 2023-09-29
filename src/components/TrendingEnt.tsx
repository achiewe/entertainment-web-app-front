import styled from "styled-components";
import fullBookTrend from "../../public/assets/icon-bookmark-full.svg";
import emptyBookTrend from "../../public/assets/icon-bookmark-empty.svg";
import dotSvg from "../../public/assets/Oval.svg";
import serieSvgTrend from "../../public/assets/icon-nav-tv-series.svg";
import movieSvgTrend from "../../public/assets/icon-nav-movies.svg";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux";

const TrendingEnt = (): JSX.Element => {
  const [width, setWidth] = useState<number | undefined>(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const enjoyment = useSelector(
    (ent: RootState) => ent.entertainment.entertainment
  );

  console.log("i am", enjoyment);
  const isTrendFilter = enjoyment.filter((enjoy) => enjoy.isTrending === true);

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
      <h2> Trending</h2>
      {width !== undefined && (
        <motion.div
          ref={carousel}
          className="carousel"
          whileDrag={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -930 }}
            className="innerCarousel"
          >
            {isTrendFilter.map((trend) => (
              <motion.div className="item" key={trend._id}>
                <img
                  className="ImgTrend"
                  src={trend.thumbnail.trending.small}
                />

                <div className="trendingStructure">
                  <div className="bookmarkTrend">
                    <img
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

  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
  }

  .carousel {
    cursor: grab;
    overflow-x: hidden;
    background-color: #10141e;

    .innerCarousel {
      display: flex;
      background-color: #10141e;
      gap: 12px;
    }

    .item {
      width: 240px;
      height: 140px;
      border-radius: 8px;
      position: relative;

      .ImgTrend {
        width: 100%;
        height: 100%;
        border-radius: 8px;
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

        .bookmarkTrend {
          width: 32px;
          height: 32px;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(6, 0, 27, 0.501);
          z-index: 2;
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

            h4 {
              color: #fff;
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              opacity: 0.75;
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
          }
        }
      }
    }
  }
`;
export default TrendingEnt;
