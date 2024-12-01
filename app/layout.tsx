'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './helpers/theme';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavBar/navbar";
import Footer from "./footer";
import useMenuStore from "./store/MenuProvider";
import MobileMenu from './components/MobileMenu/MobileMenu';
import { usePathname } from 'next/navigation';

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
  const isOpen = getIsOpen ? "block" : "none";
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "var(--font-geist-mono)" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {/* <div style={{display: `${isOpen}`, zIndex: 10000, position: 'absolute', left: 0, top: 0, height: '100vh', width: '100vw'}} className='flex items-center justify-center bg-sky-500'>
                <button onClick={setIsOpen} className='text-white'>x close</button>
              </div> */}
              <MobileMenu isOpen={isOpen} />
              <Navbar />
              {children}
              {!isHome && <Footer />}
            </ThemeProvider>
        </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
