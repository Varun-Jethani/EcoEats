import React from "react";
import "./style.css";
const CardsContainer = () => {
  return (
    <div className="card-maindiv">
      <div className="cards-container">
        <div className="card-left">
          <div className="squares">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="list">
            <h1>Examples</h1>
            <ul>
              <li>Old or Broken Mobiles</li>
              <li>Outdated Tvs</li>
              <li>Unwanted Tablets</li>
              <li>Damaged Batteries</li>
              <li>Unused Printers</li>
            </ul>
          </div>
        </div>
        <div className="card-main">
          <h1>What is E-Waste</h1>
          <ul typeof="rounded">
            <li>E-waste comprises discarded electronic devices.</li>
            <li>Examples include computers, phones, TVs, and appliances.</li>
            <li>
              Contains hazardous materials harmful to health and environment.
            </li>
            <li>Improper disposal leads to pollution and health risks.</li>
            <li>
              Recycling extracts valuable materials and reduces resource demand.
            </li>
            <li>Regulations aim to manage e-waste responsibly.</li>
            <li>Global issue due to rapid tech advancement and consumption.</li>
          </ul>
        </div>
        <div className="card-right">
          <img
            src="https://imgs.search.brave.com/eudLyJblPAohiWW0aoBPEwvgJmKpMvGwf9HrTX4FuGg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTY1NTMx/My8xMDk5OS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzEwOTk5NTA3/MC1zdG9jay1waG90/by1wYXJ0cy1vZi1v/bGQtb3B0aWNhbC1k/cml2ZXMuanBn"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
