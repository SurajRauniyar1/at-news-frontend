import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        </div>
    );
}