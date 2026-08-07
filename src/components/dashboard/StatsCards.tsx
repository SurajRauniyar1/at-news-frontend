import {
    Newspaper,
    Bookmark,
    History,
    TrendingUp,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

interface Props {
    stats: {
        total_articles: number;
        total_bookmarks: number;
        total_history: number;
        trending_articles: number;
    };
}

export default function StatsCards({
    stats,
}: Props) {

    const navigate = useNavigate();

    const cards = [
        {
            title: "Articles",
            value: stats.total_articles,
            icon: Newspaper,
            path: "/dashboard",
        },
        {
            title: "Bookmarks",
            value: stats.total_bookmarks,
            icon: Bookmark,
            path: "/bookmarks",
        },
        {
            title: "History",
            value: stats.total_history,
            icon: History,
            path: "/history",
        },
        {
            title: "Trending",
            value: stats.trending_articles,
            icon: TrendingUp,
            path: "/dashboard",
        },
    ];

    return (

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {

                cards.map((card) => {

                    const Icon = card.icon;

                    return (

                        <button
                            key={card.title}
                            onClick={() => navigate(card.path)}
                            className="rounded-2xl bg-white p-6 text-left shadow transition hover:shadow-xl hover:scale-[1.02]"
                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-slate-500">

                                        {card.title}

                                    </p>

                                    <h2 className="mt-2 text-4xl font-black">

                                        {card.value}

                                    </h2>

                                </div>

                                <Icon
                                    className="text-blue-600"
                                    size={36}
                                />

                            </div>

                        </button>

                    );

                })

            }

        </div>

    );

}