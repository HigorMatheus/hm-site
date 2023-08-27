export interface Transaction {
  id: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
  created_at: Date;
}

export interface Balance {
  income: number;
  outcome: number;
  total: number;
}
