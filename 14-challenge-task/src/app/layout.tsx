import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Challenge Project',
  description: 'This is the final challenge project for the learning path.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-secondary font-leagueSpartan'>
        <Header />
        { children }
      </body>
    </html>
  )
}
