import Link from "next/link";
import { navLinks } from "./components/NavBar/navbar";
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className="absolute m-auto w-full flex flex-wrap items-center justify-center h-20">
            <div className="hidden w-full lg:block md:hidden md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 text-sm">
                            {navLinks.map((link) => {
                                const isActive = pathname ? pathname.startsWith(link.href) : false;
                                return (
                                    <li key={link.name}><Link className={isActive ? "block py-2 px-3 dark:text-sky-700 md:p-0 hover:text-sky-700 transition-colors" : "block py-2 px-3 text-slate-700 md:p-0 hover:text-slate-900 transition-colors" } key={link.name} href={link.href}>{link.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
        </footer>
    )
};

export default Footer;