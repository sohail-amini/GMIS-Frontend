import React, { useState } from "react";
import Login from "./components/Login";
import Account from "./components/Account";
import Inventory from "./components/Inventory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
