import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { namespaceConfig } from 'fast-redux'
import ReplyInput from '../components/reply-input'
import mock from '../config/mock'
import { getUpdatedReplyState, getUpdatedAnswerState } from '../config/reducers'

const DEFAULT_STATE = mock

const { action } = namespaceConfig(
    'homepage',
    DEFAULT_STATE
)

const postAnswer = action('postAnswer', (state, {
    answer,
    parentAnswerKey = null,
    parentReplyKey = null,
    nestedReplyKey = null
}) => {
    const currentUser = {
        userName: 'Yatish Dhanani',
        title: 'Product marketing manager',
        company: 'Hello Dot Com',
        avatar: 'https://lh3.googleusercontent.com/a-/AAuE7mC-Eiite3DzsctDvNvBVgDNblNDcO-iWbOnGnDUcb4'
    }

    let payload = {
        id: `answer-${state.answers.length + 1}`,
        shortAnswer: answer.substring(0, 200),
        fullAnswer: answer,
        user: currentUser,
        replies: []
    }

    if (parentAnswerKey && !parentReplyKey) {
        return getUpdatedAnswerState({
            parentAnswerKey,
            answer,
            currentUser
        }, state)
    }

    if (parentAnswerKey && parentReplyKey) {
        return getUpdatedReplyState({
            parentAnswerKey,
            parentReplyKey,
            nestedReplyKey,
            answer,
            currentUser
        }, state)
    }

    return { ...state, answers: [...state.answers, payload] }
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ postAnswer }, dispatch)
}

export default connect(null, mapDispatchToProps)(ReplyInput)
