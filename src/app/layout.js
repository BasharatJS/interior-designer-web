import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Moon Shine Interiors | Premium Interior Design Services in Kolkata',
  description:
    'Transform your space with Moon Shine Interiors. We create stunning, functional interior designs that reflect your personality and enhance your lifestyle. Based in Kolkata.',
  keywords:
    'interior design, Kolkata interior designer, home decor, luxury interiors, residential design, commercial design, Moon Shine Interiors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.className}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
