import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ellen Herrera | Software Developer & Fitness Professional',
  description: 'Full-stack developer, AI consultant, and ACE-certified personal trainer. Bridging technology and wellness in Richmond, VA.',
  keywords: ['software developer', 'AI consultant', 'personal trainer', 'fitness instructor', 'Richmond VA', 'UVA graduate'],
  authors: [{ name: 'Ellen Herrera' }],
  openGraph: {
    title: 'Ellen Herrera | Software Developer & Fitness Professional',
    description: 'Full-stack developer, AI consultant, and ACE-certified personal trainer. Bridging technology and wellness in Richmond, VA.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ellen Herrera | Software Developer & Fitness Professional',
    description: 'Full-stack developer, AI consultant, and ACE-certified personal trainer.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
