import { useParams } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Loader from "@/components/common/Loader";
import AISummaryDialog from "@/components/news/AISummaryDialog";

import useArticle from "@/hooks/useArticle";
import { useEffect } from "react";
import {
    addHistory,
    updateReadingDuration,
    completeHistory,
} from "@/services/historyService";

export default function ArticlePage() {

    const { id } = useParams();

    const { data, isLoading } = useArticle(Number(id));
useEffect(() => {
    if (!id) return;

    addHistory(Number(id));

    const start = Date.now();

    return () => {
        const seconds = Math.floor((Date.now() - start) / 1000);

        updateReadingDuration(Number(id), seconds);
        completeHistory(Number(id));
    };
}, [id]);
    if (isLoading) return <Loader />;

    if (!data) return <>Article not found</>;

    return (

        <DashboardLayout

            header={
                <DashboardHeader
                    search=""
                    setSearch={() => {}}
                />
            }

        >

            <article className="mx-auto max-w-5xl">

                <img
                    src={data.image_url}
                    className="h-[500px] w-full rounded-3xl object-cover"
                />

                <div className="mt-8">

                    <h1 className="text-5xl font-black">

                        {data.title}

                    </h1>

                    <p className="mt-4 text-slate-500">

                        {data.source}

                    </p>

                    <div className="mt-6">

                        <AISummaryDialog
                            article={data}
                        />

                    </div>

                    <div className="prose mt-10 max-w-none">

                        <p>

                            {data.content}

                        </p>

                    </div>

                </div>

            </article>

        </DashboardLayout>

    );

}