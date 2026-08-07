import {
    House,
    Bookmark,
    History,
    User,
    MessageSquare,
    LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const menu = [
    {
        icon: House,
        name: "Home",
        path: "/dashboard",
    },
    {
        icon: Bookmark,
        name: "Bookmarks",
        path: "/bookmarks",
    },
    {
        icon: History,
        name: "History",
        path: "/history",
    },
    {
        icon: User,
        name: "Profile",
        path: "/profile",
    },
    {
        icon: MessageSquare,
        name: "AI Chat",
        path: "/chat",
    },
];

export default function DashboardSidebar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (

        <aside className="flex h-[calc(100vh-64px)] w-60 flex-col border-r bg-white">

            <div className="flex-1 space-y-2 p-6">

                {menu.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl p-3 transition ${
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-slate-100"
                                }`
                            }
                        >
                            <Icon size={20} />

                            {item.name}

                        </NavLink>

                    );

                })}

            </div>

            <div className="border-t p-4">

                <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-xl p-3 text-red-600 transition hover:bg-red-50"
                >
                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>

    );

}