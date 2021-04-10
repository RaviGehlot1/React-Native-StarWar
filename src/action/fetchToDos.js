import axios from 'axios';
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, FETCHING_TODOS, BASE_URL } from '../config/constants';

export function fetchToDos(url) {
    return async dispatch => {
        dispatch(getToDos());

        await axios.get(url)
            .then((response) => {

                // handle your response here, create an object/array/array of objects etc... 
                // and return it in dispatch(getToDosSuccess(data over here))
                // console.log(response.data);
                return (dispatch(getToDosSuccess(response.data)))
            })
            .catch(err => dispatch(getToDosFailure(err)))
    };
}

function getToDos() {

    return {
        type: FETCHING_TODOS
    }
}

function getToDosSuccess(data) {

    return {
        type: FETCH_TODOS_SUCCESS,
        data
    }
}

function getToDosFailure(err) {
    return {
        type: FETCH_TODOS_FAILURE,
        err
    }
}