import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routers/main-router";

const App = () => {
  return (
    <div className="app">
      <Router>
        <MainRouter />
      </Router>
    </div>
  );
};

export default App;
