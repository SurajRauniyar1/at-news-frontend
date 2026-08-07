import { useQuery } from "@tanstack/react-query";
import api from "@/api/client";

export interface DashboardData {
    featured: any;
    latest: any[];
    trending: any[];
    stats: {
        total_articles: number;
        total_sources: number;
        total_categories: number;
        latest_articles: number;
        trending_articles: number;
    };
}

export default function useDashboard() {
    return useQuery({
        queryKey: ["dashboard"],
        queryFn: async () => {
            const response = await api.get<DashboardData>(
                "/news/dashboard/stats"
            );
            return response.data;
        },
    });
}