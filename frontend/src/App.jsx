import LocomotiveScroll from "locomotive-scroll";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Ewaste from "./Page/ewaste/Ewaste";
import Food from "./Page/Food/Food";
import About from "./Page/About/About";




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const onTabChange = (tab) => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login data={["User", "Agent"]} onTabChange={onTabChange} />}
        />
        <Route
          path="/Register"
          element={
            <Register data={["User", "Agent"]} onTabChange={onTabChange} />
          }
        />
        <Route path="/E-waste" element={<Ewaste />} />
        <Route path="/Food-Waste" element={<Food />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
