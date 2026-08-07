import { Link } from "react-router-dom";
import { Search, Bell, Menu, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <div className="rounded-xl bg-blue-600 p-2 text-white">

                        <Newspaper size={22} />

                    </div>

                    <div>

                        <h1 className="text-xl font-bold">

                            AI News

                        </h1>

                        <p className="text-xs text-slate-500">

                            Powered by AI

                        </p>

                    </div>

                </Link>

                <nav className="hidden gap-8 lg:flex">

                    <Link
                        to="/"
                        className="font-medium hover:text-blue-600"
                    >
                        Home
                    </Link>

                    <a
                        href="#features"
                        className="font-medium hover:text-blue-600"
                    >
                        Features
                    </a>

                    <a
                        href="#categories"
                        className="font-medium hover:text-blue-600"
                    >
                        Categories
                    </a>

                    <a
                        href="#pricing"
                        className="font-medium hover:text-blue-600"
                    >
                        Pricing
                    </a>

                </nav>

                <div className="hidden items-center gap-3 md:flex">

                    <Button
                        size="icon"
                        variant="ghost"
                    >
                        <Search size={18}/>
                    </Button>

                    <Button
                        size="icon"
                        variant="ghost"
                    >
                        <Bell size={18}/>
                    </Button>

                    <Link to="/login">

                        <Button
                            variant="outline"
                        >
                            Login
                        </Button>

                    </Link>

                    <Link to="/register">

                        <Button>

                            Get Started

                        </Button>

                    </Link>

                </div>

                <Button
                    size="icon"
                    variant="ghost"
                    className="lg:hidden"
                >
                    <Menu/>
                </Button>

            </div>

        </header>
    );
}