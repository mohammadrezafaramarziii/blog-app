import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, BookmarkIcon, HeartIcon, LoginIcon, LogoutIcon, SolidDownIcon, SolidLoginIcon, SolidUserAddIcon, SolidUserIcon, UserAddIcon, UserIcon } from "src/common/forms/Icons";
import { useAuth, useAuthActions } from "src/context/AuthContext";

function Header() {
    const { user, loading } = useAuth();
    const dispatch = useAuthActions();
    const [showProfilePanel, setShowProfilePanel] = useState(false);

    return ( 
        <header className="w-full pt-8 mb-6 relative">
            <div className="w-full flex items-center justify-between bg-white rounded-2xl p-8">
                <ul className="flex items-center gap-5 text-slate-700 font-medium">
                    <li className="hover:!text-slate-500 duration-200">
                        <Link href={'/'}>
                            خانه
                        </Link>
                    </li>
                    <li className="hover:!text-slate-500 duration-200">
                        <Link href={'/blogs'}>
                            مقالات
                        </Link>
                    </li>
                </ul>

                <div className={`${loading ? "opacity-0" : "opacity-100"} transition-all`}>
                    {
                        user ?
                        <div>
                            <button onClick={()=>setShowProfilePanel(!showProfilePanel)} className="flex items-center justify-center gap-1">
                                <UserIcon classes={"w-6 h-6 text-slate-700"}/>
                                <SolidDownIcon classes={'w-3 h-3'}/>
                            </button>

                            {
                                showProfilePanel &&
                            
                                <div className="w-full z-50 max-w-[276px] sm:max-w-[320px] absolute top-[128px] left-0 bg-white rounded-xl overflow-hidden shadow-md">
                                    <div className="border-b border-slate-100 py-5 px-6">
                                        <h3 className="text-lg font-semibold text-slate-600 sm:text-xl mb-1 sm:mb-2">
                                            {user.name}
                                        </h3>
                                        <Link href={'/profile'} className="flex items-center gap-1 font-medium text-indigo-500 text-sm">
                                            <span>
                                                مشاهده پنل کاربری
                                            </span>
                                            <ArrowLeftIcon classes={'w-5 h-5 mt-1'}/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col p-3">
                                        <Link href={'/profile/favorite'} className="flex whitespace-nowrap items-center gap-2 p-3 text-base text-slate-600 rounded-xl hover:bg-slate-100">
                                            <HeartIcon classes={'w-6 h-6'}/>
                                            <span>
                                                لایک شده ها
                                            </span>
                                        </Link>
                                        <Link href={'/profile/bookmarks'} className="flex whitespace-nowrap items-center gap-2 p-3 text-base text-slate-600 rounded-xl hover:bg-slate-100">
                                            <BookmarkIcon classes={'w-6 h-6'}/>
                                            <span>
                                                ذخیره شده ها
                                            </span>
                                        </Link>
                                        <button onClick={()=>dispatch({ type:"SIGNOUT" })} className="flex whitespace-nowrap items-center gap-2 p-3 text-base text-slate-600 rounded-xl hover:bg-slate-100">
                                            <LogoutIcon classes={'w-6 h-6'}/>
                                            <span>
                                                خروج از حساب کاربری
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                        :
                        <div className={loading ? "hidden" : "block"}>
                            <div className="md:flex flex-row-reverse items-center hidden">
                                <Link href={'/signup'} className="flex items-center flex-row-reverse gap-1 bg-blue-600 text-blue-50 px-3 py-2 rounded-xl hover:bg-blue-500 duration-200">
                                    <span>
                                        <SolidUserAddIcon classes={'w-6 h-6'}/>
                                    </span>
                                    <span className="text-sm font-medium">
                                        ثبت نام
                                    </span>
                                </Link>
                                <Link href={'/login'} className="flex items-center flex-row-reverse gap-1 bg-blue-50 text-blue-600 pl-5 -ml-2 pr-3 py-2 rounded-r-xl hover:bg-blue-500 hover:text-blue-50 duration-200">
                                    <span>
                                        <SolidLoginIcon classes={'w-6 h-6'}/>
                                    </span>
                                    <span className="text-sm font-medium">
                                        ورود
                                    </span>
                                </Link>
                            </div>

                            <div className="md:hidden flex items-center justify-center">
                                <Link href={'/login'} className="bg-blue-50 rounded-xl p-3 text-blue-500 hover:bg-blue-500 hover:text-blue-50 duration-200">
                                    <SolidLoginIcon classes={'w-6 h-6'}/>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
     );
}

export default Header;