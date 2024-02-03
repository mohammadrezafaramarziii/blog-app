import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BookmarkIcon, CategoryIcon, ChatIcon, CopyIcon, FacebookIcon, HeartIcon, InstagramIcon, SolidBookmarkIcon, SolidHeartIcon, TelegramIcon, UserIcon, WatchIcon } from "src/common/forms/Icons";
import PostComments from "src/components/posts/postComments/PostComments";
import PostList from "src/components/posts/PostList";
import Layout from "src/containers/Layout";
import http from "src/services/httpService";
import bookmarkHandler from "src/utils/bookmarkHandler";
import likeHandler from "src/utils/likeHandler";
import { toPersianDigits } from "src/utils/toPersianDigits";


export default function Post({ postData, postsCategory }) {
    const [copy, setCopy] = useState(false);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const copyHandler = () => {
        setCopy(true);

        setTimeout(()=>{
            setCopy(false);
        }, 1000)
    }

    useEffect(()=>{
        setIsLoading(false);
    },[]);

    return ( 
        <Layout>
            <div className="contarnet mx-auto">
                <div className="w-full flex flex-col gap-6 xl:gap-5 xl:grid grid-cols-12">

                    {/* post content */}
                    <div className="w-full xl:col-span-9 ">
                        <div className="bg-white p-6 shadow rounded-md ">
                            <main className="prose max-w-full 
                            prose-img:w-full  prose-img:h-[12rem] sm:prose-img:h-[450px] prose-img:rounded-md
                            prose-slate prose-h1:text-xl md:prose-h1:text-3xl  prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10
                            prose-a:text-blue-500 mb-8
                            ">
                                <Image 
                                    src={postData.coverImage}
                                    alt={postData.title}
                                    width={1000}
                                    height={1000}
                                />
                                <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-5">
                                    <Link href={`/blogs/${postData.category.englishTitle}`} className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-2 decoration-transparent hover:bg-blue-500 hover:text-white duration-200 bg-slate-100 rounded-lg text-blue-500">
                                        <CategoryIcon classes={'w-3 h-3 md:w-5 md:h-5'}/>
                                        <span className="text-xs md:text-base font-medium">
                                            {postData.category.title}
                                        </span>
                                    </Link>

                                    <div className="flex items-center gap-2 text-slate-500">
                                        <WatchIcon classes={'w-4 h-4 md:w-5 md:h-5'}/>
                                        <span className="text-xs md:text-base">
                                            زمان مطالعه : {toPersianDigits(postData.readingTime)} دقیقه
                                        </span>
                                    </div>
                                </div>

                                <h1>
                                    {postData.title}
                                </h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                    ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                                    و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                                    علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تای
                                    پ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>

                                <h2>
                                    عنوان اول
                                </h2>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                    ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                                    و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                                    علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تای
                                    پ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <h2>نحوه کانفیگ تیلویند</h2>
                                <p>
                                    بدون استفاده از <a href="https://highlightjs.org/">highlight.js</a> میتوان به سادگی
                                    کدها را داخل محتوای بلاگ ها قرار داد!
                                </p>
                                <p>
                                به عنوان مثال، برای کانفیگ تیلویند باید از فایل <code>tailwind.config.js</code>{" "}
                                استفاده کرد:
                                </p>
                                <pre dir="ltr">{`module.exports = {
                purge: [],
                theme: {
                    extend: {},
                },
                variants: {},
                plugins: [],
            }
                                `}</pre>
                            </main>

                            <section className="border-t border-slate-200 pt-4">
                                <ul className="flex items-center gap-2 flex-wrap md:mb-6">
                                    {["نکست", "ریکت", "جاوا اسکریپت", "css", "html", "ویو", "طراحی وب"].map((tag, index)=>{
                                        return(
                                            <li key={index} className="hover:bg-blue-500 hover:text-blue-100 duration-200 cursor-pointer px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 text-slate-700 bg-slate-100 rounded-lg">
                                                {tag}
                                            </li>
                                        )
                                    })}
                                </ul>
                                
                                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between mt-4">
                                    <div className="flex flex-row-reverse items-center justify-center gap-6">
                                        <button onClick={()=>bookmarkHandler(postData._id, router)} className="text-slate-500 hover:text-blue-500 duration-200">
                                        {
                                            postData.isBookmarked ?
                                            <SolidBookmarkIcon classes={'w-5 h-5'}/>
                                            :
                                            <BookmarkIcon classes={'w-5 h-5'}/>
                                        }
                                        </button>
                                        <button onClick={()=>likeHandler(postData._id, router)} className={`${postData.isLiked ? "text-red-600" : "text-slate-500"} hover:text-red-600 duration-200 flex items-center gap-1`}>
                                            {
                                                postData.isLiked ?
                                                <SolidHeartIcon classes={'w-5 h-5'}/>
                                                :
                                                <HeartIcon classes={'w-5 h-5'}/>
                                            }
                                            <span>
                                                {toPersianDigits(postData.likesCount)}
                                            </span>
                                        </button>
                                        <div className="text-slate-500 hover:text-green-600 duration-200 flex items-center gap-1">
                                            <ChatIcon classes={'w-5 h-5'}/>
                                            <span>
                                                {toPersianDigits(postData.comments.length)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 md:flex-row">
                                        <div className="flex items-center gap-3">
                                            <a 
                                                className="text-slate-300 hover:text-blue-500 duration-200"
                                                target="_blank"
                                                rel="noreffer"
                                                href={`https://t.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/${postData.hashId}/${postData.slug}&text=${postData.title}`}
                                            >
                                                <TelegramIcon classes={'w-6 h-6'}/>
                                            </a>
                                            <a className="text-slate-300 hover:text-blue-500 duration-200">
                                                <InstagramIcon classes={'w-6 h-6'}/>
                                            </a>
                                            <a className="text-slate-300 hover:text-blue-500 duration-200">
                                                <FacebookIcon classes={'w-5 h-5'}/>
                                            </a>
                                        </div>

                                        <div>
                                            <CopyToClipboard
                                                text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${postData.hashId}/${postData.slug}`}
                                                onCopy={copyHandler}
                                            >
                                                <button className="flex items-center gap-1 text-slate-400 border border-slate-200 px-2 py-1 md:px-3 md:py-2 rounded-full">
                                                    <span className="text-[10px] md:text-xs">
                                                        {copy ? "کپی شد" : `${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${postData.hashId}/${postData.slug}`}
                                                    </span>
                                                    <CopyIcon classes={'w-3 h-3'}/>
                                                </button>
                                            </CopyToClipboard>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <section className="my-6 md:my-12 hidden xl:block">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-600 mb-8">
                                پست های مشابه
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                <PostList blogData={postData.related}/>
                            </div>
                        </section>

                        <div className="hidden xl:block">
                            {
                                !isLoading && <PostComments post={postData}/>
                            }
                        </div>
                    </div>




                    {/* post details */}
                    <aside className="w-full xl:col-span-3 flex flex-col gap-3">
                        <div className="flex items-center gap-1 border border-slate-300 rounded-md p-4">
                            <div className="w-12 h-12 rounded-full border border-blue-500 overflow-hidden">
                                <Image 
                                    src={'/images/MyProfile.png'}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-full h-full hover:scale-110 duration-150"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg text-slate-700 font-bold">
                                    {postData.author.name}
                                </h3>
                                <span className="text-xs text-slate-400 font-light">
                                    {postData.author.biography}
                                </span>
                            </div>
                        </div>

                        <div className="border border-slate-300 rounded-md p-4">
                            <div className="mb-4">
                                <h5 className="text-sm text-slate-700 font-bold mb-1">
                                    مقالات مرتبط
                                </h5>
                                <p className="text-[10px] text-slate-400 font-light truncate">
                                    در اینجا میتوانید مقالات مرتبط با این مقاله را مشاهده کنید.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                {postsCategory.docs.map((post) => {
                                    return(
                                        postData.hashId !== post.hashId &&
                                        <div key={post._id} className="w-full bg-white p-4 rounded-md flex flex-col gap-2">
                                            <div className="text-sm hover:text-blue-500 duration-200 text-slate-700 font-semibold relative before:absolute before:top-0 before:-right-4 before:rounded-l-full before:bg-blue-500 before:w-1 before:h-6">
                                                <Link href={`/posts/${post.hashId}/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </div>
                                            <div className="flex items-center justify-end text-slate-400">
                                                <div className="flex items-center gap-1">
                                                    <UserIcon classes={'w-3 h-3'}/>
                                                    <span className="text-[10px]">
                                                        {post.author.name}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-1 pr-2 mr-2 border-r border-slate-300">
                                                    <WatchIcon classes={'w-3 h-3'}/>
                                                    <span className="text-[10px]">
                                                        زمان مطالعه : {toPersianDigits(post.readingTime)} دقیقه
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-center mt-4">
                                <Link href={'/blogs'}>
                                    <button className="px-8 py-3 rounded-md border border-blue-600 text-blue-600 text-xs hover:bg-blue-600 hover:text-white duration-200">
                                        مشاهده همه مقالات
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </aside>

                    <section className="my-6 md:my-12 xl:hidden">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-600 mb-8">
                            پست های مشابه
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            <PostList blogData={postData.related}/>
                        </div>
                    </section>

                    <div className="xl:hidden">
                        {
                            !isLoading && <PostComments post={postData}/>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(ctx){
    const { query, req } = ctx;
    const { data : { data } } = await http.get(`/posts/${query.postSlug}`, {
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      });
    const { data : { data : postsCategory } } = await http.get(`/posts?categorySlug=${data.category.englishTitle}&&limit=10`);

    return {
        props: {
            postData: data,
            postsCategory
        }
    }
}
