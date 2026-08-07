import { Navigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

interface Props {

    children: React.ReactNode;

}

export default function GuestRoute({

    children,

}: Props) {

    const { token } = useAuth();

    if (token) {

        return <Navigate to="/dashboard" replace />;

    }

    return <>{children}</>;

}