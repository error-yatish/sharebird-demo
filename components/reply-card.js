import React, { useState } from 'react'
import CardHeader from './card-header'
import ReplyInput from './reply-input'

const ReplyCard = ({
    replyData: {
        shortReply,
        fullReply,
        user
    },
    replyId,
    answerId,
    nestedReplyKey,
    children
}) => {
    const [showMore, setShowMore] = useState(false);

    return <>
        <hr />
        <div className=''>
            <CardHeader userData={user} />
            <div className='ms-5'>
                <p className='card-text mt-3'>
                    {showMore ? fullReply : shortReply}
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'less' : 'more'}
                    </button>
                </p>
                <ReplyInput
                    userName={user.userName}
                    replyType='reply'
                    parentAnswerKey={answerId}
                    parentReplyKey={replyId}
                    nestedReplyKey={nestedReplyKey}
                />
                {children}
            </div>
        </div>
    </>
}

export default ReplyCard
