import React from "react";
import Navbar from "../components/navbar/Navbar";
import LandingPage from "../components/navbar/landingPage/LandingPage";
import Marquee from "../components/navbar/marquee/Marquee";
import About from "../components/about/About";
import Eyes from "../components/eyes/Eyes";
import Featured from "../components/feautured/Featured";
import Cards from "../components/cards/Cards";
import Footer from "../components/footer/Footer";
import "./style.css";
import Chatbot from "../components/chatbot/Chatbot";

const Home = () => {
  return (
    <div className="app">
      <Navbar />

      <LandingPage />
      <Chatbot />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
