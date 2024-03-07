import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../../utils/constant";
interface INavList {
  name: string;
  link: string;
  icon: string;
}

const SidebarNav: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    Cookies.remove(TOKEN_NAME);
    window.location.href = "/login";
  };
  return (
    <Wrapper>
      <button
        className=" btn hambuger"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div
        className={`${showSidebar ? "open" : "close"} sidebar`}
        ref={sidebarRef}
      >
        <div>
          <Link to="/dashboard">
            <img
              height={80}
              width={70}
              src="/images/giddaa.png"
              alt=""
              className="mb-3"
            />
          </Link>
          <nav>
            <ul className="nav flex-column">
              {navList.map((nav, i) => (
                <li className="nav-item" key={i}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav-link"
                    }
                    to={nav.link}
                  >
                    <img height={40} width={30} src={nav.icon} alt="" />
                    {nav.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ul className="nav flex-column bottom">
          <li className="nav-item">
            <button
              className="btn nav-link text-danger d-flex align-items-center"
              onClick={logout}
            >
              Log Out{" "}
              <i className="fa-solid fa-arrow-right-from-bracket text-danger ms-4"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className={`${showSidebar ? "open" : "close"} mobile`}>
        <div className="mobile-inner">
          <div className="w-full" style={{ width: "100%" }}>
            <div className="d-flex close-icon">
              <button
                className="btn"
                onClick={() => setShowSidebar(showSidebar)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <Link to="/dashboard">
              <img
                height={80}
                width={70}
                src="/images/giddaa.png"
                alt=""
                className="mb-3"
              />
            </Link>
            <nav>
              <ul className="nav flex-column">
                {navList.map((nav, i) => (
                  <li
                    className="nav-item"
                    key={i}
                    onClick={() => setShowSidebar(showSidebar)}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "nav-link"
                      }
                      to={nav.link}
                    >
                      <img height={40} width={30} src={nav.icon} alt="" />
                      {nav.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <ul className="nav flex-column bottom">
            <li className="nav-item">
              <button
                className="btn nav-link text-danger d-flex align-items-center"
                onClick={logout}
              >
                Log Out{" "}
                <i className="fa-solid fa-arrow-right-from-bracket text-danger ms-4"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SidebarNav;
const Wrapper = styled.div`
  .sidebar {
    .nav {
      &-item {
        font-weight: bold;
        a,
        .nav-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 11px;
          padding: 0;
          color: #000;
        }
      }
      .active {
        color: #335f32;
      }
    }
  }
  .hambuger {
    display: none;
  }
  @media screen and (max-width: 920px) {
    .sidebar {
      display: none;
    }
    .hambuger {
      display: block;
      position: absolute;
      padding: 1rem;
      i {
        font-size: 20px;
        color: #335f32;
      }
    }
    .mobile {
      display: block;
      position: absolute;
      height: 100vh;
      top: 0;
      z-index: 2;
      &.close {
        left: -1000px;
      }

      &.open {
        left: 0;
      }
      .mobile-inner {
        padding: 1rem 0 1rem 0.5rem;
        height: 100vh;
      }
    }
  }
`;

const navList: INavList[] = [
  {
    name: "TRANSACTIONS & EARNINGS",
    link: "/transactions",
    icon: "/images/earn.png",
  },
];
