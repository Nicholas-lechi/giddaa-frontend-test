import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../../utils/constant";
import { useTransactionStore } from "../store/transaction.store";

const DashboardHeader = () => {
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

  if (loading) return <p>loading...</p>;
  return <div>DashboardHeader</div>;
};

export default DashboardHeader;
