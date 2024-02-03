import { useFormik } from "formik";
import Link from "next/link";
import Input from "src/common/forms/Input";
import { SolidLoginIcon, SolidUserAddIcon } from "src/common/forms/Icons";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import ToastSuccess from "src/common/toasts/ToastSuccess";
import ToastError from "src/common/toasts/ToastError";
import { useAuth, useAuthActions } from "src/context/AuthContext";
import { useEffect } from "react";


const initialValues = {
    email: "",
    password: "",
}

const validationSchema = Yup.object({
    email: Yup.string()
        .required("لطفا ایمیل خود را وارد کنید")
        .email("ایمیل نامعتبر است"),
    password: Yup.string()
        .required("رمز عبور وارد کنید")
        .min(8, "رمز عبور باید حداقل ۸ رقم باشد"),
});


function Login() {
    const router = useRouter();
    const dispatch = useAuthActions();
    const { user } = useAuth();

    const onSubmit = (values) => {
        const { email, password } = values;
        dispatch({type:"SIGNIN", payload: values});
    }
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    });

    useEffect(()=>{
        if(user) router.replace("/");
    },[user])

    return ( 
        <main className="w-full flex items-center justify-center bg-slate-100 min-h-screen px-4 py-14">
            <section className="w-full text-green-500 relative max-w-[30rem] bg-white rounded-xl shadow-md px-5 !py-12">

                {/* back to site */}
                <div className="top-5 left-5 absolute">
                    <Link href={"/"} className="text-xs px-2 py-1 rounded-md bg-slate-50 text-slate-700 hover:bg-slate-700 hover:text-slate-50 duration-200">
                        بازگشت به سایت
                    </Link>
                </div>


                {/* change between login and singup */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    <Link href={'/login'} className="flex itmes-center gap-1 px-5 py-3 bg-blue-600 text-blue-50  rounded-lg text-sm">
                        <SolidLoginIcon classes={'w-5 h-5'}/>
                        <span>
                            ورود
                        </span>
                    </Link>
                    <Link href={'/signup'} className="flex itmes-center gap-1 px-5 py-3 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-600 hover:text-blue-50 duration-200">
                        <SolidUserAddIcon classes={'w-5 h-5'}/>
                        <span>
                            ثبت نام
                        </span>
                    </Link>
                </div>


                {/* welcome text */}
                <div className="flex flex-col gap-2 items-center mt-6 mb-8">
                    <h1 className="text-xl text-slate-600 font-bold">
                        سلام، خوش اومدی!
                    </h1>
                    <p className="text-xs text-slate-400">
                        خیلی خوش اومدی، از طریق فرم زیر وارد پروفایلت شو
                    </p>
                </div>


                {/* signup form */}
                <form onSubmit={formik.handleSubmit} className="w-full px-3 md:px-8 flex flex-col gap-4">
                    <Input 
                        type={'email'}
                        title={'ایمیل'}
                        formik={formik}
                        name={'email'}
                    />
                    <Input 
                        type={'password'}
                        title={'رمز عبور'}
                        formik={formik}
                        name={'password'}
                    />
                    <button type="submit" className="w-full py-3 bg-blue-500 text-blue-50 font-semibold text-sm rounded-lg hover:bg-blue-600 duration-200 mt-3">
                        ورود
                    </button>
                </form>

            </section>
        </main>
     );
}

export default Login;