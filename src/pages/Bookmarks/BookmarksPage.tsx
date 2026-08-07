import { useQuery } from "@tanstack/react-query";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Loader from "@/components/common/Loader";
import NewsGrid from "@/components/dashboard/NewsGrid";

import { getBookmarks } from "@/services/bookmarkService";

export default function BookmarksPage() {

    const { data, isLoading } = useQuery({
        queryKey: ["bookmarks"],
        queryFn: getBookmarks,
    });

    if (isLoading) {
        return <Loader />;
    }

    const bookmarkedIds = new Set<number>(
    (data ?? []).map((article: any) => Number(article.id))
);

    return (

        <DashboardLayout

            header={
                <DashboardHeader
                    search=""
                    setSearch={() => {}}
                />
            }

        >

            <h1 className="mb-8 text-3xl font-bold">

                My Bookmarks

            </h1>

            <NewsGrid
                articles={data ?? []}
                bookmarkedIds={bookmarkedIds}
            />

        </DashboardLayout>

    );

}