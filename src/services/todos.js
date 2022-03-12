import {
    TODO_ADD, TODO_ADD_REQUEST_ERROR,
    TODO_ADD_REQUEST_SUCCESS,
    TODOS_REQUESTING,
    TODOS_REQUESTING_ERROR,
    TODOS_REQUESTING_SUCCESS
} from "../actionTypes/todos";
import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const GetTodosService = () => async (dispatch) => {
    dispatch({type: TODOS_REQUESTING})
    try {
        const response = await jsonPlaceHolder.get("/todos")
        const sliceData = response.data.slice(0, 5)
        console.log(sliceData)
        dispatch({ type: TODOS_REQUESTING_SUCCESS, payload: sliceData })
    } catch (e) {
        dispatch({ type: TODOS_REQUESTING_ERROR, payload: e.message() })
    }
}

export const AddTodoService = text => async (dispatch) => {
    dispatch({type: TODO_ADD})
    try {
        const todo = {
            desc: text,
            completed: false,
            title: text
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo)
        })
        const id = await response.json()
        dispatch({type: TODO_ADD_REQUEST_SUCCESS, payload: {...todo, ...id}})
    } catch (e) {
        dispatch({type: TODO_ADD_REQUEST_ERROR, payload: e.message()})
    }
}
