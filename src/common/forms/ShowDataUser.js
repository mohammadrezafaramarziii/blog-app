function ShowDataUser({ label, value }) {
    return ( 
        <div className="flex flex-col gap-2">
            <label className="text-xs pr-2 text-slate-800">
                {label}
            </label>
            <div className="h-10 flex items-center bg-slate-200 text-slate-500 font-medium px-3 text-sm rounded-xl">
                {value}
            </div>
        </div>
     );
}

export default ShowDataUser;