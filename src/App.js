import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
