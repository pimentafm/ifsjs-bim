import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BuildingViewer } from "./components/BuildingViewer";
import { MapViewer } from "./components/MapViewer";

import "./App.css";
import { ContextProvider } from "./middleware/ContextProvider";
import { LoginForm } from "./components/user/LoginForm";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/building" element={<BuildingViewer />} />
          <Route path="/map" element={<MapViewer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
