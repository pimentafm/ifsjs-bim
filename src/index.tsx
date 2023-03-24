import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyAp1x3dNBPlzPiWC52x4RC0fXSiGy8YBdE",
  authDomain: "ifcjs-bim.firebaseapp.com",
  projectId: "ifcjs-bim",
  storageBucket: "ifcjs-bim.appspot.com",
  messagingSenderId: "90810159860",
  appId: "1:90810159860:web:07f91e418ea7b9f04984a1",
};

initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
