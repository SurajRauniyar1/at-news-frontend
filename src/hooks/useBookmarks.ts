import { useQuery } from "@tanstack/react-query";

import { getBookmarks } from "@/services/bookmarkService";

export default function useBookmarks(){

    return useQuery({

        queryKey:["bookmarks"],

        queryFn:getBookmarks,

    });

}