// reducers logic can be improve with APIs 
export const getUpdatedReplyState = ({
    parentAnswerKey,
    parentReplyKey,
    nestedReplyKey,
    answer,
    currentUser
}, state) => {
    const parentAnswerIndex = state.answers.findIndex(answer => answer.id === parentAnswerKey);

    if (parentAnswerIndex > -1) {
        const parentAnswer = state.answers[parentAnswerIndex];
        const parentReplyIndex = parentAnswer?.replies.findIndex(reply => reply.id === parentReplyKey);
        const parentReply = parentAnswer.replies[parentReplyIndex];
        const nestedReplyIndex = parentReply?.replies.findIndex(reply => reply.id === nestedReplyKey);

        const payload = {
            id: `${parentAnswerKey}-reply-${state.answers[parentAnswerIndex].replies.length + 1}`,
            shortReply: answer.substring(0, 200),
            fullReply: answer,
            user: currentUser,
            replies: []
        }

        const replyIndex = nestedReplyKey ? nestedReplyIndex : parentReplyIndex

        return {
            ...state, answers: [...state.answers.slice(0, parentAnswerIndex),
            {
                ...parentAnswer,
                replies: [
                    ...parentAnswer.replies.slice(0, parentReplyIndex),
                    {
                        ...parentReply,
                        replies: [
                            ...parentReply.replies.slice(0, replyIndex + 1),
                            payload,
                            ...parentReply.replies.slice(replyIndex + 1)
                        ]
                    },
                    ...parentAnswer.replies.slice(parentReplyIndex + 1)
                ]
            },
            ...state.answers.slice(parentAnswerIndex + 1)]
        }
    }
}

export const getUpdatedAnswerState = ({
    parentAnswerKey,
    answer,
    currentUser
}, state) => {
    const parentAnswerIndex = state.answers.findIndex(answer => answer.id === parentAnswerKey);
        const payload = {
            id: `${parentAnswerKey}-reply-${state.answers[parentAnswerIndex].replies.length + 1}`,
            shortReply: answer.substring(0, 200),
            fullReply: answer,
            user: currentUser,
            replies: []
        }

        return {
            ...state, answers: [...state.answers.slice(0, parentAnswerIndex),
            {
                ...state.answers[parentAnswerIndex],
                replies: [...state.answers[parentAnswerIndex].replies, payload]
            },
            ...state.answers.slice(parentAnswerIndex + 1)]
        }
}


