import { useState } from "react";
import { Send } from "lucide-react";

interface Props {
    onSend: (message: string) => void;
    loading?: boolean;
}

export default function ChatInput({
    onSend,
    loading = false,
}: Props) {

    const [message, setMessage] = useState("");

    const send = () => {
        const text = message.trim();

        if (!text) return;

        onSend(text);

        setMessage("");
    };

    return (
        <div className="flex items-center gap-3 border-t bg-white p-4">

            <input
                type="text"
                value={message}
                placeholder="Ask anything about the news..."
                onChange={(e) =>
                    setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                    if (
                        e.key === "Enter" &&
                        !loading
                    ) {
                        send();
                    }
                }}
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
                type="button"
                disabled={loading}
                onClick={send}
                className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
                <Send size={20} />
            </button>

        </div>
    );
}