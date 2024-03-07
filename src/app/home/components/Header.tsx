import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../../../utils/constant";

interface INavList {
  name: string;
  link: string;
}

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenu(false);
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
      <div className="header">
        <div className="header-inner container">
          <Link to="/" className="logo">
            <img src="/images/giddaa.png" alt="" />
          </Link>
          <div className="form-group">
            <input
              type="search"
              placeholder="Search For Properties, Developers, Banks"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul className="nav ">
            {navList.map((nav, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                  to={nav.link}
                >
                  {nav.name}
                  <small className="dot"></small>
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="btn login">
            <Link to="/login">Login</Link>
          </button>
          <div className="notification">
            <small className="count">2</small>
            <i className="fa-regular fa-bell"></i>
          </div>
          <button className=" btn hambuger" onClick={() => setMenu(!menu)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      <div className={`mobile ${menu ? "open" : "close"}`} ref={menuRef}>
        <div className="mobile-inner ">
          <div className="w-full" style={{ width: "100%" }}>
            <div className="d-flex close-icon">
              <button className="btn" onClick={() => setMenu(!menu)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <Link to="/" className="mb-5">
              <img
                height={80}
                width={70}
                src="/images/giddaa.png"
                alt=""
                className=""
              />
            </Link>
            <ul className="nav mt-5">
              {navList.map((nav, i) => (
                <li className="nav-item" key={i} onClick={() => setMenu(false)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav-link"
                    }
                    to={nav.link}
                  >
                    {nav.name}
                    <small className="dot"></small>
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className="btn logn">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <button className=" btn btn-danger" onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  .header {
    &-inner {
      .logo {
        img {
          width: 4rem;
        }
      }

      .hambuger {
        display: none;
      }

      .form-group {
        display: flex;
        padding: 10px;
        align-items: center;
        gap: 10px;
        width: 30%;
        border-radius: 50px;
        background-color: #ffffff;

        input {
          background-color: #ffffff;
          border: 0;
          width: 100%;
          &:focus,
          :active {
            border: none;
            outline: none;
          }
        }
        i {
          font-size: 20px;
        }
      }
      ul {
        display: flex;
        gap: 1rem;
        li {
          a {
            color: #4b4b4b;
            text-decoration: none;
            font-weight: 400;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3px;
            .dot {
              display: none;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #335f32;
            }
          }
          .active {
            color: #335f32;
            font-weight: bold;
            .dot {
              display: block;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 920px) {
    .header {
      &-inner {
        padding: 8px 4px;
        gap: 1rem;
        .logo {
          img {
            width: 3rem;
          }
        }
        .nav {
          display: none;
        }
        .notification {
          display: none;
        }
        .form-group {
          width: 100%;
          padding: 4px;
        }
        .hambuger {
          display: block;
          /* position: absolute; */
          padding: 1rem;
          i {
            font-size: 20px;
            color: #335f32;
          }
        }
        .login {
          display: none;
        }
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
      &-inner {
        height: 100vh;
      }
    }
  }
`;
const navList: INavList[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Properties",
    link: "/properties",
  },
  {
    name: "Developers",
    link: "/developers",
  },
  {
    name: "Mortgage Banks",
    link: "/bank",
  },
  {
    name: "Consult an Expert",
    link: "/expert",
  },
];
