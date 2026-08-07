import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatWindow from "@/components/chat/ChatWindow";

import { deleteConversation } from "@/services/chatService";

export default function ChatPage() {

    const [selectedConversation, setSelectedConversation] =
        useState<number>();

    const queryClient = useQueryClient();

    const deleteMutation = useMutation({

        mutationFn: deleteConversation,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ["conversations"],
            });

            setSelectedConversation(undefined);

        },

    });

    return (

        <DashboardLayout

            header={
                <DashboardHeader
                    search=""
                    setSearch={() => {}}
                />
            }

        >

            <div className="flex h-[calc(100vh-120px)] overflow-hidden rounded-2xl border bg-slate-50">

                <ChatSidebar

                    selectedId={selectedConversation}

                    onSelect={setSelectedConversation}

                    onNewChat={() =>

                        setSelectedConversation(undefined)

                    }

                    onDelete={(id) =>

                        deleteMutation.mutate(id)

                    }

                />

                <div className="flex-1">

                    <ChatWindow

                        conversationId={selectedConversation}
                          onConversationCreated={setSelectedConversation}

                    />

                </div>

            </div>

        </DashboardLayout>

    );

}