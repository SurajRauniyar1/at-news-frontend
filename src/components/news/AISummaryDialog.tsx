import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";

import type { Article } from "@/types/news";

interface Props {
    article: Article;
}

export default function AISummaryDialog({
    article,
}: Props) {

    const tags = article.ai_tags ?? [];

    const image =
        article.image_url ||
        "https://placehold.co/1200x600?text=No+Image";

    return (

        <Dialog>

            <DialogTrigger>

                <button
                    type="button"
                    className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >

                    <Brain className="mr-2 h-4 w-4" />

                    AI Summary

                </button>

            </DialogTrigger>

            <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto rounded-2xl bg-white p-0">

                <img
                    src={image}
                    alt={article.title}
                    className="h-80 w-full rounded-t-2xl object-cover"
                />

                <div className="p-8">

                    <DialogHeader>

                        <DialogTitle className="mb-4 text-3xl font-bold leading-snug text-slate-900">

                            {article.title}

                        </DialogTitle>

                    </DialogHeader>

                    <div className="mb-6 flex flex-wrap gap-3">

                        <Badge>

                            {article.category}

                        </Badge>

                        <Badge variant="secondary">

                            {article.sentiment || "Neutral"}

                        </Badge>

                        <Badge variant="outline">

                            {article.source}

                        </Badge>

                        <Badge variant="outline">

                            {article.reading_time} min read

                        </Badge>

                    </div>

                    <div className="mb-8">

                        <h3 className="mb-3 text-xl font-semibold">

                            AI Summary

                        </h3>

                        <p className="whitespace-pre-wrap leading-8 text-slate-700">

                            {article.summary || "No AI summary available."}

                        </p>

                    </div>

                    <div>

                        <h3 className="mb-3 text-xl font-semibold">

                            AI Tags

                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {

                                tags.length > 0 ? (

                                    tags.map((tag) => (

                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                        >

                                            {tag}

                                        </Badge>

                                    ))

                                ) : (

                                    <Badge variant="secondary">

                                        No AI Tags

                                    </Badge>

                                )

                            }

                        </div>

                    </div>

                </div>

            </DialogContent>

        </Dialog>

    );

}