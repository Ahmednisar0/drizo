import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PremiumStep - Premium Shoe Store',
  description: 'Elevate your step with our premium shoe collection. Style and comfort curated for everyone.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Suspense fallback={<div>Loading navigation...</div>}>
              <Navbar />
            </Suspense>
            <main>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}