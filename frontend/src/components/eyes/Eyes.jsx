import React, { useEffect, useState } from "react";
import "./style.css";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;

      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
      //   Shery.makeMagnet(".blackcircle" /* Element to target.*/, {
      //     //Parameters are optional.
      //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      //     duration: 1,
      //   });
    });
  });
  return (
    <div className="eyes">
      <div data-scroll data-scroll-speed="-0.7" className="in">
        <div className="eyespart">
          <div className="eye">
            <div className="blackcircle">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="rec"
              >
                <div className="balls"></div>
              </div>
            </div>
          </div>
          <div className="eye">
            <div className="blackcircle">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="rec"
              >
                <div className="balls"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
