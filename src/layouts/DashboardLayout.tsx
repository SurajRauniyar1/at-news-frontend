import { ReactNode } from "react";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

interface Props{

    children:ReactNode;

    header:ReactNode;

}

export default function DashboardLayout({

    children,

    header,

}:Props){

    return(

        <div className="min-h-screen bg-slate-100">

            {header}

            <div className="mx-auto flex max-w-7xl">

                <DashboardSidebar/>

                <main className="flex-1 p-8">

                    {children}

                </main>

            </div>

        </div>

    );

}