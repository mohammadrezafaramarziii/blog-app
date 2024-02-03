import React, { useState } from "react";
import SingleComment from "./SingleComment";
import ReplayComment from "./ReplayComment";
import Comment from "./Comment";

function PostComments({ post }) {
    const [showAddComment, setShowAddComment] = useState(false);
    
    return ( 
        <section className="bg-white rounded-md p-6 md:p-10">
           <div className="flex items-center flex-col md:flex-row md:justify-between gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-500">
                    نظرات
                </h2>
                <div>
                    <button onClick={() => setShowAddComment(true)} className="text-white text-sm bg-blue-600 py-3 px-6 rounded-md">
                        افزودن نظر جدید
                    </button>
                </div>
           </div>

            {/* add new comment */}
           {
            showAddComment && 
            <Comment
                placeholder="نظر یا پرسش خود را بنویسید..."
                onClose={() => setShowAddComment(false)}
                postId={post._id}
                responseTo={null}
                setShowAddComment={setShowAddComment}
            />
           }


           {/* comments */}
           <div className="flex flex-col">
           {
            post.comments.map((comment, index)=>{
                return !comment.responseTo && comment.status === 2 && (
                    <React.Fragment key={index}>
                        <SingleComment comment={comment}/>
                        <ReplayComment comments={post.comments} parentCommentId={comment._id}/>
                    </React.Fragment>
                )
            })
           }
           </div>
        </section>
    );
}

export default PostComments;