import type { Article } from "@/types/news";

import { Button } from "@/components/ui/button";

interface Props{

    article:Article;

}

export default function FeaturedNews({

    article,

}:Props){

    return(

        <section className="mb-10 overflow-hidden rounded-3xl bg-white shadow">

            <img

                src={

                    article.image} 

                

                className="h-[420px] w-full object-cover"

            />

            <div className="p-8">

                <span className="rounded bg-red-600 px-3 py-1 text-white">

                    Breaking

                </span>

                <h1 className="mt-4 text-5xl font-black">

                    {article.title}

                </h1>

                <p className="mt-5 text-lg text-slate-600">

                    {article.description}

                </p>

                <div className="mt-8 flex gap-4">

                    <Button>

                        Read More

                    </Button>

                    <Button

                        variant="outline"

                    >

                        AI Summary

                    </Button>

                </div>

            </div>

        </section>

    );

}