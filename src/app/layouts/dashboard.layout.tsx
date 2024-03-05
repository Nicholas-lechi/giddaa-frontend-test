import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SidebarNav from "./SidebarNav";

const DashboardLayout: React.FC = () => {
  return (
    <Wrapper>
      <div className="dashboard-main">
        <SidebarNav />
        <div className="dashboard-children container">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div``;
