import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/home/Navbar";
import Home from "./Components/home/Home";
import Particles from "./Components/home/Particles";
import Rounde1 from "./Components/easy/Round1";
import Rounde2 from "./Components/easy/Round2";
import Rounde3 from "./Components/easy/Round3";
import Routeasy from "./Components/easy/Routeasy";

import Roundinter1 from "./Components/intermediate/Roundinter1";
import Roundinter2 from "./Components/intermediate/Roundinter2";
import Roundinter3 from "./Components/intermediate/Roundinter3";

import RoundHard1 from "./Components/hard/RoundHard1";
import RoundHard2 from "./Components/hard/RoundHard2";
import RoundHard3 from "./Components/hard/RoundHard3";

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

          <Route path="/Intermediate/Round1" element={<Roundinter1 />}></Route>
          <Route path="/Intermediate/Round2" element={<Roundinter2 />}></Route>
          <Route path="/Intermediate/Round3" element={<Roundinter3 />}></Route>

          <Route path="/Hard/Round1" element={<RoundHard1 />}></Route>
          <Route path="/Hard/Round2" element={<RoundHard2 />}></Route>
          <Route path="/Hard/Round3" element={<RoundHard3 />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
