import { useState } from "react";
import { ReplayCommentIcon, SolidUserIcon } from "src/common/forms/Icons";
import Comment from "./Comment";

function SingleComment({ comment, className, postId }) {
    const [replay, setReplay] = useState(false);
    
    return ( 
        <div className={`p-6 border border-slate-200 rounded-lg mb-4 ${className}`}>
            {/* profile user */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="border-2 border-blue-500 rounded-full text-blue-200 p-2">
                        <SolidUserIcon classes={'w-6 h-6'}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-slate-600 font-semibold text-lg">
                            {comment.writer.name}
                        </h3>
                        <span className="text-sm text-slate-400">
                            {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
                        </span>
                    </div>
                </div>
                <button onClick={() => setReplay(true)} className="flex items-center gap-1 bg-blue-100 text-slate-600 rounded-md px-2 py-1 hover:bg-blue-500 hover:text-white duration-200">
                    <ReplayCommentIcon classes={'w-5 h-5'}/>
                    <span className="text-xs font-semibold">
                        پاسخ
                    </span>
                </button>
            </div>

            {/* comment */}
            <div className="mt-5 pt-4 border-t border-slate-200">
                <p className="text-slate-600">
                    {comment.content}
                </p>
            </div>


            {/* add replay */}
            {
            replay && 
            <Comment 
                placeholder={`در حال پاسخ به ${comment.writer.name}`}
                onClose={() => setReplay(false)}
                postId={comment.postId}
                responseTo={comment._id}
                setReplay={setReplay}                
            />
            }


        </div>
     );
}

export default SingleComment;