import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import DashboardTwo from "./pages/DashboardTwo";
import DashboarThree from "./pages/DashboarThree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/dashboardtwo" element={<DashboardTwo />} />
        <Route path="/dashboardthree" element={<DashboarThree />} />
      </Routes>
    </Router>
  );
}

export default App;
