import BurgerMenu from '../components/navigation/BurgerMenu';
import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/navigation'; 
import DropdownMenu from '../components/navigation/DropdownMenu';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../features/ThemeToggle';
import { useAuth } from '../hooks/useAuth';


function Header() {

    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const burgerMenuRef = useRef<HTMLDivElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    function handleBurgerMenu() {
        setIsOpen(!isOpen);
    }

    function toggleDropdown(label: string) {
        setActiveDropdown(activeDropdown === label ? null : label)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {

            const target = event.target as Node;

            if (burgerMenuRef.current && !burgerMenuRef.current.contains(target)) {
                setIsOpen(false);
            }

            if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(target) && (target as HTMLElement).tagName !== 'BUTTON') {
                setActiveDropdown(null);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [])

    return (
        <section className="pt-16">
            <header className="w-full">
                <nav className="fixed top-0 left-0 w-full z-10  font-semibold text-neutral-600">
                    
                    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:py-4.5 px-4 md:px-10 lg:px-16">
                        
                        <div className="flex gap-6 lg:gap-8 relative">
                            <div className="items-center gap-2.5 flex">
                                <div className="w-8 h-8 bg-contain bg-no-repeat"><img src="/Logo.svg" alt="Logo"/></div>
                                <div className="text-neutral-900 text-xl md:text-2xl lg:text-3xl font-bold">Untitled UI</div>
                                <ThemeToggle/>
                            </div>
                            <div className="hidden items-center lg:gap-5 gap-4 text-base min-[950px]:flex">
                                {navLinks.map((link) => {
                                    const isCurrentOpen = activeDropdown === link.label;
                                    return (
                                        <div key={link.label} className="relative">
                                            {link.hasDropdown ? (
                                                <button onClick={() => toggleDropdown(link.label)} className="flex items-center justify-between gap-4">
                                                    {link.label}
                                                    <div className={`pt-0.5 transition-transform duration-200 ${isCurrentOpen ? 'rotate-180' : ''}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                                            <path d="M.8.8l5 5 5-5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </div>
                                                </button>
                                            ) : (
                                                <Link to={link.href} className="flex items-center justify-between gap-4">
                                                    {link.label}
                                                </Link>
                                            )}
                                            
                                            {link.children && isCurrentOpen && (
                                                <DropdownMenu ref={dropdownMenuRef} subItems={link.children} className="absolute w-[300%] -left-full px-4 m-2 border rounded-xl"/>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <div className="hidden min-[950px]:flex gap-3">
                            {user ? (
                                 <div className="flex items-center gap-4">
                                    <span className="text-neutral-900 font-medium">Hello, {user.name}!</span>
                                    <button 
                                        onClick={logout} 
                                        className="button px-4.5 bg-brand-700 text-base-white cursor-pointer"
                                    >
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className='button px-4.5 border border-neutral-500 active:bg-brand-700 active:text-base-white login-btn'>
                                        Log in
                                    </Link>
                                    <Link to="/registration" className="button px-4.5 bg-brand-700 text-base-white registration-btn">
                                        Sign up
                                    </Link>
                                </> 
                            )}
                        </div>
                        <div ref={burgerMenuRef} className="min-[950px]:hidden">
                            <button onClick={handleBurgerMenu} className="flex flex-col p-2 gap-1 justify-center items-center">
                                <span className="bg-neutral-700 w-4.5 h-0.5 rounded-full"></span>
                                <span className="bg-neutral-700 w-4.5 h-0.5 rounded-full"></span>
                                <span className="bg-neutral-700 w-4.5 h-0.5 rounded-full"></span>
                            </button>
                            <div>
                                {isOpen && <BurgerMenu items={navLinks}/>}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    )
}

export default Header;