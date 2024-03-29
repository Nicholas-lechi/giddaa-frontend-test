import React from "react";
import styled from "styled-components";
import { useTransactionStore } from "../../store/transaction.store";
import { formatter } from "../../../utils/helper";
const SuccessfulTransac: React.FC = () => {
  const { successefulTransaction } = useTransactionStore();
  return (
    <Wrapper>
      <div className="content">
        <p className="info">
          <img src="/images/info.png" alt="" />
        </p>
        <p className="value">{successefulTransaction?.totalRecords}</p>
        <p className="type m-0">Successful Transactions</p>
      </div>

      <div className="mt-5">
        <p className="m-0 info">
          Successful transactions made by customers in your organization
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
            {successefulTransaction?.data?.length === 0 ? (
              <div>No Data</div>
            ) : (
              successefulTransaction?.data?.map((item, i) => (
                <tr key={i}>
                  <td>{item.application.applicationId.slice(0, 4)}</td>
                  <td>
                    {item?.customer?.firstName && item?.customer?.lastName}
                  </td>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default SuccessfulTransac;

const Wrapper = styled.div`
  .content {
    box-shadow: 0px 3px 6px #0000001a;
    border: 2px solid #f0f0f0;
    width: 330px;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    .info {
      width: 100%;
      margin: 0;

      display: flex;
      justify-content: flex-end;
    }
    .value {
      font-weight: bold;
      margin: 0;

      font-size: 32px;
    }
    .type {
      font-size: 14px;
      font-family: 600;
    }
    @media screen and (max-width: 920px) {
      width: 100%;
    }
  }
  .mt-5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .info {
    font-size: 18px;
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
  "PAYMENT DATE",
  "",
];
