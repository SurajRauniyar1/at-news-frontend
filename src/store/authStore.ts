import { create } from "zustand";

interface User {
    id: number;
    username: string;
    email: string;
    avatar?: string;
    bio?: string;
}

interface AuthState {
    token: string | null;
    user: User | null;

    login: (token: string) => void;

    logout: () => void;

    setUser: (user: User) => void;
}

const useAuthStore = create<AuthState>((set) => ({

    token: localStorage.getItem("token"),

    user: null,

    login: (token) => {

        localStorage.setItem("token", token);

        set({ token });

    },

    logout: () => {

        localStorage.removeItem("token");

        set({

            token: null,

            user: null

        });

    },

    setUser: (user) => {

        set({

            user

        });

    }

}));

export default useAuthStore;