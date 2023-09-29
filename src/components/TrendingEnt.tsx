import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";

const TrendingEnt = (): JSX.Element => {
  const [width, setWidth] = useState<number | undefined>(0);
  const carousel = useRef<HTMLDivElement | null>(null);

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
      <motion.div
        ref={carousel}
        className="carousel"
        whileDrag={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 2000, left: -width! }} // Use the non-null assertion operator (!) here
          className="innerCarousel"
        >
          <motion.div className="item">1</motion.div>
          <motion.div className="item">2</motion.div>
          <motion.div className="item">3</motion.div>
          <motion.div className="item">4</motion.div>
          <motion.div className="item">5</motion.div>
        </motion.div>
      </motion.div>
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
    background-color: white;

    .innerCarousel {
      display: flex;
      background-color: #10141e;
      gap: 12px;
    }

    .item {
      min-width: 240px;
      min-height: 70px;
      background-color: red;
      padding: 40px;
      border-radius: 8px;
    }
  }
`;
export default TrendingEnt;
