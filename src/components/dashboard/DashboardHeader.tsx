import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {

    search: string;

    setSearch: (value: string) => void;

}

export default function DashboardHeader({

    search,

    setSearch,

}: Props) {

    return (

        <header className="sticky top-0 z-40 border-b bg-white">

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <h1 className="text-2xl font-bold text-blue-600">

                    AI News

                </h1>

                <div className="w-[420px]">

                    <Input

                        value={search}

                        onChange={(e)=>

                            setSearch(e.target.value)

                        }

                        placeholder="Search articles..."

                        className="rounded-full"

                    />

                </div>

                <Button

                    variant="ghost"

                    size="icon"

                >

                    <Bell/>

                </Button>

            </div>

        </header>

    );

}