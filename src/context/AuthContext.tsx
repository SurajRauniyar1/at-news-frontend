import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface User {

    email: string;

    username: string;

}

interface AuthContextType {

    token: string | null;

    user: User | null;

    login: (token: string) => void;

    logout: () => void;

}

const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

export function AuthProvider({

    children,

}: {

    children: React.ReactNode;

}) {

    const [token, setToken] = useState<string | null>(null);

    const [user] = useState<User | null>(null);

    useEffect(() => {

        const savedToken = localStorage.getItem("token");

        if (savedToken) {

            setToken(savedToken);

        }

    }, []);

    function login(token: string) {

        localStorage.setItem(
            "token",
            token
        );

        setToken(token);

    }

    function logout() {

        localStorage.removeItem(
            "token"
        );

        setToken(null);

    }

    return (

        <AuthContext.Provider

            value={{

                token,

                user,

                login,

                logout,

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}