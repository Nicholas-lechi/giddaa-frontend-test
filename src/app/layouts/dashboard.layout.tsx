import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SidebarNav from "./SidebarNav";

const DashboardLayout: React.FC = () => {
  return (
    <Wrapper>
      <SidebarNav />
      <div className="dashboard-children container">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div`
  display: flex;
`;
