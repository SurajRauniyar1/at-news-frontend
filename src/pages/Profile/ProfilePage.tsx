import { useQuery } from "@tanstack/react-query";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Loader from "@/components/common/Loader";

import { getProfile } from "@/services/authService";

export default function ProfilePage() {

    const { data: user, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
    });

    if (isLoading) {
        return <Loader />;
    }

    return (

        <DashboardLayout

            header={
                <DashboardHeader
                    search=""
                    setSearch={() => {}}
                />
            }

        >

            <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow">

                <div className="flex flex-col items-center">

                    <img
                        src={
                            user.avatar ??
                            "https://ui-avatars.com/api/?name=" +
                                user.username
                        }
                        className="h-32 w-32 rounded-full"
                    />

                    <h1 className="mt-6 text-3xl font-bold">

                        {user.username}

                    </h1>

                    <p className="text-slate-500">

                        {user.email}

                    </p>

                </div>

                <div className="mt-10 grid gap-6">

                    <div>

                        <h3 className="font-semibold">

                            Bio

                        </h3>

                        <p className="mt-2 text-slate-600">

                            {user.bio ?? "No bio available"}

                        </p>

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Last Login

                        </h3>

                        <p className="mt-2 text-slate-600">

                            {user.last_login ?? "Never"}

                        </p>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}