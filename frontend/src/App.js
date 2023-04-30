import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/homepage";
import Home from "./pages/home";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/form" element={<Homepage />} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
