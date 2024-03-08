import React, { useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../axios/axios.config";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  value: {
    value: {
      token: string;
    };
  };
}
const Login: React.FC = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axiosInstance.post<LoginResponse>(
        "/account/login",
        input
      );
      const res = data.value.value.token;

      if (res) {
        Cookies.set(TOKEN_NAME, res);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <div className="login">
        <div className="right">
          <img src="/images/login.png" alt="login" />
        </div>
        <div className="left container">
          <div className="d-flex justify-content-end">
            <button className="btn d-flex back" onClick={() => router("/")}>
              Back <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </button>
          </div>
          <img
            height={80}
            width={70}
            src="/images/giddaa.png"
            alt=""
            className="mb-3"
          />
          <p className="welcome-text">
            Welcome to Giddaa For Primary Mortgage Banks.
          </p>
          <p>
            Create an account to begin receiving mortgage applications from
            Nigerians at home and abroad.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <div className="control ">
                <img src="/images/folder.png" alt="" />
                <input
                  type="text"
                  name="email"
                  className=" "
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <div className="control ">
                <img src="/images/key.png" alt="" />
                <input
                  type="password"
                  name="password"
                  className=" "
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="action">
              <button className="btn" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  .login {
    height: 100vh;
    width: 100%;
    display: flex;
    .right {
      width: 50%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .left {
      padding: 3rem 1rem;
      width: 50%;
      height: 100%;
      .welcome-text {
        color: #335f32;
        font-size: 40px;
        font-family: Millik;
      }
      .back {
        align-items: center;
        border: 1px solid #335f32;
        border-radius: 20px;
        i {
          color: #335f32;
        }
      }
      form {
        margin-top: 1rem;
        .form-group {
          margin-bottom: 1rem;
          label {
            font-weight: 600;
            margin-bottom: 10px;
          }
          .control {
            display: flex;
            padding: 1rem 10px;
            align-items: center;
            gap: 10px;
            border-radius: 20px;
            background-color: #f0f0f0;
            input {
              background-color: #f0f0f0;
              border: 0;
              width: 100%;
              &:focus,
              :active {
                border: none;
                outline: none;
              }
            }
          }
        }
        .action {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          .btn {
            border-radius: 100px;
            background-color: #335f32;
            padding: 1.5rem 5rem;
            color: white;
            font-weight: 600;
          }
        }
      }
    }
    @media screen and (max-width: 920px) {
      .right {
        display: none;
      }
      .left {
        width: 100%;
        .welcome-text {
          font-size: 20px;
        }
        form {
          .action {
            .btn {
              padding: 1rem 3rem;
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
