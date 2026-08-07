import { Newspaper } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t bg-white">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

                <div className="flex items-center gap-3">

                    <Newspaper className="text-blue-600" />

                    <div>

                        <h3 className="font-bold">

                            AI News

                        </h3>

                        <p className="text-sm text-slate-500">

                            AI Powered News Aggregator

                        </p>

                    </div>

                </div>

                <div className="flex gap-8 text-sm text-slate-600">

                    <a href="#">About</a>

                    <a href="#">Privacy</a>

                    <a href="#">GitHub</a>

                    <a href="#">Contact</a>

                </div>

            </div>

        </footer>
    );
}