import { useFormik } from "formik";
import Link from "next/link";
import Input from "src/common/forms/Input";
import { SolidLoginIcon, SolidUserAddIcon } from "src/common/forms/Icons";
import * as Yup from "yup";
import axios from "axios";
import ToastSuccess from "src/common/toasts/ToastSuccess";
import ToastError from "src/common/toasts/ToastError";
import { useRouter } from "next/router";
import { useAuth, useAuthActions } from "src/context/AuthContext";
import { useEffect } from "react";


const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required("لطفا نام و نام خانوادگی را وارد کنید")
        .min(6, "نام و نام خانوادگی باید حداقل ۶ کارکتر باشد"),
    email: Yup.string()
        .required("لطفا ایمیل خود را وارد کنید")
        .email("ایمیل نامعتبر است"),
    phoneNumber: Yup.string()
        .required("لطفا شماره موبایل را وارد کنید")
        .matches(/^[0-9]{11}$/, "شماره موبایل باید ۱۱ رقم باشد")
        .nullable(),
    password: Yup.string()
        .required("رمز عبور جدید وارد کنید")
        .min(8, "رمز عبور باید حداقل ۸ رقم باشد"),
    confirmPassword: Yup.string()
        .required("رمز عبور را مجدد وارد کنید")
        .oneOf([Yup.ref("password"), ""], "رمز عبور هم خوانی ندارد")
});


function SignUpForm() {
    const router = useRouter();
    const dispatch = useAuthActions();
    const { user } = useAuth();

    const onSubmit = (values) => {
        const { name, phoneNumber, email, password } = values;
        dispatch({ type: "SIGNUP", payload: { name, phoneNumber, email, password } });
    }
        
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    });

    useEffect(()=>{
        if(user) router.replace("/")
    }, [user])

    return ( 
        <main className="w-full flex items-center justify-center bg-slate-100 min-h-screen px-4 py-14">
            <section className="w-full relative max-w-[30rem] bg-white rounded-xl shadow-md px-5 !py-12">

                {/* back to site */}
                <div className="top-5 left-5 absolute">
                    <Link href={"/"} className="text-xs px-2 py-1 rounded-md bg-slate-50 text-slate-700 hover:bg-slate-700 hover:text-slate-50 duration-200">
                        بازگشت به سایت
                    </Link>
                </div>


                {/* change between login and singup */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    <Link href={'/login'} className="flex itmes-center gap-1 px-5 py-3 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-600 hover:text-blue-50 duration-200">
                        <SolidLoginIcon classes={'w-5 h-5'}/>
                        <span>
                            ورود
                        </span>
                    </Link>
                    <Link href={'/signup'} className="flex itmes-center gap-1 px-5 py-3 bg-blue-600 text-blue-50  rounded-lg text-sm">
                        <SolidUserAddIcon classes={'w-5 h-5'}/>
                        <span>
                            ثبت نام
                        </span>
                    </Link>
                </div>


                {/* welcome text */}
                <div className="flex flex-col gap-2 items-center mt-6 mb-8">
                    <h1 className="text-xl text-slate-600 font-bold">
                        ثبت نام
                    </h1>
                    <p className="text-xs text-slate-400">
                    خیلی خوش اومدید، از طریق فرم زیر ثبت نام کن
                    </p>
                </div>


                {/* signup form */}
                <form onSubmit={formik.handleSubmit} className="w-full px-3 md:px-8 flex flex-col gap-4">
                    <Input 
                        type={'text'}
                        title={'نام و نام خانوادگی'}
                        formik={formik}
                        name={'name'}
                    />
                    <Input 
                        type={'email'}
                        title={'ایمیل'}
                        formik={formik}
                        name={'email'}
                    />
                    <Input 
                        type={'tel'}
                        title={'شماره موبایل'}
                        formik={formik}
                        name={'phoneNumber'}
                    />
                    <Input 
                        type={'password'}
                        title={'رمز عبور'}
                        formik={formik}
                        name={'password'}
                    />
                    <Input 
                        type={'password'}
                        title={'تکرار رمز عبور'}
                        formik={formik}
                        name={'confirmPassword'}
                    />
                    <button type="submit" className="w-full py-3 bg-blue-500 text-blue-50 font-semibold text-sm rounded-lg hover:bg-blue-600 duration-200 mt-3">
                        ثبت نام
                    </button>
                </form>

            </section>
        </main>
     );
}

export default SignUpForm;