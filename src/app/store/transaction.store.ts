import {
  IDefault,
  IExpectedTransac,
  ISuccessfulTransaction,
  ISummary,
} from "../../utils/interface/transaction.interface";
import { create } from "zustand";

interface IProp {
  summary: ISummary | null;
  successefulTransaction: ISuccessfulTransaction | null;
  expected: IExpectedTransac | null;
  defaultTrans: IDefault | null;
  loading: boolean;
  loadingSummaries: boolean;
  loadingExpectedTransac: boolean;
  loadingDefault: boolean;
  loadingSuccessefulTransactions: boolean;
  setSummary: (summary: ISummary) => void;
  setDefault: (def: IDefault) => void;

  setSuccessefulTransaction: (
    successefulTransaction: ISuccessfulTransaction
  ) => void;
  setExpected: (expected: IExpectedTransac) => void;
  setLoadingSummaries: (loading: boolean) => void;
  setLoadingExpectedTransac: (loading: boolean) => void;
  setLoadingDefault: (loading: boolean) => void;
  setLoadingSuccessefulTransactions: (loading: boolean) => void;
}

export const useTransactionStore = create<IProp>((set) => ({
  successefulTransaction: null,
  expected: null,
  defaultTrans: null,
  summary: null,
  loading: false,
  loadingDefault: false,
  loadingExpectedTransac: false,
  loadingSuccessefulTransactions: false,
  loadingSummaries: false,
  setDefault: (defaultTrans: IDefault) => set({ defaultTrans }),
  setExpected: (expected: IExpectedTransac) => set({ expected }),
  setSuccessefulTransaction: (successefulTransaction: ISuccessfulTransaction) =>
    set({ successefulTransaction }),

  setLoadingDefault: (loadingDefault: boolean) => set({ loadingDefault }),
  setLoadingExpectedTransac: (loadingExpectedTransac: boolean) =>
    set({ loadingExpectedTransac }),
  setLoadingSuccessefulTransactions: (
    loadingSuccessefulTransactions: boolean
  ) => set({ loadingSuccessefulTransactions }),
  setLoadingSummaries: (loadingSummaries: boolean) => set({ loadingSummaries }),
  setSummary: (summary: ISummary) => set({ summary }),
}));
