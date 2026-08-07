import api from "@/api/client";
import type { Article } from "@/types/news";

function normalizeArticle(article: any): Article {
    return {
        ...article,
        image_url: article.image ?? article.image_url ?? "",
        ai_tags: article.ai_tags
            ? Array.isArray(article.ai_tags)
                ? article.ai_tags
                : article.ai_tags.split(",")
            : [],
    };
}

export async function getArticle(id: number) {
    const response = await api.get(`/news/${id}`);

    return normalizeArticle(response.data);
}