import { useEffect, useState } from "react";
import { LightIcon, DarkIcon } from "../data/themeIcons";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button onClick={()=>setIsDark(!isDark)} className="relative flex justify-start h-8 w-16 max-[400px]:h-6 max-[400px]:w-12 p-1 rounded-full bg-brand-700 text-brand-100 cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none">
            <div className={`relative flex items-center justify-center w-6 h-6 max-[400px]:h-4 transform transition-transform duration-300 ease-in-out ${isDark ? 'translate-x-8 max-[400px]:translate-x-5' : 'translate-x-0'}`}>
                <div className={`absolute transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                    <LightIcon />
                </div>
                <div className={`absolute transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    <DarkIcon />
                </div>
            </div>
        </button>
    )
};