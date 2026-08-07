import {
    Newspaper,
    Globe,
    FolderOpen,
    TrendingUp,
} from "lucide-react";

interface Props {
    stats: {
        total_articles: number;
        total_sources: number;
        total_categories: number;
        trending_articles: number;
    };
}

export default function DashboardOverview({ stats }: Props) {
    const cards = [
        {
            title: "Articles",
            value: stats.total_articles,
            icon: Newspaper,
        },
        {
            title: "Sources",
            value: stats.total_sources,
            icon: Globe,
        },
        {
            title: "Categories",
            value: stats.total_categories,
            icon: FolderOpen,
        },
        {
            title: "Trending",
            value: stats.trending_articles,
            icon: TrendingUp,
        },
    ];

    return (
        <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold">
                Dashboard Overview
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500">
                                        {card.title}
                                    </p>

                                    <h3 className="mt-2 text-4xl font-bold">
                                        {card.value}
                                    </h3>
                                </div>

                                <Icon
                                    className="text-blue-600"
                                    size={36}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}