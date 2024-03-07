import React from "react";
import styled from "styled-components";
import { useTransactionStore } from "../../store/transaction.store";
import { formatter } from "../../../utils/helper";

const DefualtTransac: React.FC = () => {
  const { defaultTrans, summary } = useTransactionStore();
  console.log(defaultTrans);
  const defaultbreakdown = [
    {
      value: formatter.format(summary?.expectedEarnings || 0),
      info: "/images/info.png",
      type: "Expected Earnings",
    },
    {
      value: formatter.format(summary?.totalTransactions || 0),
      info: "/images/info.png",
      type: "Total Default Amount",
    },

    {
      value: summary?.totalMissedTransactions,
      info: "/images/info.png",
      type: "Missed Payments",
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

  return (
    <Warpper>
      <div className="expected">
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

      <div className="mt-5">
        <p className="m-0 info ">
          Data on payments that should have beeen made but weren’t and the
          customers who should have paid{" "}
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <p className="m-0 info ">Show all Fields</p>
      </div>

      <div className="table-items">
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {defaultTrans?.data?.map((item, i) => (
              <tr key={i}>
                <td>{item.application.applicationId.slice(0, 4)}</td>
                <td>{item?.customer?.firstName && item?.customer?.lastName}</td>
                <td>{formatter.format(item.amount || 0)}</td>
                <td>{item.transactionType}</td>
                <td>{item.house.type}</td>
                <td>{item.house.cityName}</td>
                <td>{new Date(item.dateOfPayment).toDateString()}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn"
                      style={{
                        all: "unset",
                        cursor: "pointer",
                        padding: "4px",
                      }}
                      type="button"
                      id="dropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis-vertical text-secondary fs-4"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu"
                    >
                      <li className="dropdown-item">VIEW RECEIPT</li>

                      <li className="dropdown-item">DOWNLOAD RECEIPT</li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Warpper>
  );
};

export default DefualtTransac;

const Warpper = styled.div`
  .mt-5 {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;
  }
  .info {
    font-size: 16px;
    font-weight: 600;
  }
  .table-items {
    width: 100%;
    .table {
      border: 2px solid #f0f0f0;
      thead {
        tr {
          th {
            background-color: #f0f0f0;
            z-index: -1;
          }
        }
      }
      tbody {
        tr {
          td {
            padding: 1rem;
          }
        }
      }
    }
    @media screen and (max-width: 920px) {
      overflow-x: scroll;
      .table {
        width: 1000px;
      }
      &::-webkit-scrollbar {
        overflow-x: hidden;
      }
    }
  }
`;

const tableHead = [
  "ID",
  "CUSTOMER",
  "AMOUNT",
  "TYPE",
  "PROPERTY",
  "PLAN",
  "PAYMENT DUE DATE",
  "",
];
