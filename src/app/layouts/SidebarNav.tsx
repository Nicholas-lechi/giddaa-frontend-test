import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export interface INavList {
  name: string;
  link: string;
}

const SidebarNav: React.FC = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <nav>
          <ul className="nav flex-column">
            {navList.map((nav, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link" to={nav.link}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="nav flex-column bottom">
          <li className="nav-item">
            <button className="nav-link">Log Out</button>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default SidebarNav;
const Wrapper = styled.div`
  .sidebar {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const navList: INavList[] = [
  { name: "TRANSACTIONS & EARNINGS", link: "/transactions" },
];
