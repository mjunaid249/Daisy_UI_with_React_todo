import React from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default App;
