
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./sections/Home";
import Journey from "./sections/Journey";
import Education from "./sections/Education";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
