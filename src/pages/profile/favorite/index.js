import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BookmarkIcon, CategoryIcon, ChatIcon, HeartIcon, SolidBookmarkIcon, SolidHeartIcon, WatchIcon } from "src/common/forms/Icons";
import ProfileLayout from "src/containers/profileLayout";
import http from "src/services/httpService";
import bookmarkHandler from "src/utils/bookmarkHandler";
import likeHandler from "src/utils/likeHandler";
import { toPersianDigits } from "src/utils/toPersianDigits";

function Favorite({data}) { 
    const router = useRouter();

    return ( 
        <ProfileLayout>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-600 mb-4 lg:mb-10">
                لایک شده ها
            </h2>

            {
              data.length !== 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data.map((post)=>{
                    if(post.isLiked){
                      return(
                        <div key={post._id} className="flex flex-col bg-white rounded-md p-4 max-h[360px]">

                          {/* cover post */}
                          <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                            <Link href={`/posts/${post.hashId}/${post.slug}`}>
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                width={1000}
                                height={1000}
                                className="w-full h-full object-center object-cover hover:scale-110 duration-200"
                              />
                            </Link>
                          </div>

                          {/* content post */}
                          <div className="w-full flex-1 flex flex-col justify-between">
                            <Link href={`/posts/${post.hashId}/${post.slug}`}>
                              <h2 className="text-xl font-bold text-slate-700 mt-2 mb-4 hover:text-blue-600 duration-200">
                                {post.title}
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
                                    {post.author.name}
                                  </div>
                                </div>

                                <Link href={`/blogs/${post.category.englishTitle}`}>
                                  <div className="flex items-center justify-center gap-1 hover:bg-blue-500 hover:text-white duration-200 bg-slate-50 text-blue-500 rounded-md px-2 py-1">
                                    <CategoryIcon classes={'w-[14px] h-[14px]'}/>
                                    <span className="text-xs font-medium">
                                      {post.category.title}
                                    </span>
                                  </div>
                                </Link>
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-2">

                                  <div className="flex items-center gap-1 px-1 h-5 text-purple-900 bg-slate-200 rounded-md">
                                    <ChatIcon classes="w-3 h-3"/>
                                    <span className="text-xs">
                                      {toPersianDigits(post.comments.length)}
                                    </span>
                                  </div>

                                  <button onClick={()=>likeHandler(post._id, router)} className="flex items-center gap-1 px-1 h-5 text-red-600 bg-red-100 rounded-md hover:bg-red-500 hover:text-red-100 duration-200">
                                    
                                    {post.isLiked ? <SolidHeartIcon classes="w-3 h-3"/> : <HeartIcon classes="w-3 h-3"/>}
                                    <span className="text-xs">
                                      {toPersianDigits(post.likesCount)}
                                    </span>
                                  </button>

                                  <button onClick={()=>bookmarkHandler(post._id, router)} className="text-xs flex items-center gap-1 h-5 px-1 text-blue-600 bg-blue-100 rounded-md hover:text-blue-100 hover:bg-blue-500 duration-200">
                                    {post.isBookmarked ? <SolidBookmarkIcon classes="w-3 h-3"/> : <BookmarkIcon classes="w-3 h-3"/>}
                                  </button>

                                </div>

                                <div className="flex items-center gap-1 text-slate-600">
                                  <WatchIcon classes="w-4 h-4"/>
                                  <span className="text-[10px] font-medium">
                                    زمان مطالعه : {toPersianDigits(post.readingTime)} دقیقه
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      )
                    }
                  })}
                </div>
                :
                <div className="w-full">
                  <Image 
                    src={'/images/no-post.png'}
                    alt=""
                    width={368}
                    height={368}
                    className="w-auto inset-0 m-auto opacity-30"
                    priority
                  />
                </div>
            }
        </ProfileLayout>
    );
}

export default Favorite;



export async function getServerSideProps({req}){
    const { data : result } = await http.get(`/posts?limit=30}`,{
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      });
      const { data } = result;
      
      let finalData = [];

      for(let postIndex in data.docs){
        if(data.docs[postIndex].isLiked) finalData.push(data.docs[postIndex]);
      }
    
      return{
        props: {
          data:finalData
        }
      }
}