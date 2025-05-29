// Routeasy.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Easyca1p100 from "./Rounds/R1/Easyca1p100";
import Easyca1p200 from "./Rounds/R1/Easyca1p200";
import Easyca1p300 from "./Rounds/R1/Easyca1p300";
import Easyca1p400 from "./Rounds/R1/Easyca1p400";
import Easyca2p100 from "./Rounds/R1/Easyca1p100";
import Easyca2p200 from "./Rounds/R1/Easyca1p200";
import Easyca2p300 from "./Rounds/R1/Easyca1p300";
import Easyca2p400 from "./Rounds/R1/Easyca1p400";
import Easyca3p100 from "./Rounds/R1/Easyca3p100";
import Easyca3p200 from "./Rounds/R1/Easyca3p200";
import Easyca3p300 from "./Rounds/R1/Easyca3p300";
import Easyca3p400 from "./Rounds/R1/Easyca3p400";

const Routeasy = () => {
  return (
    <Routes>
      <Route path="Round1/1/100" element={<Easyca1p100 />} />
      <Route path="Round1/1/200" element={<Easyca1p200 />} />
      <Route path="Round1/1/300" element={<Easyca1p300 />} />
      <Route path="Round1/1/400" element={<Easyca1p400 />} />
      <Route path="Round1/2/100" element={<Easyca2p100 />} />
      <Route path="Round1/2/200" element={<Easyca2p200 />} />
      <Route path="Round1/2/300" element={<Easyca2p300 />} />
      <Route path="Round1/2/400" element={<Easyca2p400 />} />
      <Route path="Round1/3/100" element={<Easyca3p100 />} />
      <Route path="Round1/3/200" element={<Easyca3p200 />} />
      <Route path="Round1/3/300" element={<Easyca3p300 />} />
      <Route path="Round1/3/400" element={<Easyca3p400 />} />
    </Routes>
  );
};

export default Routeasy;
