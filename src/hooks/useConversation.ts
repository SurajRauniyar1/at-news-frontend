import { useQuery } from "@tanstack/react-query";

import {
    getConversations,
} from "@/services/chatService";

export default function useConversation() {

    return useQuery({

        queryKey: ["conversations"],

        queryFn: getConversations,

    });

}