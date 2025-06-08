// Routeasy.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Round 1
import Easyca1p100 from "./Rounds/R1/Easyca1p100";
import Easyca1p200 from "./Rounds/R1/Easyca1p200";
import Easyca1p300 from "./Rounds/R1/Easyca1p300";
import Easyca1p400 from "./Rounds/R1/Easyca1p400";
import Easyca2p100 from "./Rounds/R1/Easyca2p100";
import Easyca2p200 from "./Rounds/R1/Easyca2p200";
import Easyca2p300 from "./Rounds/R1/Easyca2p300";
import Easyca2p400 from "./Rounds/R1/Easyca2p400";
import Easyca3p100 from "./Rounds/R1/Easyca3p100";
import Easyca3p200 from "./Rounds/R1/Easyca3p200";
import Easyca3p300 from "./Rounds/R1/Easyca3p300";
import Easyca3p400 from "./Rounds/R1/Easyca3p400";

// Round 2
import R2Esyca1p100 from "./Rounds/R2/R2Esyca1p100";
import R2Esyca1p200 from "./Rounds/R2/R2Esyca1p200";
import R2Esyca1p300 from "./Rounds/R2/R2Esyca1p300";
import R2Esyca1p400 from "./Rounds/R2/R2Esyca1p400";
import R2Esyca2p100 from "./Rounds/R2/R2Esyca2p100";
import R2Esyca2p200 from "./Rounds/R2/R2Esyca2p200";
import R2Esyca2p300 from "./Rounds/R2/R2Esyca2p300";
import R2Esyca2p400 from "./Rounds/R2/R2Esyca2p400";
import R2Esyca3p100 from "./Rounds/R2/R2Esyca3p100";
import R2Esyca3p200 from "./Rounds/R2/R2Esyca3p200";
import R2Esyca3p300 from "./Rounds/R2/R2Esyca3p300";
import R2Esyca3p400 from "./Rounds/R2/R2Esyca3p400";

// Round 3
import R3Esyca1p100 from "./Rounds/R3/R3Esyca1p100";
import R3Esyca1p200 from "./Rounds/R3/R3Esyca1p200";
import R3Esyca1p300 from "./Rounds/R3/R3Esyca1p300";
import R3Esyca1p400 from "./Rounds/R3/R3Esyca1p400";
import R3Esyca2p100 from "./Rounds/R3/R3Esyca2p100";
import R3Esyca2p200 from "./Rounds/R3/R3Esyca2p200";
import R3Esyca2p300 from "./Rounds/R3/R3Esyca2p300";
import R3Esyca2p400 from "./Rounds/R3/R3Esyca2p400";
import R3Esyca3p100 from "./Rounds/R3/R3Esyca3p100";
import R3Esyca3p200 from "./Rounds/R3/R3Esyca3p200";
import R3Esyca3p300 from "./Rounds/R3/R3Esyca3p300";
import R3Esyca3p400 from "./Rounds/R3/R3Esyca3p400";

const Routeasy = () => {
  return (
    <Routes>
      {/* Round 1 */}
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

      {/* Round 2 */}
      <Route path="Round2/1/100" element={<R2Esyca1p100 />} />
      <Route path="Round2/1/200" element={<R2Esyca1p200 />} />
      <Route path="Round2/1/300" element={<R2Esyca1p300 />} />
      <Route path="Round2/1/400" element={<R2Esyca1p400 />} />
      <Route path="Round2/2/100" element={<R2Esyca2p100 />} />
      <Route path="Round2/2/200" element={<R2Esyca2p200 />} />
      <Route path="Round2/2/300" element={<R2Esyca2p300 />} />
      <Route path="Round2/2/400" element={<R2Esyca2p400 />} />
      <Route path="Round2/3/100" element={<R2Esyca3p100 />} />
      <Route path="Round2/3/200" element={<R2Esyca3p200 />} />
      <Route path="Round2/3/300" element={<R2Esyca3p300 />} />
      <Route path="Round2/3/400" element={<R2Esyca3p400 />} />

      {/* Round 3 */}
      <Route path="Round3/1/100" element={<R3Esyca1p100 />} />
      <Route path="Round3/1/200" element={<R3Esyca1p200 />} />
      <Route path="Round3/1/300" element={<R3Esyca1p300 />} />
      <Route path="Round3/1/400" element={<R3Esyca1p400 />} />
      <Route path="Round3/2/100" element={<R3Esyca2p100 />} />
      <Route path="Round3/2/200" element={<R3Esyca2p200 />} />
      <Route path="Round3/2/300" element={<R3Esyca2p300 />} />
      <Route path="Round3/2/400" element={<R3Esyca2p400 />} />
      <Route path="Round3/3/100" element={<R3Esyca3p100 />} />
      <Route path="Round3/3/200" element={<R3Esyca3p200 />} />
      <Route path="Round3/3/300" element={<R3Esyca3p300 />} />
      <Route path="Round3/3/400" element={<R3Esyca3p400 />} />
    </Routes>
  );
};

export default Routeasy;
