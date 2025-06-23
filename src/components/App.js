import React from 'react';
import { route } from 'react-router-dom';
import Home from './Home.jsx';
import Timed from './Timed.jsx';
import Sec from './Sec.jsx';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/timed" element={<Timed />} />
      <Route path="/Sec" element={<Sec />} />
    </Routes>
  );
}

export default App;
