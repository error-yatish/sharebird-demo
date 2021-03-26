import React, { useState } from 'react'
import ReplayCard from './reply-card'
import CardHeader from './card-header'
import Card from './card'
import ReplyInputComponent from '../containers/reply-input'

const AnswerCard = ({
    answerData: {
        id,
        shortAnswer,
        fullAnswer,
        user,
        replies = []
    }
}) => {
    const [showMore, setShowMore] = useState(false);

    return <Card>
        <CardHeader userData={user} />
        <div className='ms-5'>
            <span className='card-text'>
                {showMore ? fullAnswer : shortAnswer}
                <button type="button" className="btn btn-link" onClick={() => setShowMore(!showMore)}>{showMore ? 'less' : 'more'}</button>
            </span>
            <ReplyInputComponent userName={user.userName} replyType='reply' parentAnswerKey={id} />
            {
                Boolean(replies.length) && replies.map(reply => <ReplayCard key={reply.id} replyData={reply} answerId={id} replyId={reply.id}>
                    {
                        reply.replies.map(nestedReply => <ReplayCard key={nestedReply.id} answerId={id} replyData={nestedReply} replyId={reply.id} nestedReplyKey={nestedReply.id} />)
                    }
                </ReplayCard>)
            }
        </div>
    </Card>
}

export default AnswerCard
