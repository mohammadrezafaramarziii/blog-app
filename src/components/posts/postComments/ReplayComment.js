import React from "react";
import SingleComment from "./SingleComment";

function ReplayComment({ comments, parentCommentId }) {
    return comments.map((comment) => {
        return parentCommentId === comment.responseTo && (
            <div className="mr-4">
                <React.Fragment key={comment._id}>
                    <SingleComment comment={comment} className="!bg-gray-50"/>
                    <ReplayComment comments={comments} parentCommentId={comment._id}/>
                </React.Fragment>
            </div>
        )
    })
}

export default ReplayComment;