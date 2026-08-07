import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { login as loginService } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";

import PasswordInput from "./PasswordInput";

import { Button } from "@/components/ui/button";

export default function LoginForm() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleLogin(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await loginService({

                email,

                password,

            });

            login(response.access_token);

            toast.success("Welcome back!");

            navigate("/dashboard");

        } catch (error) {

            console.error(error);

            toast.error("Invalid email or password");

        } finally {

            setLoading(false);

        }

    }

    return (

        <form
            onSubmit={handleLogin}
            className="space-y-5"
        >

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border p-3 focus:border-blue-600 focus:outline-none"
                required
            />

            <PasswordInput
                value={password}
                onChange={setPassword}
            />

            <Button
                type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading
                    ? "Signing In..."
                    : "Sign In"}
            </Button>

            <p className="text-center text-sm text-slate-500">

                Don't have an account?

                <Link
                    to="/register"
                    className="ml-2 font-semibold text-blue-600 hover:underline"
                >
                    Register
                </Link>

            </p>

        </form>

    );

}