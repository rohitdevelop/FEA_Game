import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Level 1 - Category 1
import HadL1ca1p100 from "./level/L1/HadL1ca1p100";
import HadL1ca1p200 from "./level/L1/HadL1ca1p200";
import HadL1ca1p300 from "./level/L1/HadL1ca1p300";
import HadL1ca1p400 from "./level/L1/HadL1ca1p400";

// Level 1 - Category 2
import HadL1ca2p100 from "./level/L1/HadL1ca2p100";
import HadL1ca2p200 from "./level/L1/HadL1ca2p200";
import HadL1ca2p300 from "./level/L1/HadL1ca2p300";
import HadL1ca2p400 from "./level/L1/HadL1ca2p400";

// Level 1 - Category 3
import HadL1ca3p100 from "./level/L1/HadL1ca3p100";
import HadL1ca3p200 from "./level/L1/HadL1ca3p200";
import HadL1ca3p300 from "./level/L1/HadL1ca3p300";
import HadL1ca3p400 from "./level/L1/HadL1ca3p400";

// Level 2 - Category 1
import HadL2ca1p100 from "./level/L2/HadL2ca1p100";
import HadL2ca1p200 from "./level/L2/HadL2ca1p200";
import HadL2ca1p300 from "./level/L2/HadL2ca1p300";
import HadL2ca1p400 from "./level/L2/HadL2ca1p400";

// Level 2 - Category 2
import HadL2ca2p100 from "./level/L2/HadL2ca2p100";
import HadL2ca2p200 from "./level/L2/HadL2ca2p200";
import HadL2ca2p300 from "./level/L2/HadL2ca2p300";
import HadL2ca2p400 from "./level/L2/HadL2ca2p400";

// Level 2 - Category 3
import HadL2ca3p100 from "./level/L2/HadL2ca3p100";
import HadL2ca3p200 from "./level/L2/HadL2ca3p200";
import HadL2ca3p300 from "./level/L2/HadL2ca3p300";
import HadL2ca3p400 from "./level/L2/HadL2ca3p400";

// Level 3 - Category 1
import HadL3ca1p100 from "./level/L3/HadL3ca1p100";
import HadL3ca1p200 from "./level/L3/HadL3ca1p200";
import HadL3ca1p300 from "./level/L3/HadL3ca1p300";
import HadL3ca1p400 from "./level/L3/HadL3ca1p400";

// Level 3 - Category 2
import HadL3ca2p100 from "./level/L3/HadL3ca2p100";
import HadL3ca2p200 from "./level/L3/HadL3ca2p200";
import HadL3ca2p300 from "./level/L3/HadL3ca2p300";
import HadL3ca2p400 from "./level/L3/HadL3ca2p400";

// Level 3 - Category 3
import HadL3ca3p100 from "./level/L3/HadL3ca3p100";
import HadL3ca3p200 from "./level/L3/HadL3ca3p200";
import HadL3ca3p300 from "./level/L3/HadL3ca3p300";
import HadL3ca3p400 from "./level/L3/HadL3ca3p400";

const Routhard = () => {
  return (
    <Routes>
      {/* Level 1 */}
      <Route path="/Hard/1/1/100" element={<HadL1ca1p100 />} />
      <Route path="/Hard/1/1/200" element={<HadL1ca1p200 />} />
      <Route path="/Hard/1/1/300" element={<HadL1ca1p300 />} />
      <Route path="/Hard/1/1/400" element={<HadL1ca1p400 />} />

      <Route path="/Hard/1/2/100" element={<HadL1ca2p100 />} />
      <Route path="/Hard/1/2/200" element={<HadL1ca2p200 />} />
      <Route path="/Hard/1/2/300" element={<HadL1ca2p300 />} />
      <Route path="/Hard/1/2/400" element={<HadL1ca2p400 />} />

      <Route path="/Hard/1/3/100" element={<HadL1ca3p100 />} />
      <Route path="/Hard/1/3/200" element={<HadL1ca3p200 />} />
      <Route path="/Hard/1/3/300" element={<HadL1ca3p300 />} />
      <Route path="/Hard/1/3/400" element={<HadL1ca3p400 />} />

      {/* Level 2 */}
      <Route path="/Hard/2/1/100" element={<HadL2ca1p100 />} />
      <Route path="/Hard/2/1/200" element={<HadL2ca1p200 />} />
      <Route path="/Hard/2/1/300" element={<HadL2ca1p300 />} />
      <Route path="/Hard/2/1/400" element={<HadL2ca1p400 />} />

      <Route path="/Hard/2/2/100" element={<HadL2ca2p100 />} />
      <Route path="/Hard/2/2/200" element={<HadL2ca2p200 />} />
      <Route path="/Hard/2/2/300" element={<HadL2ca2p300 />} />
      <Route path="/Hard/2/2/400" element={<HadL2ca2p400 />} />

      <Route path="/Hard/2/3/100" element={<HadL2ca3p100 />} />
      <Route path="/Hard/2/3/200" element={<HadL2ca3p200 />} />
      <Route path="/Hard/2/3/300" element={<HadL2ca3p300 />} />
      <Route path="/Hard/2/3/400" element={<HadL2ca3p400 />} />

      {/* Level 3 */}
      <Route path="/Hard/3/1/100" element={<HadL3ca1p100 />} />
      <Route path="/Hard/3/1/200" element={<HadL3ca1p200 />} />
      <Route path="/Hard/3/1/300" element={<HadL3ca1p300 />} />
      <Route path="/Hard/3/1/400" element={<HadL3ca1p400 />} />

      <Route path="/Hard/3/2/100" element={<HadL3ca2p100 />} />
      <Route path="/Hard/3/2/200" element={<HadL3ca2p200 />} />
      <Route path="/Hard/3/2/300" element={<HadL3ca2p300 />} />
      <Route path="/Hard/3/2/400" element={<HadL3ca2p400 />} />

      <Route path="/Hard/3/3/100" element={<HadL3ca3p100 />} />
      <Route path="/Hard/3/3/200" element={<HadL3ca3p200 />} />
      <Route path="/Hard/3/3/300" element={<HadL3ca3p300 />} />
      <Route path="/Hard/3/3/400" element={<HadL3ca3p400 />} />
    </Routes>
  );
};

export default Routhard;
