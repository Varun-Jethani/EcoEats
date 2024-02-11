import React from "react";
import "./style.css";
import { FaArrowUpLong } from "react-icons/fa6";
import styles from "./LandingPage.module.css";
import { motion } from "framer-motion";
import image from "./dustbin.jpeg";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className={styles.Main}
    >
      <div className="textStructure">
        {["WE DUMP", "WE REUSE", "WE RECYCLE"].map((item, index) => {
          return (
            <div className="masker">
              <div className="inside">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                    className="w-[9vw] h-[5vw]"
                  >
                    <img src={image} alt="" />
                  </motion.div>
                )}
                <h1>{item}</h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="line">
        {["For Public", "For Government"].map((item, index) => {
          return <p>{item}</p>;
        })}

        <div className="start">
          <div className="text">Start With Us</div>
          <div className="circle">
            <span className="arrow">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
