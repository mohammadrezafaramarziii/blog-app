import Footer from "./Footer";
import Header from "./Header";

function Layout({children}) {
    return ( 
        <div className="bg-slate-200 min-h-screen px-8 lg:px-14">
            <Header />
            {children}
            <Footer />
        </div>
     );
}

export default Layout;