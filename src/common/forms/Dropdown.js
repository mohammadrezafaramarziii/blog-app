function Dropdown({ icon, title, children }) {
    return ( 
        <div className="w-full h-10 relative drop-down">

            {/* header */}
            <button className="drop-down-header hover:shadow border border-slate-600 rounded-md cursor-pointer w-full h-full pr-3 pl-2 flex items-center justify-between text-slate-700">
                <span className="text-sm font-medium">{title}</span>
                {icon}
            </button>

            {/* content */}
            <div className="z-50 w-full hidden drop-down-content absolute top-10 right-0 pt-2">
                <div className={`shadow-xl w-full bg-white rounded-md p-2 flex-col gap-2`}>
                    {children}
                </div>
            </div>

        </div>
     );
}

export default Dropdown;