'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './helpers/theme';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "var(--font-geist-mono)" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
        </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
