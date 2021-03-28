import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getUpdatedReplyState, getUpdatedAnswerState } from '../config/reducers'

import mock from '../config/mock'

let store;
const initialState = mock;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_ANSWER':
            const {
                answer,
                parentAnswerKey = null,
                parentReplyKey = null,
                nestedReplyKey = null
            } = action.payload
            
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
        default:
            return state
    }
}

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export const useStore = (initialState) => {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
