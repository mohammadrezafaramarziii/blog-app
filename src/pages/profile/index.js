import moment from "jalali-moment";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ShowDataUser from "src/common/forms/ShowDataUser";
import ProfileLayout from "src/containers/profileLayout";
import { useAuth } from "src/context/AuthContext";
import { toPersianDigits } from "src/utils/toPersianDigits";

function Profile() {
    const { user, loading } = useAuth();
    const router = useRouter();

    console.log(user);

    useEffect(()=>{
        if(!loading && !user) router.replace("/login")
    },[user])

    if(!user) return null

    return ( 
        <ProfileLayout>
            <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-600 mb-4 lg:mb-10">
                    اطلاعات پروفایل شما
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ShowDataUser 
                        label={'نام و نام خانوادگی'}
                        value={!loading && user?.name}
                    />
                    <ShowDataUser 
                        label={'ایمیل'}
                        value={!loading && user?.email}
                    />
                    <ShowDataUser 
                        label={'شماره موبایل'}
                        value={!loading && toPersianDigits(user?.phoneNumber)}
                    />
                    <ShowDataUser 
                        label={'تاریخ عضویت'}
                        value={!loading && toPersianDigits(moment(user?.createdAt).locale("fa").format("YYYY/MM/DD"))}
                    />
                </div>
            </div>
        </ProfileLayout>
     );
}

export default Profile;