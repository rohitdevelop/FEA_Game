import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/home/Navbar";
import Home from "./Components/home/Home";
import Particles from "./Components/home/Particles";
import Rounde1 from "./Components/easy/Round1";
import Rounde2 from "./Components/easy/Round2";
import Rounde3 from "./Components/easy/Round3";
import Routeasy from "./Components/easy/Routeasy";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Particles />}></Route>
          
          <Route path="/easy/round1" element={<Rounde1 />}></Route>
          <Route path="/easy/round2" element={<Rounde2 />}></Route>
          <Route path="/easy/round3" element={<Rounde3 />}></Route>
          <Route path="/easy/*" element={<Routeasy />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
