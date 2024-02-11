import React from "react";
import "./style.css";

function Cards() {
  return (
    <div className="main">
      <div className="cardcontainer">
        <div className="card">REUSE</div>
      </div>
      <div id="ok" className="cardcontainer">
        <div className="card2">RECYCLE</div>
        <div className="card2">REDUCE</div>
      </div>
    </div>
  );
}

export default Cards;
