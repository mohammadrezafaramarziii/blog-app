import http from "src/services/httpService";
import routerPush from "./routerPush";
import ToastSuccess from "src/common/toasts/ToastSuccess";
import ToastError from "src/common/toasts/ToastError";

const bookmarkHandler = (postId, router) => {
    http
        .put(`/posts/bookmark/${postId}`)
        .then(({ data })=>{
            routerPush(router);
            if(data?.message === "bookmarked successfully")
            {
                ToastSuccess("ذخیره شد");
            }
            else
            {
                ToastSuccess("از لیست ذخیره ها حذف شد");
            }
    
        })
        .catch((err)=>{
            ToastError(err?.response?.data?.message);
        })
}
 
export default bookmarkHandler;