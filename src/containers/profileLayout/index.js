import { useState } from "react";
import { useAuth } from "src/context/AuthContext";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

function ProfileLayout({ children }) {
    const { user, loading } = useAuth();
    const [showMenu, setShowMenu] = useState(false);

    return ( 
        <section className="w-full h-screen">
            <div className="w-full h-full grid grid-cols-12">

                {/* side bar */}
                <SideBar 
                    showMenu={showMenu} 
                    setShowMenu={setShowMenu}
                />

                <div className="col-span-12 lg:col-span-9">

                    {/* navbar dashborad */}
                    <Navbar 
                        setShowMenu={setShowMenu} 
                        user={user} 
                        loading={loading}
                    />

                    {/* content */}
                    <div className="w-full h-full p-8 sm:p-10 lg:p-12 bg-slate-100 rounded-tr-3xl">
                        {children}
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ProfileLayout;