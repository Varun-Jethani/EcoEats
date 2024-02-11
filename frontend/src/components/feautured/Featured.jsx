import React, { useState } from "react";
import "./style.css";
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="Project">
      <div className="featured">
        <h1>Featured</h1>
      </div>
      <div className="container">
        <div className="cards">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card"
          >
            <h1 className="headings overflow-hidden">
              {" "}
              {"RECYCLE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.2, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="insidecard">
              <img
                src="https://images.unsplash.com/photo-1586041828039-b8d193d6d1dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card"
          >
            <h1 className="heading2">
              {"REUSE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.2, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="insidecard">
              <img
                src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
