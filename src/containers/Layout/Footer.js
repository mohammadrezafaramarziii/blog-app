import { SolidDoubleHeartIcon } from "src/common/forms/Icons";

function Footer() {
    return ( 
        <footer className="w-[calc(100%+64px)] lg:w-[calc(100%+112px)] -mr-8 lg:-mr-14 mt-14 bottom-0 right-0 left-0 flex items-center justify-center p-3 bg-slate-100">
            <p className="flex items-center text-sm text-slate-700 font-semibold">
                ساخته شده با <SolidDoubleHeartIcon classes={'w-6 h-6 text-red-500 mx-1'}/> توسط محمدرضا فرامرزی
            </p>
        </footer>
     );
}

export default Footer;