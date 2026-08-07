import api from "@/api/client";

export interface DashboardStats {

    total_articles: number;

    total_bookmarks: number;

    total_history: number;

    trending_articles: number;

}

export async function getDashboardStats() {

    const response = await api.get<DashboardStats>(
        "/news/dashboard/stats"
    );

    return response.data;

}