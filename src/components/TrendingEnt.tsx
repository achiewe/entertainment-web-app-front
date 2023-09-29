import styled from "styled-components";
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
              <motion.div className="item">
                <img
                  className="ImgTrend"
                  src={trend.thumbnail.trending.small}
                />
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
      min-width: 240px;
      min-height: 140px;
      border-radius: 8px;

      .ImgTrend {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
`;
export default TrendingEnt;
