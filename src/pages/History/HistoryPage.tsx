import { useQuery } from "@tanstack/react-query";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Loader from "@/components/common/Loader";
import NewsGrid from "@/components/dashboard/NewsGrid";

import { getHistory } from "@/services/historyService";

export default function HistoryPage() {

    const { data, isLoading } = useQuery({
        queryKey: ["history"],
        queryFn: getHistory,
    });

    if (isLoading) {
        return <Loader />;
    }

    const articles =
        (data ?? []).map((item: any) => item.article);

    const bookmarkedIds = new Set<number>();

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

                Reading History

            </h1>

            <NewsGrid
                articles={articles}
                bookmarkedIds={bookmarkedIds}
            />

        </DashboardLayout>

    );

}