import moment from "jalali-moment";
import { MenuIcon } from "src/common/forms/Icons";
import { toPersianDigits } from "src/utils/toPersianDigits";

function Navbar({ setShowMenu, user, loading }) {

    return ( 
        <div className="flex items-center gap-2 pt-8 px-4 pb-4 lg:pt-10 lg:pb-8">
            <button onClick={(open) => setShowMenu(open)} className="p-2 bg-purple-900 text-purple-100 rounded-xl lg:hidden">
                <MenuIcon classes={'w-6 h-6'}/>
            </button>
            <div className="sm:flex items-center gap-3">
                <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-slate-600">
                    {!loading && user?.name} عزیز، خوش آمدید😊
                </h1>
                <span className="text-xs sm:text-sm lg:text-base text-slate-400 sm:border-r border-slate-200 sm:pr-3">
                    {toPersianDigits(moment().locale("fa").format("dddd, D MMMM YYYY"))}
                </span>
            </div>
        </div>
     );
}

export default Navbar;