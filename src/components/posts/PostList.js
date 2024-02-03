import Image from "next/image";
import Link from "next/link";
import { BookmarkIcon, CategoryIcon, ChatIcon, HeartIcon, SolidBookmarkIcon, SolidHeartIcon, WatchIcon } from "../../common/forms/Icons";
import { toPersianDigits } from "src/utils/toPersianDigits";
import http from "src/services/httpService";
import { useRouter } from "next/router";
import ToastError from "src/common/toasts/ToastError";
import ToastSuccess from "src/common/toasts/ToastSuccess";
import routerPush from "src/utils/routerPush";
import likeHandler from "src/utils/likeHandler";
import bookmarkHandler from "src/utils/bookmarkHandler";

function PostList({blogData}) {
    const router = useRouter();

    return ( 
        blogData.map((blog, index)=>{
          return(
            <div key={index} className="flex flex-col bg-white rounded-md p-4 max-h[360px]">

              {/* cover post */}
              <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                  <Image 
                    src={blog.coverImage}
                    alt={blog.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-center object-cover hover:scale-110 duration-200"
                  />
                </Link>
              </div>

              {/* content post */}
              <div className="w-full flex-1 flex flex-col justify-between">
                <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                  <h2 className="text-xl font-bold text-slate-700 mt-2 mb-4 hover:text-blue-600 duration-200">
                    {blog.title}
                  </h2>
                </Link>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div>
                        <Image 
                          src={'/images/MyProfile.png'}
                          alt=""
                          width={100}
                          height={100}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>

                      <div className="text-xs text-slate-400 font-medium">
                        {blog.author.name}
                      </div>
                    </div>

                    <Link href={`/blogs/${blog.category.englishTitle}`}>
                      <div className="flex items-center justify-center gap-1 hover:bg-blue-500 hover:text-white duration-200 bg-slate-50 text-blue-500 rounded-md px-2 py-1">
                        <CategoryIcon classes={'w-[14px] h-[14px]'}/>
                        <span className="text-xs font-medium">
                          {blog.category.title}
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">

                      <div className="flex items-center gap-1 px-1 h-5 text-purple-900 bg-slate-200 rounded-md">
                        <ChatIcon classes="w-3 h-3"/>
                        <span className="text-xs">
                          {toPersianDigits(blog.comments.length)}
                        </span>
                      </div>

                      <button onClick={()=>likeHandler(blog._id, router)} className="flex items-center gap-1 px-1 h-5 text-red-600 bg-red-100 rounded-md hover:bg-red-500 hover:text-red-100 duration-200">
                        
                        {blog.isLiked ? <SolidHeartIcon classes="w-3 h-3"/> : <HeartIcon classes="w-3 h-3"/>}
                        <span className="text-xs">
                          {toPersianDigits(blog.likesCount)}
                        </span>
                      </button>

                      <button onClick={()=>bookmarkHandler(blog._id, router)} className="text-xs flex items-center gap-1 h-5 px-1 text-blue-600 bg-blue-100 rounded-md hover:text-blue-100 hover:bg-blue-500 duration-200">
                        {blog.isBookmarked ? <SolidBookmarkIcon classes="w-3 h-3"/> : <BookmarkIcon classes="w-3 h-3"/>}
                      </button>

                    </div>

                    <div className="flex items-center gap-1 text-slate-600">
                      <WatchIcon classes="w-4 h-4"/>
                      <span className="text-[10px] font-medium">
                        زمان مطالعه : {toPersianDigits(blog.readingTime)} دقیقه
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )
        })
     );
}

export default PostList;