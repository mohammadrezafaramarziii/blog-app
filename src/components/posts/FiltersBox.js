import { CategoryIcon, SortIcon } from "../../common/forms/Icons";
import Dropdown from "../../common/forms/Dropdown";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import routerPush from "src/utils/routerPush";


const sortOption = [
    {label: "پربازدید ترین", id:"most"},
    {label: "محبوب ترین", id:"populer"},
    {label: "جدید ترین", id:"newest"},
];

function FiltersBox({ postCategory }) {
    const router = useRouter();
    const { query } = router;
    const [sort, setSort] = useState(router.query.sort || "newest");

    const sortHandler = (sortId) => {
        setSort(sortId);
        router.query.sort = sortId;
        routerPush(router);
    }

    return ( 
        <div className='w-full flex flex-col gap-3 lg:flex-row  border-b border-slate-300 pb-6'>

            {/* categories filter */}
            <div className='w-full sm:w-1/2 lg:w-1/5'>
                <Dropdown icon={<CategoryIcon classes={'w-5 h-5'}/>} title={'دسته بندی مقالات'}>
                    <Link href={`/blogs`} className={`block text-xs ${!query.categorySlug ? "text-indigo-500" : "text-slate-600"} font-medium rounded-md hover:bg-slate-100 duration-150 p-2`}>
                    همه مقالات
                    </Link>
                    {postCategory.map((category) => {
                    return(
                        <Link key={category._id} href={`/blogs/${category.englishTitle}`} className={`block text-xs ${query.categorySlug === category.englishTitle ? "text-indigo-500" : "text-slate-600"}  font-medium rounded-md hover:bg-slate-100 duration-150 p-2`}>
                        {category.title}
                        </Link>
                    )
                    })}
                </Dropdown>
            </div>


            {/* sort filter */}
            <div className='w-full sm:w-1/2 lg:w-1/5'>
                <Dropdown icon={<SortIcon classes={'w-5 h-5'}/>} title={'مرتب سازی'}>
                    {
                        sortOption.map((option)=>{
                            return(
                                <button onClick={()=>sortHandler(option.id)} key={option.id} className={`w-full text-right block text-xs font-medium rounded-md hover:bg-slate-100 ${option.id === sort ? "text-indigo-500" : "text-slate-600"} duration-150 p-2`}>
                                    {option.label}
                                </button>
                            )
                        })
                    }
                </Dropdown>
            </div>
        </div>
     );
}

export default FiltersBox;