import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import useLatestNews from "@/hooks/useLatestNews";

import NewsCard from "@/components/news/NewsCard";

import Loader from "@/components/common/Loader";

export default function LatestPreview() {

    const { data, isLoading } = useLatestNews();

    if (isLoading) return <Loader />;

    const articles = data?.slice(0, 3) ?? [];

    return (

        <section
            id="latest"
            className="bg-slate-50 py-20"
        >

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-10 flex items-center justify-between">

                    <div>

                        <h2 className="text-4xl font-bold">

                            Latest Headlines

                        </h2>

                        <p className="mt-2 text-slate-600">

                            Stay updated with AI-powered news from multiple trusted sources.

                        </p>

                    </div>

                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2 text-blue-600 font-semibold"
                    >
                        Explore All
                        <ArrowRight size={18} />
                    </Link>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {articles.map((article) => (

                        <NewsCard
                            key={article.id}
                            article={article}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}