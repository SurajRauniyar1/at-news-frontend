import { useQuery } from "@tanstack/react-query";

import { getMessages } from "@/services/chatService";

export default function useChat(
    conversationId?: number,
) {

    return useQuery({

        queryKey: [
            "chat",
            conversationId,
        ],

        queryFn: () =>
            getMessages(conversationId!),

        enabled: !!conversationId,

    });

}