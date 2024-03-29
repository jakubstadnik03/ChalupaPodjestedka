import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import References from "./References";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImageGallery } from "./ImageGallery";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/fotogalerie" element={<ImageGallery />}></Route>
        <Route path="/reference" element={<References />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
