import { navLinks } from "../NavBar/navbar";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import useMenuStore from '../../store/MenuProvider';

export default function MobileMenu({isOpen}: Readonly<{isOpen: string}>) {
    const pathname = usePathname();
    const setIsOpen = useMenuStore((state: any) => state.setIsOpen);
    return (
        <div style={{display: `${isOpen}`, zIndex: 10000, position: 'absolute', left: 0, top: 0, height: '100vh', width: '100vw'}} className='flex items-center justify-center bg-sky-500'>
            <button onClick={setIsOpen} className='text-white'>x close</button>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                {navLinks.map((link) => {
                    const isActive = pathname ? pathname.startsWith(link.href) : false;
                    return (
                        <li key={link.name} onClick={setIsOpen}><Link className={isActive ? "block py-2 px-3 dark:text-sky-700 md:p-0 hover:text-sky-700 transition-colors" : "block py-2 px-3 dark:text-white md:p-0 hover:text-sky-900 transition-colors" } key={link.name} href={link.href}>{link.name}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}
