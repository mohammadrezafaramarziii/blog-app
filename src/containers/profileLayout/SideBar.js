import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookmarkSolidIcon, DashboardIcon, HeartSolidIcon, HomeIcon, LogoutSolidIcon } from "src/common/forms/Icons";
import { useAuthActions } from "src/context/AuthContext";

function SideBar({ setShowMenu, showMenu }) {
    const dispatch = useAuthActions();
    const pathName = usePathname();

    return ( 
        <>
            <div onClick={(open) => setShowMenu(!open)} className={`${showMenu ? "block" : "hidden"} lg:!hidden w-full h-screen bg-slate-900/30 backdrop-blur-sm fixed top-0 right-0 z-40`}></div>
            <aside className={`${showMenu ? "translate-x-0" : "translate-x-full"} lg:static lg:!translate-x-0 fixed top-0 right-0 h-screen bg-white lg:col-span-3 z-50 duration-200 ease-in-out`}>
                <div className="pt-10 pr-5">
                    <h2 className="text-3xl text-slate-700 font-bold">
                        پنل کاربری
                    </h2>
                </div>
                <ul className="flex flex-col gap-2 p-5 mt-6">
                    <li>
                        <Link href={'/profile'} className={`flex items-center gap-2 ${pathName === "/profile" ? "text-indigo-400 bg-indigo-50" : "text-purple-900"} hover:text-indigo-400 duration-200  rounded-2xl p-3`}>
                            <DashboardIcon classes={'w-6 h-6'}/>
                            <span className="text-lg font-medium">
                                داشبورد
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/profile/favorite'} className={`flex items-center gap-2 ${pathName === "/profile/favorite" ? "text-indigo-400 bg-indigo-50" : "text-purple-900"} hover:text-indigo-400 duration-200  rounded-2xl p-3`}>
                            <HeartSolidIcon classes={'w-6 h-6'}/>
                            <span className="text-lg font-medium">
                                لایک شده ها
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/profile/bookmarks'} className={`flex items-center gap-2 ${pathName === "/profile/bookmarks" ? "text-indigo-400 bg-indigo-50" : "text-purple-900"} hover:text-indigo-400 duration-200  rounded-2xl p-3`}>
                            <BookmarkSolidIcon classes={'w-6 h-6'}/>
                            <span className="text-lg font-medium">
                                نشان شده ها
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className={`flex items-center gap-2 text-purple-900 hover:text-indigo-400 duration-200  rounded-2xl p-3`}>
                            <HomeIcon classes={'w-6 h-6'}/>
                            <span className="text-lg font-medium">
                                صفحه اصلی سایت
                            </span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={()=>dispatch({ type:"SIGNOUT" })} className="flex items-center gap-2 text-red-500 hover:text-red-400 duration-200 p-3">
                            <LogoutSolidIcon classes={'w-6 h-6'}/>
                            <span className="text-lg font-medium">
                                خروج از حساب کاربری
                            </span>
                        </button>
                    </li>
                </ul>
            </aside>
        </>
     );
}

export default SideBar;