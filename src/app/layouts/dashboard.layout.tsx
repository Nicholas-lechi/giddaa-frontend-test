import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SidebarNav from "./SidebarNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../../utils/constant";
import { useTransactionStore } from "../store/transaction.store";

const DashboardLayout: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    setSuccessefulTransaction,
    setSummary,
    setDefault,
    setExpected,
    setLoadingDefault,
    setLoadingExpectedTransac,
    setLoadingSuccessefulTransactions,
    setLoadingSummaries,
  } = useTransactionStore();

  useEffect(() => {
    setLoading(true);
    const getSummary = async () => {
      try {
        setLoadingSummaries(true);
        const { data: value } = await axios.get(
          "/developer/transaction/get-summary",
          {
            headers: {
              Authorization: Cookies.get(TOKEN_NAME),
            },
          }
        );
        setSummary(value?.value);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingSummaries(false);
      }
    };

    const getDefault = async () => {
      try {
        setLoadingDefault(true);
        const { data: value } = await axios.get(
          "/developer/transaction/get-missed-payments",
          {
            headers: {
              Authorization: Cookies.get(TOKEN_NAME),
            },
          }
        );
        console.log(value?.value);

        setDefault(value?.value);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingDefault(false);
      }
    };
    const getExpected = async () => {
      try {
        setLoadingExpectedTransac(true);
        const { data: value } = await axios.get(
          "/developer/transaction/get-expected-payments",
          {
            headers: {
              Authorization: Cookies.get(TOKEN_NAME),
            },
          }
        );
        setExpected(value?.value);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingExpectedTransac(false);
      }
    };
    const getSuccessefulTransactions = async () => {
      try {
        setLoadingSuccessefulTransactions(true);
        const { data: value } = await axios.get(
          "/developer/transaction/get-succesful-payments",
          {
            headers: {
              Authorization: Cookies.get(TOKEN_NAME),
            },
          }
        );
        setSuccessefulTransaction(value?.value);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingSuccessefulTransactions(false);
      }
    };

    Promise.allSettled([
      getSummary(),
      getSuccessefulTransactions(),
      getDefault(),
      getExpected(),
    ]).finally(() => setLoading(false));
  }, []);
  const token = Cookies.get(TOKEN_NAME);
  const navigate = useNavigate();
  if (!token) navigate("/login");
  else if (loading)
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          <i
            className="fa-solid fa-arrows-rotate fa-spin"
            style={{ color: "#335f32", fontSize: "80px" }}
          ></i>
        </p>
      </div>
    );
  return (
    <Wrapper>
      <div className="dashboard-main">
        <SidebarNav />
        <div className="dashboard-children container">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div``;
