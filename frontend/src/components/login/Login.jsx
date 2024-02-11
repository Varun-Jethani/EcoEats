import React, { useState } from "react";
import "./sttle.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Login = ({ data, onTabChange }) => {
  const navigate = useNavigate();
  const onNew = () => {
    console.log("works");
    navigate("/Register");
  };
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="apps">
      <h1>LOG IN</h1>
      <div className="Container">
        <div className="up">
          <div className="switchingTabs">
            <div className="tabItems">
              {data.map((tab, index) => (
                <span
                  key={index}
                  className={`tabItem ${
                    selectedTab === index ? "active" : ""
                  } `}
                  onClick={() => {
                    activeTab(tab, index);
                  }}
                >
                  {tab}
                </span>
              ))}
              <span className="movingBg" style={{ left }}></span>
            </div>
          </div>
        </div>
        <div className="input">
          <input type="email" name="email" placeholder=" Email" id="email" />
          <input type="password" name="" placeholder="Password" id="pass" />
          <button>Submit</button>
          <h3 onClick={() => onNew()}>New? Click here</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
