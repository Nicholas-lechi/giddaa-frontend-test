import React from "react";
import styled from "styled-components";
import { useTransactionStore } from "../../store/transaction.store";
import { formatter } from "../../../utils/helper";

const TranscSumary: React.FC = () => {
  const { summary } = useTransactionStore();

  const frequency = [
    {
      value: summary?.expectedNumberOfTransactions,
      info: "/images/info.png",
      type: "Expected Number of Transactions",
    },
    {
      value: summary?.totalTransactions,
      info: "/images/info.png",
      type: "Total Transactions",
    },
    {
      value: summary?.numberOfTransactionsLeft,
      info: "/images/info.png",
      type: "Number of Transactions Left",
    },
    {
      value: summary?.averageMonthlyTransactions,
      info: "/images/info.png",
      type: "Average No of Transaction/ Month",
    },
  ];
  const defaultbreakdown = [
    {
      value: formatter.format(summary?.expectedEarnings || 0),
      info: "/images/info.png",
      type: "Expected Earnings",
    },
    {
      value: summary?.transactionDefaultRate,
      info: "/images/info.png",
      type: "Transaction Default Rate",
    },
    {
      value: (
        <p style={{ fontSize: "32px" }}>
          <span className="text-danger " style={{ fontWeight: "bold" }}>
            {summary?.totalMissedTransactions}
          </span>
          of {summary?.totalPaidTransactions}
        </p>
      ),
      info: "/images/info.png",
      type: "Customers who’ve missed payment",
    },
  ];
  const expectedEarn = [
    {
      value: summary?.expectedEarnings,
      info: "/images/info.png",
      type: "Expected Earnings",
    },
    {
      value: summary?.totalEarned,
      info: "/images/info.png",
      type: "Total Earnings",
    },
    {
      value: summary?.leftToEarn,
      info: "/images/info.png",
      type: "Left To Earn",
    },
    {
      value: summary?.averageAmountEarned,
      info: "/images/info.png",
      type: "Average Amount Earned",
    },
  ];

  return (
    <Wrapper>
      <p className="tag">Earnings Breakdown</p>
      <div className="expected">
        {expectedEarn.map((expect, i) => (
          <div className="content" key={i}>
            <p className="info">
              <img src={expect.info} alt="" />
            </p>
            <p className="value">{formatter.format(expect?.value || 0)}</p>
            <small className="type">{expect.type}</small>
          </div>
        ))}
      </div>
      <p className="tag mt-3">Frequency Breakdown</p>
      <div className="frequency">
        {frequency.map((fer, i) => (
          <div className="content" key={i}>
            <p className="info d-flex">
              <img src={fer.info} alt="" />
            </p>
            <p className="value  ">{formatter.format(fer.value || 0)}</p>
            <small className="type">{fer.type}</small>
          </div>
        ))}
      </div>
      <p className="tag mt-3">Default Breakdown</p>
      <div className="default">
        {defaultbreakdown.map((defaults, i) => (
          <div className="content" key={i}>
            <p className="info">
              <img src={defaults.info} alt="" />
            </p>
            <div className="value">{defaults.value}</div>
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
