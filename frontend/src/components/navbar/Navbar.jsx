import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import img from "./eco2.png";
const Navbar = () => {
  const navigate = useNavigate();
  const onNewLink = (e) => {
    const link = e.target.innerHTML;
    if (link === "E-Waste") {
      console.log("ol");
      navigate("/E-waste");
    } else if (link === "Food-Waste") {
      navigate("/Food-Waste");
    } else if (link === "About") {
      navigate("/About");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="nav">
      <div className="logo">
        <img
          onClick={(e) => {
            onNewLink(e);
          }}
          src={img}
          alt=""
        />
      </div>
      <div className="links">
        {["E-Waste", "Food-Waste", "About"].map((item, index) => (
          <a
            onClick={(e) => {
              onNewLink(e);
            }}
            key={index}
            className={`a-link ${index === 4 && "ml-12"}`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
