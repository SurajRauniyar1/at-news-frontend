import { Newspaper } from "lucide-react";

export default function AuthHero() {
    return (
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-indigo-900 p-16 text-white">

            <div className="flex items-center gap-3">

                <Newspaper size={40} />

                <h1 className="text-3xl font-bold">
                    AI News
                </h1>

            </div>

            <h2 className="mt-12 text-6xl font-black leading-tight">

                Read News Smarter.

            </h2>

            <p className="mt-8 text-xl text-blue-100">

                AI-powered summaries, personalized news,
                bookmarks and intelligent search in one place.

            </p>

        </div>
    );
}