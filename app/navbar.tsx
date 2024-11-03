"use client";
import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import RiverLogo from '../public/images/svgs/RiverLogo';

const navLinks = [
    {name: "How It Works", href: "/how"},
    {name: "Services", href: "/services"},
    {name: "Contact", href: "/contact"}
  ]

const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className="dark:bg-sky-500">
        <div className="flex flex-wrap items-center justify-between w-screen p-4 lg:px-20 lg:py-5 lg:m-0 md:m-0 md:px-20 md:px-10 sm:m-0 sm:px-10 xs:mt-0 xs:px-10">
            <div className="flex items-center">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                <Link href="/"><RiverLogo /></Link>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:bg-sky-600 dark:text-gray-400 dark:hover:bg-sky-600 dark:focus:bg-sky-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <li key={link.name}><Link className={isActive ? "block py-2 px-3 dark:text-white md:p-0 hover:text-sky-700 transition-colors" : "block py-2 px-3 dark:text-sky-700 md:p-0 hover:text-sky-900 transition-colors" } key={link.name} href={link.href}>{link.name}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </nav>

  );
};

export default Navbar;