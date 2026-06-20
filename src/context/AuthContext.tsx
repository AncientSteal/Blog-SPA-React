import { useLayoutEffect, useState, type ReactNode } from "react";
import type { User } from "../types/AuthContext";
import { AuthContext } from "./auth-context-core";

export function AuthProvider({children}: {children : ReactNode}) {
    
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem("user_token");
        return savedToken ? savedToken : null;
    });

    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem("user_data");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {

        const frameId = requestAnimationFrame(() => {
            document.body.classList.add('app-loaded');
            setIsLoading(false);
        });

        return (() => {
            cancelAnimationFrame(frameId);
            document.body.classList.remove('app-loaded');
        })
        
    }, [])

    const login = (newToken: string, newUser: User) => {
        setToken(newToken);
        setUser(newUser);
        localStorage.setItem("user_token", newToken);
        localStorage.setItem("user_data", JSON.stringify(newUser));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_data");
    }

    if (isLoading) return null;


    return (
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}