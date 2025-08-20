'use client'

import { useState } from 'react';

export default function Transactions({ onAdd }) {

    const [name, setName] = useState([]);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const submit = () => {
        if (!name || !amount || !description) {
            alert('Please fill all fields')
            return;
        }
        onAdd({ id: Date.now(), name, amount: parseFloat(amount), description });
        setName('');
        setAmount('');
        setDescription('');
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
                type='text'
                value={amount}
                placeholder='amount'
                onChange={(e) => setAmount(e.target.value)}
                className='border w-32 p-2 rounded-md'
            />
            <input
                type='text'
                value={description}
                placeholder='description'
                onChange={(e) => setDescription(e.target.value)}
                className='border w-32 p-2 rounded-md'
            />
            <button
                onClick={submit}
                className='bg-green-500 text-white px-4 py-2 rounded-md'
            >
                Add Transaction
            </button>
        </div>
    )
}