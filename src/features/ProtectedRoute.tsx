import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ProtectedRouteProps } from "../types/ProtectedRoute";

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to={"/login"} replace/>
    }

    return <>{children}</>
}