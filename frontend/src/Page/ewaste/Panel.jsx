import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useScroll } from "framer-motion";

const Panel = () => {
  const ref = useRef(null);
  useScroll({
    target: ".panel-screen",
    offset: ["1,1", "1.33 1"],
  });
  return (
    <div className="panel-screen">
      <div className="panel-left">
        <h1>Environmental Pollution:</h1>
      </div>
      <div className="panel-right"></div>
    </div>
  );
};

export default Panel;
