import api from "@/api/client";

export interface ChatRequest {
    message: string;
    conversation_id?: number;
}

export interface Conversation {
    id: number;
    title: string;
    created_at: string;
}

export interface ChatMessage {
    id: number;
    conversation_id: number;
    role: "user" | "assistant";
    content: string;
    created_at: string;
}

export async function getConversations() {
    const response = await api.get<Conversation[]>("/chat");

    return response.data;
}

export async function getMessages(
    conversationId: number
) {
    const response = await api.get<ChatMessage[]>(
        `/chat/${conversationId}`
    );

    return response.data;
}

export async function sendMessage(
    request: ChatRequest
) {
    const response = await api.post(
        "/chat",
        request
    );

    return response.data;
}

export async function deleteConversation(
    conversationId: number
) {
    const response = await api.delete(
        `/chat/${conversationId}`
    );

    return response.data;
}