import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { BuildingViewer } from "./components/BuildingViewer";
import { LoginForm } from "./components/LoginForm";
import { MapViewer } from "./components/MapViewer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/building" element={<BuildingViewer />} />
        <Route path="/map" element={<MapViewer />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
