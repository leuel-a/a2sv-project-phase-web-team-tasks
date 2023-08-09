import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, SSRProvider } from '@/components/bootstrap';
import NavBar from "@/app/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'This is a simple blog application made as part of the a2sv web team learning path',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container>
              { children }
            </Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  )
}
