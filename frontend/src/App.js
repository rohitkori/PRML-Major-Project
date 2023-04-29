import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/homepage";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
