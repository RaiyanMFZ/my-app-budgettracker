'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-black shadow-md'>
      <nav className='max-w-3xl mx-auto flex justify-between items-center p-4'>
      <h1 className='text-xl font-bold text-neutral-100'>Budget Tracker</h1>
        <ul className='flex space-x-6 text-neutral-100 '>
          <li><Link href="/" className='hover:text-neutral-300'>Home</Link></li>
          <li><Link href="/transactions" className='hover:text-neutral-300'>Transactions</Link></li>
        </ul>
      </nav>
    </header>
  )
}