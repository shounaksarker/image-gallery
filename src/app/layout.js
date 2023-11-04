import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Image Gallery',
  description: 'Image Gallery by Shounak',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-blue-100 py-4'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
