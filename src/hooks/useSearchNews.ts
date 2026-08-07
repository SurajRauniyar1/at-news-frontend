import { useQuery } from "@tanstack/react-query";

import { searchNews } from "@/services/newsService";

export default function useSearchNews(

    keyword: string

) {

    return useQuery({

        queryKey: ["search-news", keyword],

        queryFn: () => searchNews(keyword),

        enabled: keyword.length > 0,

    });

}