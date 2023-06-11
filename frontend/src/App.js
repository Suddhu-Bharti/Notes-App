import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/create-notes" element={<CreateNote/>}/>
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
