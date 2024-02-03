function Input({ title, type, placeholder="", formik, name }) {
    return ( 
        <div className="w-full">
            <div className="flex flex-col gap-2">
                <label className="mr-2 text-xs text-slate-500 font-light">
                    {title}
                </label>
                <input
                    type={type || "text"}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    onChange={formik.handleChange}
                    value={formik.values[name]}
                    onBlur={formik.handleBlur}
                    className={`border ${formik.errors[name] && formik.touched[name] ? "border-red-600" : "border-slate-200"} bg-slate-100 outline-none focus:border-blue-500 rounded-lg text-sm text-slate-700 placeholder-slate-400 h-12 px-4`}
                />
            </div>
            {
                formik.errors[name] && formik.touched[name] ? (
                <span className="text-xs text-red-600 font-semibold mr-2 mt-2 block">
                    {formik.errors[name]}
                </span>
                )
                :
                null
            }
        </div>
     );
}

export default Input;