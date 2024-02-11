import React, { useState, useEffect } from "react";
import "./sttle.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios"; //

const Register = ({ data, onTabChange }) => {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const sendOTP = async () => {
    try {
      const response = await axios.post("/send-otp", { phoneNumber });
      console.log(response.data.requestId);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    try {
      const reponse = await axios.post("/verify-otp", {
        requestId: "REQUEST_ID_FROM_SEND_OTP",
        code: verificationCode,
      });
      console.log(response.data);
      if (response.data.status == "0") {
        registerUser();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post("/register", {
        email,
        password,
        phoneNumber,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //

  const navigate = useNavigate();
  const onNew = () => {
    navigate("/Login");
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
      <h1>REGISTER</h1>
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
          <input
            type="email"
            name="email"
            placeholder=" Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            value={phoneNumber}
            placeholder="num"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p>
            Verify your number <button onClick={sendOTP}>Send OTP</button>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button onClick={verifyOTP}>Check</button>
          </p>
          <input
            type="password"
            name=""
            placeholder="Password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={registerUser}>Submit</button>
          <h3 onClick={() => onNew()}>Already A User? Sign In</h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
