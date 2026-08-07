import { Plus, Trash2 } from "lucide-react";

import useConversations from "@/hooks/useConversation";

interface Props {
    selectedId?: number;
    onSelect: (id: number) => void;
    onNewChat: () => void;
    onDelete: (id: number) => void;
}

export default function ChatSidebar({
    selectedId,
    onSelect,
    onNewChat,
    onDelete,
}: Props) {

    const {
        data: conversations = [],
        isLoading,
    } = useConversations();

    return (

        <div className="flex h-full w-80 flex-col border-r bg-white">

            <div className="border-b p-4">

                <button
                    onClick={onNewChat}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
                >
                    <Plus size={18} />

                    New Chat

                </button>

            </div>

            <div className="flex-1 overflow-y-auto">

                {

                    isLoading ? (

                        <p className="p-4 text-slate-500">

                            Loading...

                        </p>

                    ) : conversations.length === 0 ? (

                        <p className="p-4 text-slate-500">

                            No conversations yet

                        </p>

                    ) : (

                        conversations.map((conversation) => (

                            <div
                                key={conversation.id}
                                onClick={() =>
                                    onSelect(conversation.id)
                                }
                                className={`group flex cursor-pointer items-center justify-between border-b px-4 py-3 transition hover:bg-slate-100 ${
                                    selectedId === conversation.id
                                        ? "bg-blue-50"
                                        : ""
                                }`}
                            >

                                <div className="min-w-0 flex-1">

                                    <p className="truncate font-medium">

                                        {conversation.title}

                                    </p>

                                    <p className="text-xs text-slate-500">

                                        {new Date(
                                            conversation.created_at
                                        ).toLocaleString()}

                                    </p>

                                </div>

                                <button
                                    onClick={(e) => {

                                        e.stopPropagation();

                                        onDelete(conversation.id);

                                    }}
                                    className="rounded-lg p-2 text-red-500 opacity-0 transition group-hover:opacity-100 hover:bg-red-50"
                                >

                                    <Trash2 size={18} />

                                </button>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}