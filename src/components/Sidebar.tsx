import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/solid";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => setCollapsed((prevState) => !prevState);

    return (
        <aside className={`bg-slate-800 relative ${collapsed ? "w-0" : "w-60"} transition-[width]`}>
            <button
                onClick={toggleCollapse}
                className="absolute px-2 py-2 rounded-r -right-10 top-0 bg-slate-800 text-white hover:bg-slate-700 focus:bg-slate-700 transition-colors outline-none"
            >
                {collapsed ? <ArrowRightIcon className="w-6 h-6" /> : <ArrowLeftIcon className="w-6 h-6" />}
            </button>
            {!collapsed && (
                <div className="flex flex-col px-5 pt-5 whitespace-nowrap">
                    <p className="text-xs uppercase text-slate-600 mb-3">Automatic Umbrella</p>
                    <NavLink
                        to="/"
                        className="bg-slate-700 px-3 py-2 rounded-lg border-2 border-slate-700 hover:bg-transparent focus:bg-transparent outline-none mb-3 transition-colors"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="bg-slate-700 px-3 py-2 rounded-lg border-2 border-slate-700 hover:bg-transparent focus:bg-transparent outline-none mb-3 transition-colors"
                    >
                        Login
                    </NavLink>
                </div>
            )}
        </aside>
    );
}
