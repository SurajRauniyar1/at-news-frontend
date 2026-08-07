import NewsCard from "@/components/news/NewsCard";
import type { Article } from "@/types/news";

interface Props {
    articles: Article[];
}

export default function TrendingCarousel({
    articles,
}: Props) {
    return (
        <section className="mb-10">

            <h2 className="mb-6 text-3xl font-bold">
                🔥 Trending Now
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-2">

                {articles.map((article) => (

                    <div
                        key={article.id}
                        className="min-w-[340px] flex-shrink-0"
                    >

                        <NewsCard
                            article={article}
                            bookmarked={false}
                        />

                    </div>

                ))}

            </div>

        </section>
    );
}