import React from "react";
import "./style.css";
export default function About() {
  return (
    <>
      <div className="about-main">
        <h1>
          "Welcome to our waste management website, where sustainability meets
          innovation. Discover eco-friendly solutions to reduce waste and
          safeguard our planet for future generations. Join us in creating a
          cleaner, greener tomorrow."
        </h1>
      </div>
      <div className="about-section">
        <div className="left">
          <h1>What you can expect</h1>
        </div>
        <div className="right">
          <div className="info">
            <h1>
              On our website, you can expect a comprehensive guide to effective
              waste management strategies tailored to your needs. Explore
              informative articles, practical tips, and resources to minimize
              waste and maximize environmental stewardship
            </h1>
            <h1>
              Join a community dedicated to fostering sustainable practices and
              making a positive impact on our planet.
            </h1>
          </div>
          <div className="links">
            <h1>Links:</h1>
            <div className="list">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="approach">
        <div className="left">
          <h1>Our Approach</h1>
          <button>
            Read More <div className="inbutton"> </div>
          </button>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
