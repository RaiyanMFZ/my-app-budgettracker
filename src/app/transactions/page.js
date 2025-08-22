'use client'

import { useState, useEffect } from 'react';
import TransactionsForm from '@/components/transactionForm';
import BalanceCard from '@/components/BalanceCard';

export default function Page() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('transactions');
    if (saved) setTransactions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <section className='container mx-auto px-4 py-8 bg-gray-900 min-h-screen text-white rounded-2xl shadow-lg'>
      <h2 className='text-3xl font-bold mb-6 text-white'>Transactions</h2>

      <BalanceCard balance={transactions} />

      <TransactionsForm addTransaction={addTransaction} />

      <p className='text-gray-400 mt-4'>Keep track of your transactions</p>

      <div className='mt-6'>
        <h3 className='text-xl font-semibold mb-3'>All Transactions</h3>
        <ul className='space-y-2'>
          {transactions.length === 0 ? (
            <li className='text-gray-500 italic'>No transactions yet</li>
          ) : (
            transactions.map((t, index) => (
              <li
                key={index}
                className='bg-gray-800 border border-gray-700 p-3 rounded-lg flex justify-between items-center shadow-sm'
              >
                <div>
                  <p className='font-medium'>{t.name}</p>
                  <p className='text-sm text-gray-400'>{t.date}</p>
                </div>
                <span
                  className={`text-lg font-semibold ${
                    Number(t.amount) > 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  ${t.amount}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
