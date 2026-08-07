import { useQuery } from "@tanstack/react-query";

import { getLatestNews } from "@/services/newsService";

export default function useLatestNews() {

    return useQuery({

        queryKey: ["latest-news"],

        queryFn: getLatestNews,

    });

}