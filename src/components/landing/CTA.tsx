import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="bg-blue-600 py-24 text-white">

            <div className="mx-auto max-w-4xl text-center px-6">

                <h2 className="text-5xl font-bold">

                    Ready to read smarter?

                </h2>

                <p className="mt-6 text-xl text-blue-100">

                    Stay ahead with AI-powered news summaries,
                    personalized feeds, bookmarks and real-time updates.

                </p>

                <div className="mt-10 flex justify-center gap-4">

                    <Link to="/register">

                        <Button
                            size="lg"
                            variant="secondary"
                        >
                            Create Free Account
                        </Button>

                    </Link>

                    <Link to="/dashboard">

                        <Button
                            size="lg"
                            variant="outline"
                        >
                            Explore News
                        </Button>

                    </Link>

                </div>

            </div>

        </section>
    );
}