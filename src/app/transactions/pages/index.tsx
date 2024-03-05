import React, { useState } from "react";
import styled from "styled-components";
import TranscSumary from "../components/TranscSumary";
import SuccessfulTransac from "../components/SuccessfulTransac";
import ExpectedTransac from "../components/ExpectedTransac";
import DefualtTransac from "../components/DefualtTransac";

const Transactions: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <Wrapper>
      <div className="transactions container mt-5">
        <div className="d-flex justify-content-between align-items-center">
          {tabIndex === 4 ? (
            <h1 className="heading m-0">Transactions</h1>
          ) : (
            <h1 className="heading m-0">Transactions & Earnings</h1>
          )}

          <div className="notification">
            <small className="count">2</small>
            <i className="fa-regular fa-bell"></i>
          </div>
        </div>
        <p className="mb-4  ">
          View all your transactions and how much you have earned from customers
        </p>
        <div className="tabs-container">
          <div className="d-flex fs-2 tab">
            {tabs.map((tab) => (
              <p
                className={`${tab.tab === tabIndex ? "active" : ""} m-0`}
                onClick={() => setTabIndex(tab.tab)}
              >
                {tab.name}
              </p>
            ))}
          </div>
        </div>
        <div className="tab-content mt-4">
          {tabIndex === 1 ? (
            <div className="sumary ">
              <TranscSumary />
            </div>
          ) : tabIndex === 2 ? (
            <div>
              <SuccessfulTransac />
            </div>
          ) : tabIndex === 3 ? (
            <div>
              <ExpectedTransac />
            </div>
          ) : (
            tabIndex === 4 && (
              <div>
                <DefualtTransac />
              </div>
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Transactions;

const Wrapper = styled.div`
  .transactions {
    .d-flex {
      .heading {
        font-family: Millik;
        font-size: 40px;
      }
      .notification {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #335f32;
        i {
          color: white;
          font-size: 20px;
        }
        .count {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 7px;
          left: 2.1rem;
          background: white;
          color: #335f32;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          font-weight: bold;
        }
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        .heading {
          font-size: 22px;
        }
        .notification {
          width: 45px;
          height: 45px;
          i {
            color: white;
            font-size: 16px;
          }
          .count {
            width: 10px;
            height: 10px;
            font-size: 8px;
            top: 10px;
            left: 1.7rem;
          }
        }
      }
    }
    p {
      font-size: 16px;
    }
    .tabs-container {
      .tab {
        gap: 1rem;
        border-bottom: 1px solid #dedede;

        .m-0 {
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
        }
        .active {
          color: #335f32;
          border-bottom: 2px solid #335f32;
        }
      }
      @media screen and (max-width: 900px) {
        overflow-x: scroll;
        padding: 0;
        margin: 0;
        .tab {
          width: 600px;
          p {
            width: max-content;
          }
        }
        &::-webkit-scrollbar {
          overflow-x: hidden;
        }
      }
    }

    @media screen and (max-width: 920px) {
      .tab {
        width: 100%;
        overflow-x: scroll;
        &::-webkit-scrollbar {
          overflow-x: hidden;
        }
        p {
          display: flex;
          width: 220px;
        }
      }
    }
  }
`;

const tabs = [
  { name: "SUMMARY", tab: 1 },
  { name: "SUCCESSFUL TRANSACTIONS", tab: 2 },
  {
    name: "EXPECTED TRANSACTIONS",
    tab: 3,
  },
  { name: "DEFAULTS", tab: 4 },
];
