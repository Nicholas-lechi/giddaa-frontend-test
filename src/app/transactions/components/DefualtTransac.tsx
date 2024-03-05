import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../../../utils/constant";

const DefualtTransac: React.FC = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "/developer/transaction/get-missed-payments",
          {
            headers: {
              Authorization: Cookies.get(TOKEN_NAME),
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Warpper>
      <div className="expected">
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
            {tableItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.paymentT}</td>
                <td>{item.property}</td>
                <td>{item.plan}</td>
                <td>{item.paymentDate}</td>
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
                      <li className="dropdown-item d-flex gap-2 align-items-center">
                        <img src="/images/bell.png" alt="" />
                        VIEW RECEIPT
                      </li>

                      <li className="dropdown-item gap-2 d-flex align-items-center">
                        <img src="/images/money.png" alt="" />
                        DOWNLOAD RECEIPT
                      </li>
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

const defaultbreakdown = [
  {
    value: "N112,000,000",
    info: "/images/info.png",
    type: "Expected Earnings",
  },
  {
    value: "N11,000,000",
    info: "/images/info.png",
    type: "Total Earnings",
  },

  {
    value: "34",
    info: "/images/info.png",
    type: "Expected Earnings",
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

const tableItems = [
  {
    id: 7686,
    name: "Ngutor Ikpaahindi",
    amount: "N460,700",
    paymentT: "Repayment",
    property: "No 23 Joseph Waku street",
    plan: "Family Plan",
    paymentDate: "4th October 2023",
  },
  {
    id: 6686,
    name: "Ngutor Ikpaahindi",
    amount: "N460,700",
    paymentT: "Repayment",
    property: "No 23 Joseph Waku street",
    plan: "Family Plan",
    paymentDate: "4th October 2023",
  },
  {
    id: 5686,
    name: "Ngutor Ikpaahindi",
    amount: "N460,700",
    paymentT: "Repayment",
    property: "No 23 Joseph Waku street",
    plan: "Family Plan",
    paymentDate: "4th October 2023",
  },
];
