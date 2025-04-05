import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { register } from "./pwa-register"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "University Portal",
  description: "A comprehensive university portal for students and faculty",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "University Portal",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "application-name": "University Portal",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="University Portal" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="University Portal" />
        <meta name="description" content="A comprehensive university portal for students and faculty" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-startup-image" href="/splash.png" />
        <style>{`
          @media all and (display-mode: standalone) {
            body {
              -webkit-tap-highlight-color: transparent;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

import './globals.css'
