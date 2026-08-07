import type { Article } from "@/types/news";

import NewsCard from "@/components/news/NewsCard";

interface Props{

    articles:Article[];
     bookmarkedIds: Set<number>;


}

export default function NewsGrid({

    articles,
       bookmarkedIds,

}:Props){

    return(

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {

                articles.map(article=>(

                    <NewsCard

                        key={article.id}

                        article={article}
                         bookmarked={bookmarkedIds.has(article.id)}

                    />

                ))

            }

        </div>

    );

}