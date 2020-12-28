import { POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAILURE } from './postTypes';

const initialState = {
    loading: false,
    user: {},
    error: ''
}

const post = (state = initialState, action) => {
    switch (action.type) {
        case POST_FETCH_REQUEST:
            return {
                loading: true,
                post: {},
                error: '',
            }
        case POST_FETCH_SUCCESS:
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case POST_FETCH_FAILURE:
            return {
                loading: false,
                post: {},
                error: action.payload
            }
        default: return state
    }
}

export default post;