'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './helpers/theme';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavBar/navbar";
import Footer from "./footer";
import useMenuStore from "./store/MenuProvider";

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
  const getIsOpen = useMenuStore((state: any) => state.isOpen);
  const setIsOpen = useMenuStore((state: any) => state.setIsOpen);
  const isOpen = getIsOpen ? "block" : "none";
  console.log('isOpen', isOpen);
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "var(--font-geist-mono)" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <div style={{display: `${isOpen}`, zIndex: 10000, position: 'absolute', left: 0, top: 0, height: '100vh', width: '100vw', backgroundColor: 'red'}} onClick={setIsOpen}>MENU!!!!</div>
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
        </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
