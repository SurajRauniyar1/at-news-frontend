import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import hero from "@/assets/Hero.svg";

export default function Hero() {

    return (

        <section className="overflow-hidden">

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">

                <motion.div

                    initial={{
                        opacity:0,
                        x:-60
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:.8
                    }}

                >

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">

                        AI Powered News Platform

                    </span>

                    <h1 className="mt-8 text-6xl font-black leading-tight">

                        Read

                        <span className="text-blue-600">

                            {" "}Smarter

                        </span>

                        <br/>

                        Not Harder.

                    </h1>

                    <p className="mt-8 text-lg text-slate-600">

                        Personalized AI summaries,

                        sentiment analysis,

                        trending topics,

                        bookmarks,

                        reading history,

                        and intelligent search —

                        all in one platform.

                    </p>

                    <div className="mt-10 flex gap-4">

                        <Button
                            size="lg"
                        >

                            Get Started

                            <ArrowRight className="ml-2 h-5 w-5"/>

                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                        >

                            Live Demo

                        </Button>

                    </div>

                </motion.div>

                <motion.div

                    initial={{
                        opacity:0,
                        x:60
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:.8
                    }}

                >

                    <img

                        src={hero}

                        alt="AI News"

                        className="w-full"

                    />

                </motion.div>

            </div>

        </section>

    );

}