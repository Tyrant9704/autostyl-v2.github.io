import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../theme-provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <title>AutoStyl Będzin - Profesjonalny detailing samochodowy</title>
        <meta
          name="description"
          content="AutoStyl Będzin - profesjonalny detailing samochodowy. Kompleksowe usługi czyszczenia, renowacji oraz ochrony pojazdów na najwyższym poziomie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
