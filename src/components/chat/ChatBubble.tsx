import type { ChatMessage } from "@/services/chatService";

interface Props {
    message: ChatMessage;
}

export default function ChatBubble({
    message,
}: Props) {

    const isUser =
        message.role === "user";

    return (

        <div
            className={`flex ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
                    isUser
                        ? "bg-blue-600 text-white"
                        : "bg-white border"
                }`}
            >

                {message.content}

            </div>

        </div>

    );

}