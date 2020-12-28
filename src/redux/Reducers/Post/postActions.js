import { POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAILURE } from './postTypes';

const fetchPostRequest = () => {
    return {
        type: POST_FETCH_REQUEST
    }
}

const fetchPostSuccess = user => {
    return {
        type: POST_FETCH_SUCCESS,
        payload: user,
    }
}

const fetchPostFailure = error => {
    return {
        type: POST_FETCH_FAILURE,
        payload: error,
    }
}

export const getPosts = item => {
    return (dispatch) => {
        dispatch(fetchPostRequest());
        let rand = Math.floor(Math.random() * 10);
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${rand}/comments`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then((response) => {
                    dispatch(fetchPostSuccess(response))
                })
                .catch((error) => {
                    dispatch(fetchPostFailure(error.message));
                })
        }, 3000);
    }
}
