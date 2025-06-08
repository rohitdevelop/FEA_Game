import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Level 1
import InterL1ca1p100 from "./level/L1/InterL1ca1p100";
import InterL1ca1p200 from "./level/L1/InterL1ca1p200";
import InterL1ca1p300 from "./level/L1/InterL1ca1p300";
import InterL1ca1p400 from "./level/L1/InterL1ca1p400";
import InterL1ca2p100 from "./level/L1/InterL1ca2p100";
import InterL1ca2p200 from "./level/L1/InterL1ca2p200";
import InterL1ca2p300 from "./level/L1/InterL1ca2p300";
import InterL1ca2p400 from "./level/L1/InterL1ca2p400";
import InterL1ca3p100 from "./level/L1/InterL1ca3p100";
import InterL1ca3p200 from "./level/L1/InterL1ca3p200";
import InterL1ca3p300 from "./level/L1/InterL1ca3p300";
import InterL1ca3p400 from "./level/L1/InterL1ca3p400";

// Level 2
import InterL2ca1p100 from "./level/L2/InterL2ca1p100";
import InterL2ca1p200 from "./level/L2/InterL2ca1p200";
import InterL2ca1p300 from "./level/L2/InterL2ca1p300";
import InterL2ca1p400 from "./level/L2/InterL2ca1p400";
import InterL2ca2p100 from "./level/L2/InterL2ca2p100";
import InterL2ca2p200 from "./level/L2/InterL2ca2p200";
import InterL2ca2p300 from "./level/L2/InterL2ca2p300";
import InterL2ca2p400 from "./level/L2/InterL2ca2p400";
import InterL2ca3p100 from "./level/L2/InterL2ca3p100";
import InterL2ca3p200 from "./level/L2/InterL2ca3p200";
import InterL2ca3p300 from "./level/L2/InterL2ca3p300";
import InterL2ca3p400 from "./level/L2/InterL2ca3p400";

// Level 3
import InterL3ca1p100 from "./level/L3/InterL3ca1p100";
import InterL3ca1p200 from "./level/L3/InterL3ca1p200";
import InterL3ca1p300 from "./level/L3/InterL3ca1p300";
import InterL3ca1p400 from "./level/L3/InterL3ca1p400";
import InterL3ca2p100 from "./level/L3/InterL3ca2p100";
import InterL3ca2p200 from "./level/L3/InterL3ca2p200";
import InterL3ca2p300 from "./level/L3/InterL3ca2p300";
import InterL3ca2p400 from "./level/L3/InterL3ca2p400";
import InterL3ca3p100 from "./level/L3/InterL3ca3p100";
import InterL3ca3p200 from "./level/L3/InterL3ca3p200";
import InterL3ca3p300 from "./level/L3/InterL3ca3p300";
import InterL3ca3p400 from "./level/L3/InterL3ca3p400";

const Routinter = () => {
  return (
    <Routes>
      {/* Level 1 */}
      <Route path="/Inter/1/1/100" element={<InterL1ca1p100 />} />
      <Route path="/Inter/1/1/200" element={<InterL1ca1p200 />} />
      <Route path="/Inter/1/1/300" element={<InterL1ca1p300 />} />
      <Route path="/Inter/1/1/400" element={<InterL1ca1p400 />} />
      <Route path="/Inter/1/2/100" element={<InterL1ca2p100 />} />
      <Route path="/Inter/1/2/200" element={<InterL1ca2p200 />} />
      <Route path="/Inter/1/2/300" element={<InterL1ca2p300 />} />
      <Route path="/Inter/1/2/400" element={<InterL1ca2p400 />} />
      <Route path="/Inter/1/3/100" element={<InterL1ca3p100 />} />
      <Route path="/Inter/1/3/200" element={<InterL1ca3p200 />} />
      <Route path="/Inter/1/3/300" element={<InterL1ca3p300 />} />
      <Route path="/Inter/1/3/400" element={<InterL1ca3p400 />} />

      {/* Level 2 */}
      <Route path="/Inter/2/1/100" element={<InterL2ca1p100 />} />
      <Route path="/Inter/2/1/200" element={<InterL2ca1p200 />} />
      <Route path="/Inter/2/1/300" element={<InterL2ca1p300 />} />
      <Route path="/Inter/2/1/400" element={<InterL2ca1p400 />} />
      <Route path="/Inter/2/2/100" element={<InterL2ca2p100 />} />
      <Route path="/Inter/2/2/200" element={<InterL2ca2p200 />} />
      <Route path="/Inter/2/2/300" element={<InterL2ca2p300 />} />
      <Route path="/Inter/2/2/400" element={<InterL2ca2p400 />} />
      <Route path="/Inter/2/3/100" element={<InterL2ca3p100 />} />
      <Route path="/Inter/2/3/200" element={<InterL2ca3p200 />} />
      <Route path="/Inter/2/3/300" element={<InterL2ca3p300 />} />
      <Route path="/Inter/2/3/400" element={<InterL2ca3p400 />} />

      {/* Level 3 */}
      <Route path="/Inter/3/1/100" element={<InterL3ca1p100 />} />
      <Route path="/Inter/3/1/200" element={<InterL3ca1p200 />} />
      <Route path="/Inter/3/1/300" element={<InterL3ca1p300 />} />
      <Route path="/Inter/3/1/400" element={<InterL3ca1p400 />} />
      <Route path="/Inter/3/2/100" element={<InterL3ca2p100 />} />
      <Route path="/Inter/3/2/200" element={<InterL3ca2p200 />} />
      <Route path="/Inter/3/2/300" element={<InterL3ca2p300 />} />
      <Route path="/Inter/3/2/400" element={<InterL3ca2p400 />} />
      <Route path="/Inter/3/3/100" element={<InterL3ca3p100 />} />
      <Route path="/Inter/3/3/200" element={<InterL3ca3p200 />} />
      <Route path="/Inter/3/3/300" element={<InterL3ca3p300 />} />
      <Route path="/Inter/3/3/400" element={<InterL3ca3p400 />} />
    </Routes>
  );
};

export default Routinter;
