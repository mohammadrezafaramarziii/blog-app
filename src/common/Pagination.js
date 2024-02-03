import { Pagination, PaginationItem } from "@mui/material";
import { useRouter } from "next/router";
import { ArrowLeftSolidIcon, ArrowRightSolidIcon } from "src/common/forms/Icons";
import routerPush from "src/utils/routerPush";

const PaginationComponent = ({ totalPages, page }) => {
    const router = useRouter();

    const paginationHandler = (e, page) => {
      router.query.page = page;
      routerPush(router);
    }
  
    return ( 
        <div className='flex justify-center col-span-full'>
            {
                totalPages > 1 &&
                <Pagination
                    count={totalPages} 
                    color="secondary" 
                    dir='ltr'
                    page={page}
                    onChange={paginationHandler}
                    shape="rounded"
                    renderItem={(item) => (
                        <PaginationItem
                          slots={{ previous: ArrowLeftSolidIcon, next: ArrowRightSolidIcon }}
                          {...item}
                        />
                      )}
                />
            }
        </div>
     );
}
 
export default PaginationComponent;