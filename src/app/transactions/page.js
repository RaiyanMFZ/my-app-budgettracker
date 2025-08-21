'use client'

import { useState } from 'react';
import TransactionsForm from '@/components/transactionForm';
import BalanceCard from '@/components/BalanceCard';

export default function Page() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>

      <BalanceCard balance={transactions} />

      <TransactionsForm addTransaction={addTransaction} />

      <p className="text-gray-400 mt-4">Keep track of your transactions</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">All Transactions</h3>
        <ul className="space-y-2">
          {transactions.map((t, index) => (
            <li key={index} className="border p-2 rounded-md flex justify-between">
              <span>{t.name} - {t.description}</span>
              <span className={Number(t.amount) > 0 ? "text-green-500" : "text-red-500"}>
                ${t.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
