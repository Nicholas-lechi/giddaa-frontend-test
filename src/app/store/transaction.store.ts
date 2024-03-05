import {
  IDefault,
  IExpectedTransac,
  ISuccessfulTransaction,
  ISummary,
} from "../../utils/interface/transaction.interface";
import { create } from "zustand";

interface IProp {
  summaries: ISummary[];
  summary: ISummary | null;
  successefulTransactions: ISuccessfulTransaction[];
  successefulTransaction: ISuccessfulTransaction | null;
  expectedTransac: IExpectedTransac[];
  expected: IExpectedTransac | null;
  defaults: IDefault[];
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
  setSummaries: (summaries: ISummary[]) => void;
  setSuccessefulTransactions: (
    successefulTransactions: ISuccessfulTransaction[]
  ) => void;
  setExpectedTransac: (expectedTransac: IExpectedTransac[]) => void;
  setDefaults: (defaults: IDefault[]) => void;
}

export const useTransactionStore = create<IProp>((set) => ({
  summaries: [],
  successefulTransaction: null,
  successefulTransactions: [],
  expectedTransac: [],
  expected: null,
  defaults: [],
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
  setSummaries: (summaries: ISummary[]) => set({ summaries }),
  setDefaults: (defaults: IDefault[]) => set({ defaults }),
  setExpectedTransac: (expectedTransac: IExpectedTransac[]) =>
    set({ expectedTransac }),
  setSuccessefulTransactions: (
    successefulTransactions: ISuccessfulTransaction[]
  ) => set({ successefulTransactions }),
  setSummary: (summary: ISummary) => set({ summary }),
}));
