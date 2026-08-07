import NewsCard from "@/components/news/NewsCard";
import type { Article } from "@/types/news";

interface Props {
    articles: Article[];
}

export default function TrendingSection({
    articles,
}: Props) {
    return (
        <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold">
                🔥 Trending Now
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-2">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="min-w-[340px]"
                    >
                        <NewsCard article={article} />
                    </div>
                ))}
            </div>
        </section>
    );
}