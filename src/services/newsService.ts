import api from "../api/client";
import type { Article } from "../types/news";

function normalizeArticle(article: any): Article {
    return {
        ...article,

        image_url: article.image ?? article.image_url ?? "",

        ai_tags:
            typeof article.ai_tags === "string"
                ? article.ai_tags
                      .split(",")
                      .map((tag: string) => tag.trim())
                      .filter(Boolean)
                : Array.isArray(article.ai_tags)
                ? article.ai_tags
                : [],
    };
}

export async function getLatestNews() {
    const response = await api.get("/news/latest");

    return response.data.map(normalizeArticle);
}

export async function searchNews(keyword: string) {
    const response = await api.get(
        `/news/search?keyword=${encodeURIComponent(keyword)}`
    );

    return response.data.map(normalizeArticle);
}

export async function getCategoryNews(category: string) {
    const response = await api.get(
        `/news/category/${category.toLowerCase()}`
    );

    return response.data.map(normalizeArticle);
}

export async function getTrendingNews() {
    const response = await api.get("/news/trending");

    return response.data.map(normalizeArticle);
}