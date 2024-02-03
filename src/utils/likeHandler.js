import ToastError from "src/common/toasts/ToastError";
import ToastSuccess from "src/common/toasts/ToastSuccess";
import http from "src/services/httpService";
import routerPush from "./routerPush";

const likeHandler = (postId, router) => {
    http
        .put(`/posts/like/${postId}`)
        .then(({ data })=>{
            routerPush(router);
            if(data?.message === "liked successfully")
            {
                ToastSuccess("با موفقیت لایک شد");
            }
            else
            {
                ToastSuccess("لایک برداشته شد");
            }
    
        })
        .catch((err)=>{
            ToastError(err?.response?.data?.message);
        })
}
 
export default likeHandler;