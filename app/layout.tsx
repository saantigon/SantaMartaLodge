import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Santa Marta Lodge - Complejo de Cabañas',
  description: 'Disfruta de la naturaleza en nuestras hermosas cabañas en Santa Marta Lodge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}