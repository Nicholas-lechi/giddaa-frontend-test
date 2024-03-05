export interface ITransaction {
  amount: number;
  application: Application;
  dateOfPayment: Date;
  dueDate: Date;
  transactionType: string;
  house: IHouse;
  customer: ICustomer;
}

interface Application {
  applicationId: string;
  status?: string;
}

interface ICustomer {
  customerId: string;
  firstName: string;
  lastName: string;
}

interface IHouse {
  houseId: string;
  address?: string;
  cityName: string;
  completionStatus?: string;
  images?: string;
  type: string;
}

export interface ISummary {
  averageAmountEarned: number;
  averageMonthlyTransactions: number;
  expectedEarnings: number;
  expectedNumberOfTransactions: number;
  leftToEarn: number;
  numberOfTransactionsLeft: number;
  totalEarned: number;
  totalMissedTransactions: number;
  totalPaidTransactions: number;
  totalTransactions: number;
  totalUnpaidTransactions: number;
  transactionDefaultRate: number;
}

export interface IExpectedTransac {
  data: ITransaction[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}
export interface ISuccessfulTransaction {
  data: ITransaction[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}

export interface IDefault {
  data: ITransaction[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}
