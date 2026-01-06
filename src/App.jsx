import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import CustomCursor from "./Component/CustomCursor";

import "./app.css"; // ✅ FIXED

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Cursor only for desktop */}
      <CustomCursor />

      {/* Routing */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
