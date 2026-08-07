import {
    Newspaper,
    Brain,
    Search,
    ShieldCheck,
} from "lucide-react";

const stats = [
    {
        icon: Newspaper,
        value: "3+",
        label: "News Sources",
    },
    {
        icon: Brain,
        value: "AI",
        label: "Summaries",
    },
    {
        icon: Search,
        value: "Instant",
        label: "Search",
    },
    {
        icon: ShieldCheck,
        value: "JWT",
        label: "Secure Auth",
    },
];

export default function Stats() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="rounded-2xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Icon className="mx-auto mb-4 h-10 w-10 text-blue-600" />

                            <h3 className="text-4xl font-bold">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-slate-500">
                                {item.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}