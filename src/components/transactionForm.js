'use client'

import { useState } from 'react';

export default function TransactionsForm({ addTransaction }) {

    const [name, setName] = useState([]);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const categories = [
        { id: 1, name: "Wohnen", icon: "🏠" },
        { id: 2, name: "Mobilität", icon: "🚗" },
        { id: 3, name: "Essen", icon: "🛒" },
        { id: 4, name: "Kleidung", icon: "👕" },
        { id: 5, name: "Freizeit", icon: "🎉" },
        { id: 6, name: "Reisen", icon: "🌍" },
        { id: 7, name: "Gesundheit", icon: "❤️" },
        { id: 8, name: "Geschenke", icon: "🎁" },
        { id: 9, name: "Bildung", icon: "📚" },
        { id: 10, name: "Finanzen", icon: "💰" },
        { id: 11, name: "Sonstiges", icon: "🛠️" },
      ];

    const submit = () => {
        if (!name || !amount || !date ||!category) {
            alert('Please fill all fields')
            return;
        }

        const newTransaction = {
            name,
            amount,
            date,
            category
        };

        addTransaction(newTransaction);

        console.log(newTransaction);
        setName('');
        setAmount('');
        setDate('');
        setCategory('');
    }

    return (
        <div className='flex flex-wrap gap-2 mb-6'>
            <input 
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border w-32 p-2 rounded-md'
            />
            <input
                type='number'
                value={amount}
                placeholder='amount'
                onChange={(e) => setAmount(e.target.value)}
                className='border w-32 p-2 rounded-md'
            />
            <input
                type='date'
                value={date}
                placeholder='date'
                onChange={(e) => setDate(e.target.value)}
                className='border w-32 p-2 rounded-md'
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='border w-48 p-2 rounded-md bg-gray-900 text-white '
            >
                <option value="" disabled>Kategorie auswählen</option>
                {categories.map((cat) => (
                    <option 
                        key={cat.id} 
                        value={cat.name}
                        className='flex items-center py-2 px-3 hover:bg-gray-100'
                    >
                        <span className='mr-2 text-xl'>{cat.icon}</span> {cat.name}
                    </option>
                ))}
            </select>
            <button
                onClick={submit}
                className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors'
            >
                Add Transaction
            </button>
        </div>
    )
}