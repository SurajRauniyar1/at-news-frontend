import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function PasswordInput({
    value,
    onChange,
    placeholder = "Password",
}: Props) {

    const [show, setShow] = useState(false);

    return (
        <div className="relative">

            <input
                type={show ? "text" : "password"}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border p-3 pr-12 focus:border-blue-600 focus:outline-none"
            />

            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
            >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

        </div>
    );
}