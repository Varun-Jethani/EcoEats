import React from "react";

import styles from "./Marquee.module.css";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className={styles.main}
    >
      <div className={styles.txt}>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
          We are AntiWaste
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
          We are AntiWaste
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
          We are AntiWaste
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
