import type { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600">
                {icon}
            </div>

            <h3 className="mb-3 text-xl font-bold">
                {title}
            </h3>

            <p className="text-slate-600">
                {description}
            </p>
        </div>
    );
}