import {
    TODO_COMPLETE,
} from "../actionTypes/todos";

import {AddTodoService, GetTodosService} from '../services/todos'

export const completeTodo = id => async (dispatch, getState) =>  {
    console.log(getState())
    dispatch({
        type: TODO_COMPLETE,
        payload: id
    })
}

export const AddTodo = text => async (dispatch) => {
    await dispatch(AddTodoService(text))
}

export const GetTodos = () => async (dispatch) => {
    await dispatch(GetTodosService())
}

