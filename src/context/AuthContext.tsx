import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";
import type { AuthContextType, User } from "../types/AuthContext";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children : ReactNode}) {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        const savedToken = localStorage.getItem("user_token");
        const savedUser = localStorage.getItem("user_data");

        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }

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

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}