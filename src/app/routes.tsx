import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/page/home.index";
import DashboardLayout from "./layouts/dashboard.layout";
import DashboardHome from "./components/DashboardHome";
import Transactions from "./transactions/pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" index element={<DashboardHome />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
