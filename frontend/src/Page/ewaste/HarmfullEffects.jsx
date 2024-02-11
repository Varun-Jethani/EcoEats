import React from "react";

const HarmfullEffects = () => {
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
          <h1>Harmful Effects</h1>
          <ul typeof="rounded">
            <li>
              Toxic Chemicals: E-waste contains hazardous substances like lead,
              mercury, and cadmium.
            </li>
            <li>
              Exposure Risks: Improper disposal exposes people to respiratory,
              neurological, and reproductive health risks.
            </li>
            <li>
              Environmental Pollution: Toxic substances leach into soil and
              water, contaminating ecosystems.
            </li>
            <li>
              Air Pollution: Open burning releases harmful fumes and particulate
              matter, contributing to respiratory problems.
            </li>
            <li>
              Dumping Grounds: Developing countries, including India, often
              receive e-waste from developed nations, exacerbating local
              environmental and health problems.
            </li>
            <li>
              Occupational Hazards: Workers in informal recycling sectors face
              risks due to exposure to hazardous chemicals.
            </li>
            <li>
              Global Impact: E-waste generates a global problem, affecting
              ecosystems and health worldwide.
            </li>
          </ul>
        </div>
        <div className="card-right">
          <img
            src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HarmfullEffects;
