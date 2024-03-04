import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/page/home.index";
import DashboardLayout from "./layouts/dashboard.layout";
import Transactions from "./components/Transactions";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
