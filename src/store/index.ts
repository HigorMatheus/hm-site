import { create } from 'zustand';

import { Balance, Transaction } from './types';
type IState = Balance & {
  transactions: Array<Transaction>;
  addTransaction(transaction: Transaction): void;
};
export const useStore = create<IState>((set) => {
  return {
    income: 0,
    outcome: 0,
    total: 0,

    transactions: [],

    addTransaction(transaction) {
      set((state) => ({ transactions: [...state.transactions, transaction] }));
    },
  };
});
