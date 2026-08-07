import { useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useChat from "@/hooks/useChat";
import { sendMessage } from "@/services/chatService";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

interface Props {
    conversationId?: number;
    onConversationCreated: (id: number) => void;
}

export default function ChatWindow({
    conversationId,
    onConversationCreated,
}: Props) {

    const bottomRef = useRef<HTMLDivElement>(null);

    const queryClient = useQueryClient();

    const {
        data: messages = [],
        isLoading,
    } = useChat(conversationId);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const mutation = useMutation({

        mutationFn: sendMessage,

        onSuccess: async (data) => {

            await queryClient.invalidateQueries({
                queryKey: ["conversations"],
            });

            if (!conversationId) {

                onConversationCreated(data.conversation_id);

                await queryClient.invalidateQueries({
                    queryKey: [
                        "chat",
                        data.conversation_id,
                    ],
                });

            } else {

                await queryClient.invalidateQueries({
                    queryKey: [
                        "chat",
                        conversationId,
                    ],
                });

            }

        },

    });

    return (

        <div className="flex h-full flex-col">

            <div className="flex-1 overflow-y-auto p-6">

                {

                    conversationId ? (

                        isLoading ? (

                            <p>Loading...</p>

                        ) : (

                            <>

                                {

                                    messages.map((message) => (

                                        <ChatBubble
                                            key={message.id}
                                            message={message}
                                        />

                                    ))

                                }

                                <div ref={bottomRef} />

                            </>

                        )

                    ) : (

                        <div className="flex h-full items-center justify-center text-slate-500">

                            Start a new conversation by typing below.

                        </div>

                    )

                }

            </div>

            <ChatInput

                loading={mutation.isPending}

                onSend={(text) =>

                    mutation.mutate({

                        message: text,
                        conversation_id: conversationId,

                    })

                }

            />

        </div>

    );

}