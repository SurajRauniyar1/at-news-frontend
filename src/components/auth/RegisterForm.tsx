import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PasswordInput from "./PasswordInput";

import { register } from "@/services/authService";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleRegister(
        e: React.FormEvent
    ) {

        e.preventDefault();

        if (password !== confirmPassword) {

            toast.error("Passwords do not match");
            return;

        }

        try {

            setLoading(true);

            await register({

                username,

                email,

                password,

            });

           toast.success("Account created successfully!");

navigate("/login");

        } catch {

           toast.error("Registration failed");

        } finally {

            setLoading(false);

        }

    }

    return (

        <form
            onSubmit={handleRegister}
            className="space-y-5"
        >

            <input
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Username"
                className="w-full rounded-xl border p-3"
            />

            <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-xl border p-3"
            />

            <PasswordInput
                value={password}
                onChange={setPassword}
            />

            <PasswordInput
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder="Confirm Password"
            />

            <Button
             type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading
                    ? "Creating Account..."
                    : "Create Account"}
            </Button>

            <p className="text-center text-sm text-slate-500">

                Already have an account?

                <Link
                    to="/login"
                    className="ml-2 text-blue-600"
                >
                    Login
                </Link>

            </p>

        </form>

    );

}