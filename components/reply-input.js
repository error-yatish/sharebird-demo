import React, { useRef } from 'react';

const ReplyInput = ({
    userName = 'user',
    parentAnswerKey= null,
    parentReplyKey = null,
    nestedReplyKey = null,
    replyType = 'answer',
    postAnswer
}) => {
    const inputEl = useRef(null);

    const handleOnChange = (e) => {
        if (e.code === 'Enter') {
            postAnswer({ answer: e.target.value, type: replyType, parentAnswerKey, parentReplyKey, nestedReplyKey })
            inputEl.current.value = ''
        }
    }

    return <div className='d-flex flex-row mt-3'>
        <div className='image me-3'> <img src='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' className='rounded-circle' width='35' /> </div>
        <input className="form-control" type="text" ref={inputEl} placeholder={replyType === 'answer' ? 'Add An Answer' : `Reply to ${userName}`} aria-label="default input example" onKeyDown={(e) => handleOnChange(e)} />
    </div>
}

export default ReplyInput
