import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"]
})
const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-sans-alt",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: "Sudan House of Representatives",
  description:
    "Building a democratic legislative institution that represents all Sudanese people and works towards a prosperous, peaceful, and unified Sudan.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
