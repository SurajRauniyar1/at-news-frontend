import { useQuery } from "@tanstack/react-query";
import { getCategoryNews } from "@/services/newsService";

export default function useCategoryNews(category: string) {

    return useQuery({

        queryKey: ["category-news", category],

        queryFn: () => getCategoryNews(category),

        enabled: category !== "All",

    });

}