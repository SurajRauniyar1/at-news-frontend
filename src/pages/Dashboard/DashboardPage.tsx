import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import CategoryBar from "@/components/dashboard/CategoryBar";
import FeaturedNews from "@/components/dashboard/FeaturedNews";
import NewsGrid from "@/components/dashboard/NewsGrid";
import Loader from "@/components/common/Loader";

import useDashboardStats from "@/hooks/useDashboardStats";
import useLatestNews from "@/hooks/useLatestNews";
import useSearchNews from "@/hooks/useSearchNews";
import useCategoryNews from "@/hooks/useCategoryNews";

import { getBookmarks } from "@/services/bookmarkService";

export default function DashboardPage() {
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const latest = useLatestNews();

    const searched = useSearchNews(search);

    const categoryNews = useCategoryNews(category);

    const dashboardStats = useDashboardStats();

    const { data: bookmarks = [] } = useQuery({
        queryKey: ["bookmarks"],
        queryFn: getBookmarks,
    });

    const bookmarkedIds = useMemo<Set<number>>(
        () =>
            new Set<number>(
                bookmarks.map((a: any) => Number(a.id))
            ),
        [bookmarks]
    );

    if (
        latest.isLoading ||
        searched.isLoading ||
        (category !== "All" && categoryNews.isLoading)
    ) {
        return <Loader />;
    }

    let articles: any[] = [];

    if (search.trim().length > 0) {
        articles = searched.data ?? [];
    } else if (category === "All") {
        articles = latest.data ?? [];
    } else {
        articles = categoryNews.data ?? [];
    }

    return (
        <DashboardLayout
            header={
                <DashboardHeader
                    search={search}
                    setSearch={setSearch}
                />
            }
        >
            <CategoryBar
                selected={category}
                onSelect={setCategory}
            />

            {dashboardStats.data && (
                <StatsCards
                    stats={{
                        total_articles:
                            dashboardStats.data.stats.total_articles,

                        total_bookmarks:
                            dashboardStats.data.stats.total_sources,

                        total_history:
                            dashboardStats.data.stats.total_categories,

                        trending_articles:
                            dashboardStats.data.stats.trending_articles,
                    }}
                />
            )}

            {articles.length > 0 && (
                <FeaturedNews
                    article={articles[0]}
                />
            )}

            <NewsGrid
                articles={articles.slice(1)}
                bookmarkedIds={bookmarkedIds}
            />
        </DashboardLayout>
    );
}