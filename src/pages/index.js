import Link from "next/link";
import Layout from "src/containers/Layout";

function Home() {
    return ( 
        <Layout>
            <div className="text-4xl font-bold container mx-auto lg:max-w-screen-xl pt-10 pr-14">
                خانه
            </div>
        </Layout>
     );
}

export default Home;