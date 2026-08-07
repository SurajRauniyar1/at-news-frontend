import type { ReactNode } from "react";
import AuthHero from "./AuthHero";

interface Props {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export default function AuthLayout({
    title,
    subtitle,
    children,
}: Props) {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">

            <AuthHero />

            <div className="flex items-center justify-center bg-slate-50 p-8">

                <div className="w-full max-w-md">

                    <h1 className="text-4xl font-bold">
                        {title}
                    </h1>

                    <p className="mt-2 text-slate-500">
                        {subtitle}
                    </p>

                    <div className="mt-10">
                        {children}
                    </div>

                </div>

            </div>

        </div>
    );
}