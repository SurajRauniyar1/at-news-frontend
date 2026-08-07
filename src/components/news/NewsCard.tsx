import { Link } from "react-router-dom";
import { Clock, ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import BookmarkButton from "./BookmarkButton";
import AISummaryDialog from "./AISummaryDialog";

import type { Article } from "@/types/news";
import NewsImage from "./NewsImage";

interface Props {
    article: Article;
     bookmarked: boolean;
}

export default function NewsCard({
    article,
       bookmarked,
}: Props) {

    const image =
        article.image_url ||
        (article as any).image ||
        "https://placehold.co/800x500?text=News";

    const tags = article.ai_tags ?? [];
    return (

        <Card className="overflow-hidden rounded-2xl border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <NewsImage
                src={image}
               alt={article.title}            />

            <CardContent className="space-y-4 p-5">

                <div className="flex items-center justify-between">

                    <Badge>

                        {article.category}

                    </Badge>

                   <BookmarkButton
    articleId={article.id}
    bookmarked={bookmarked}
/>

                </div>

                <h2 className="line-clamp-2 text-xl font-bold">

                    {article.title}

                </h2>

                <p className="line-clamp-3 text-sm text-slate-600">

                    {article.summary}

                </p>

                <div className="flex flex-wrap gap-2">

                    {tags.slice(0,3).map(tag=>(

                        <Badge
                            key={tag}
                            variant="secondary"
                        >
                            {tag}
                        </Badge>

                    ))}

                </div>

                <div className="flex items-center justify-between text-sm text-slate-500">

                    <span>

                        {article.source}

                    </span>

                    <div className="flex items-center gap-1">

                        <Clock size={15}/>

                        {article.reading_time} min

                    </div>

                </div>

                <div className="flex gap-3">

                    <AISummaryDialog

                        article={article}

                    />

                    <Link

                        to={`/article/${article.id}`}

                        className="flex-1"

                    >

                        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">

                            Read

                            <ExternalLink size={16}/>

                        </button>

                    </Link>

                </div>

            </CardContent>

        </Card>

    );

}