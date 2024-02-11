import React from "react";

const Solution = () => {
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
          <h1>Solution</h1>
          <ul typeof="rounded">
            <li>
              Establish Recycling Programs: Set up e-waste recycling programs to
              encourage proper disposal and recycling of electronic devices.
            </li>
            <li>
              Promote Extended Producer Responsibility (EPR): Hold manufacturers
              accountable for managing the end-of-life of their products through
              policies like EPR.
            </li>
            <li>
              Raise Awareness: Educate the public about the importance of proper
              e-waste management and the benefits of recycling.
            </li>
            <li>
              Encourage Circular Economy: Promote practices that reuse,
              refurbish, and recycle electronics to minimize waste generation.
            </li>
            <li>
              Support Informal Sector: Provide support and training to workers
              in the informal e-waste recycling sector to improve safety
              standards.
            </li>
            <li>
              Invest in Research: Support research and innovation to develop
              sustainable e-waste management technologies and processes.
            </li>
            <li>
              Encourage Responsible Consumption: Encourage consumers to make
              informed choices about electronic products and practice
              responsible disposal.
            </li>
          </ul>
        </div>
        <div className="card-right">
          <img
            src="https://images.unsplash.com/photo-1561064041-38db54d8c63d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
