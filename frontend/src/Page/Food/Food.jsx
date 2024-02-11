import React from "react";
import "./style.css";
import Formss from "../ewaste/Formss";
import Navbar from "../../components/navbar/Navbar";

const Food = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero">
        <div className="Food-main">
          <div className="food-left">
            <h1>FAIR FOOD FOR ALL</h1>
            <div className="food-down">
              <div className="img-left">
                <img
                  src="https://images.unsplash.com/photo-1591198619986-ac025da6a1f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="info-right">
                <p>
                  Register to become a donor and help someone by not wasting
                  food and giving them to needy
                </p>
              </div>
            </div>
          </div>
          <div className="food-right"></div>
        </div>
        <div className="donate-food">
          <div className="left-heading">
            <h1>How To donate food?</h1>
          </div>
          <div className="right-content">
            <div className="steps">
              <div className="step-left">
                <h3>Step 1</h3>
              </div>
              <div className="step-right">
                <h1>LOGIN TO OUR SYSTEM</h1>
              </div>
            </div>
            <div className="steps">
              <div className="step-left">
                <h3>Step 2</h3>
              </div>
              <div className="step-right">
                <h1>Fill out the Form</h1>
              </div>
            </div>
            <div className="steps">
              <div className="step-left">
                <h3>Step 1</h3>
              </div>
              <div className="step-right">
                <h1>Wait.....</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="intro-head">
            <h1>THE WORLD IS A PEACEFUL PLACE</h1>
          </div>
          <div className="intro-para">
            <p>
              Our initiative aims to address food waste while aiding the
              underprivileged by facilitating the donation of surplus food
              through collaboration with local NGOs.
            </p>
            <ul>
              <li>
                Upon identification of surplus food at any location, individuals
                can utilize our website to promptly notify us and provide
                pertinent details.
              </li>
              <li>
                Following receipt of the information, we will liaise with the
                nearest NGO to arrange for the collection of the surplus food
              </li>
              <li>
                The designated NGO will then proceed to the specified location
                to gather the surplus food items
              </li>
              <li>
                Subsequently, the NGO will undertake the distribution of the
                collected food to disadvantaged and needy individuals within the
                community.
              </li>
            </ul>
          </div>
        </div>
        <Formss></Formss>
      </div>
    </>
  );
};

export default Food;
