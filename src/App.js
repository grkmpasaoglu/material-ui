import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage"; // UserPage'i import ettik

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} /> {/* UserPage rotası */}
      </Routes>
    </Router>
  );
}

export default App;
