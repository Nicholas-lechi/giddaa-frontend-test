import React from "react";
import styled from "styled-components";

const DashboardHome: React.FC = () => {
  return (
    <Wrapper>
      <div className="dashboard-home container">DashboardHome</div>
    </Wrapper>
  );
};

export default DashboardHome;

const Wrapper = styled.div`
  .dashboard-home {
    font-family: Millik;
    font-size: 24px;
    margin-top: 5rem;
  }
`;
