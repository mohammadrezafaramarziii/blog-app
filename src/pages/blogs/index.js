import axios from 'axios';
import PostList from 'src/components/posts/PostList';
import { BooksEmojiIcon } from 'src/common/forms/Icons';
import FiltersBox from 'src/components/posts/FiltersBox';
import Layout from 'src/containers/Layout';
import http from 'src/services/httpService';
import queryString from 'query-string';
import { Pagination } from '@mui/material';
import PaginationComponent from 'src/common/Pagination';

export default function Blogs({ data, postCategory }) {
  
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-screen-xl px-4 lg:px-0'>
        <div className='grid grid-cols-12'>

          {/* aside */}
          <div className='hidden lg:inline-block col-span-3'>

          </div>
                        
          {/* posts */}
          <div className='col-span-full lg:col-span-9'>
            <FiltersBox postCategory={postCategory}/>

            <div>
              <div className='w-full flex items-center gap-4 sm:gap-6 py-6'>
                <BooksEmojiIcon classes={'w-10 h-10 sm:w-12 sm:h-12'}/>
                <h1 className='text-3xl sm:text-4xl font-extrabold text-slate-600'>
                  مقالات
                </h1>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                <PostList blogData={data.docs}/>
                <PaginationComponent totalPages={data.totalPages} page={data.page}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export async function getServerSideProps({req, query}){
  const { data : result } = await http.get(`/posts?${queryString.stringify(query)}`,{
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie
    }
  });
  const { data : postCategory } = await http.get("/post-category");
  const { data } = result;

  return{
    props: {
      data,
      postCategory : postCategory.data
    }
  }
}