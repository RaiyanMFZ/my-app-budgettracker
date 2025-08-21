'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-black shadow-md'>
      <nav className='max-w-4xl mx-auto flex justify-between items-center p-4'>
        <h1 className='text-xl font-bold text-white'>Budget Tracker</h1>
        <ul className='flex space-x-6 text-white'>
          <li>
            <Link href='/' className='hover:text-purple-400 transition-colors duration-200'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/transactions' className='hover:text-purple-400 transition-colors duration-200'>
              Transactions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
