import {
    Brain,
    Bookmark,
    Search,
    History,
    Newspaper,
    Sparkles,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function Features() {
    return (
        <section
            id="features"
            className="bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <h2 className="text-5xl font-black">

                        Everything You Need

                    </h2>

                    <p className="mt-4 text-lg text-slate-500">

                        Modern AI-powered news experience

                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    <FeatureCard
                        icon={<Brain size={32} />}
                        title="AI Summary"
                        description="Generate concise AI summaries for every article."
                    />

                    <FeatureCard
                        icon={<Search size={32} />}
                        title="Smart Search"
                        description="Search articles instantly using intelligent filters."
                    />

                    <FeatureCard
                        icon={<Bookmark size={32} />}
                        title="Bookmarks"
                        description="Save articles and read them later."
                    />

                    <FeatureCard
                        icon={<History size={32} />}
                        title="Reading History"
                        description="Track your reading progress."
                    />

                    <FeatureCard
                        icon={<Newspaper size={32} />}
                        title="Multi Source"
                        description="NewsAPI, Guardian and GNews in one place."
                    />

                    <FeatureCard
                        icon={<Sparkles size={32} />}
                        title="Sentiment Analysis"
                        description="Understand article sentiment instantly."
                    />

                </div>

            </div>
        </section>
    );
}