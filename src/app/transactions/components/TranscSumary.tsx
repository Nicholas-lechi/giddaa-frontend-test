import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../../../utils/constant";

const TranscSumary: React.FC = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/developer/transaction/get-summary", {
          headers: {
            Authorization: Cookies.get(TOKEN_NAME),
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <p className="tag">Earnings Breakdown</p>
      <div className="expected">
        {expectedEarn.map((expect) => (
          <div className="content">
            <p className="info">
              <img src={expect.info} alt="" />
            </p>
            <p className="value">{expect.value}</p>
            <small className="type">{expect.type}</small>
          </div>
        ))}
      </div>
      <p className="tag mt-3">Frequency Breakdown</p>
      <div className="frequency">
        {frequency.map((fer) => (
          <div className="content">
            <p className="info d-flex">
              <img src={fer.info} alt="" />
            </p>
            <p className="value  ">{fer.value}</p>
            <small className="type">{fer.type}</small>
          </div>
        ))}
      </div>
      <p className="tag mt-3">Default Breakdown</p>
      <div className="default">
        {defaultbreakdown.map((defaults) => (
          <div className="content">
            <p className="info">
              <img src={defaults.info} alt="" />
            </p>
            <p className="value">{defaults.value}</p>
            <small className="type">{defaults.type}</small>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default TranscSumary;

const Wrapper = styled.div`
  .tag {
    font-size: 16px;
    font-weight: 600;
  }
`;

const frequency = [
  {
    value: "347",
    info: "/images/info.png",
    type: "Expected Number of Transactions",
  },
  {
    value: "234",
    info: "/images/info.png",
    type: "Total Transactions",
  },
  {
    value: "347",
    info: "/images/info.png",
    type: "Number of Transactions Left",
  },
  {
    value: "32",
    info: "/images/info.png",
    type: "Average No of Transaction/ Month",
  },
];
const defaultbreakdown = [
  {
    value: "34",
    info: "/images/info.png",
    type: "Expected Earnings",
  },
  {
    value: "17%",
    info: "/images/info.png",
    type: "Transaction Default Rate",
  },
  {
    value: (
      <p style={{ fontSize: "32px" }}>
        <span className="text-danger " style={{ fontWeight: "bold" }}>
          24{" "}
        </span>
        of 98
      </p>
    ),
    info: "/images/info.png",
    type: "Customers who’ve missed payment",
  },
];
const expectedEarn = [
  {
    value: "N112,000,000",
    info: "/images/info.png",
    type: "Expected Earnings",
  },
  {
    value: "N80,000,000",
    info: "/images/info.png",
    type: "Total Earnings",
  },
  {
    value: "N32,000,000",
    info: "/images/info.png",
    type: "Left To Earn",
  },
  {
    value: "N365,000",
    info: "/images/info.png",
    type: "Average Amount Earned",
  },
];
