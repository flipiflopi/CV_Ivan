import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iván Pérez Peralta · Ingeniería & Automatización',
  description:
    'Portfolio de Iván Pérez Peralta. Estudiante de Ingeniería Robótica, Electrónica y Mecatrónica en Málaga. Proyectos de IA, automatizaciones y apps móviles.',
  openGraph: {
    title: 'Iván Pérez Peralta · Ingeniería & Automatización',
    description:
      'Proyectos de automatización con IA, agentes de voz y apps móviles.',
    url: 'https://flipiflopi.store',
    siteName: 'Iván Pérez Peralta',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
