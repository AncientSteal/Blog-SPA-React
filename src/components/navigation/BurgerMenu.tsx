import { useState } from 'react';
import type { BurgerMenuProps } from '../../types/Navigation';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function BurgerMenu({ items }: BurgerMenuProps) {

  const { user, logout } = useAuth();
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  function toggleMobileActiveDropdown(label: string) {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label)
  }

  return (
    <div className="flex-col absolute top-full right-0 py-6 px-4 bg-base-white font-semibold shadow-lg">
      <div className="flex flex-col gap-8 text-base text-neutral-900 pb-6">
        {items.map((link) => {
          const isCurrentOpen = mobileActiveDropdown === link.label;
          return (
            <div key={link.label} className="flex flex-col gap-4">
              {link.hasDropdown ? (
                  <button onClick={() => link.hasDropdown && toggleMobileActiveDropdown(link.label)} className="flex items-center justify-between gap-4 pl-0">
                      {link.label}
                      <div className={`pt-0.5 transition-transform duration-200 ${isCurrentOpen ? 'rotate-180' : ''}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                              <path d="M.8.8l5 5 5-5" stroke="#525252" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </div>
                  </button>
              ) : (
                  <a href={link.href} className="flex items-center justify-between gap-4">
                      {link.label}
                  </a>
              )}
              
              {link.children && isCurrentOpen && (
                  <DropdownMenu subItems={link.children} className="static shadow-none border-y max-w-58"/>
              )}
            </div>
          )
        }
      )}
      </div>
      <div className="grid grid-cols-2 gap-3 text-neutral-600 py-6 border-t border-neutral-100">
        <a href="#">About us</a>
        <a href="#">Press</a>
        <a href="#">Careers</a>
        <a href="#">Legal</a>
        <a href="#">Support</a>
        <a href="#">Contact</a>
        <a href="#">Sitemap</a>
        <a href="#">Cookie settings</a>
      </div>
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <span className="text-neutral-900 font-medium w-full text-center py-2 rounded-lg border border-neutral-500">Hello, {user.name}!</span>
          <button 
              onClick={logout} 
              className="button px-4.5 w-full bg-brand-700 text-base-white cursor-pointer"
          >
              Log out
          </button>
        </div>
      ) : (
        <div className="gap-3 flex">
          <Link to="/login" className="button px-4.5 w-full border border-neutral-500 active:bg-brand-700 active:text-base-white login-btn">
            Login
          </Link>
          <Link to="/registration" className="button px-4.5 w-full bg-brand-700 text-base-white registration-btn">
            Sign up
          </Link>
        </div>
      )}
      
    </div>
  )
}

export default BurgerMenu;