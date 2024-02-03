import { useRouter } from "next/router";
import { useState } from "react";
import ToastError from "src/common/toasts/ToastError";
import ToastSuccess from "src/common/toasts/ToastSuccess";
import http from "src/services/httpService";
import routerPush from "src/utils/routerPush";


const Comment = ({ placeholder, onClose, postId, responseTo, setReplay, setShowAddComment }) => {
    const [commentValue, setCommentValue] = useState("");
    const router = useRouter();

    const sendCommentHandler = (e) => {
        e.preventDefault();
        const data = {
            content: commentValue,
            postId,
            responseTo
        };

        http.post("/post-comment/save-comment", data)
        .then(({data})=>{
            setCommentValue("");
            if(setReplay) setReplay((open) => !open);
            if(setShowAddComment) setShowAddComment((open) => !open);
            ToastSuccess(data.message);
            routerPush(router);
        })
        .catch((err)=>{
            ToastError(err?.response?.data?.message)
        })
    }

    return ( 
        <div className="my-4">
            <textarea 
                className="w-full border outline-none focus:border-blue-500 border-slate-200 rounded-md p-3 placeholder-slate-400 text-sm md:text-base text-slate-800"
                placeholder={placeholder}
                rows={9}
                value={commentValue}
                onChange={({target})=>setCommentValue(target.value)}
            >

            </textarea>
            <div className="flex items-center justify-center gap-3">
                <button onClick={sendCommentHandler} disabled={commentValue.length <= 3 && true} className="border disabled:bg-slate-400 disabled:border-slate-400 border-blue-500 hover:border-blue-600 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 duration-200 px-4 py-2">
                    ثبت نظر
                </button>
                <button onClick={onClose} className="border border-slate-600 text-sm text-slate-600 rounded-md hover:bg-slate-600 hover:text-white duration-200 px-4 py-2">
                    انصراف
                </button>
            </div>
        </div>
     );
}
 
export default Comment;