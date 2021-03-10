import {
    TODOS_REQUESTING_SUCCESS,
    TODOS_REQUESTING,
    TODOS_REQUESTING_ERROR,
    TODO_COMPLETE,
    TODO_ADD,
    TODO_ADD_REQUEST_SUCCESS,
    TODO_ADD_REQUEST_ERROR
} from "../actionTypes/todos";

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case TODOS_REQUESTING:
            return {
                ...state,
                isLoading: true,
                error: null,
                data: []
            }
        case TODOS_REQUESTING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload
            }
        case TODOS_REQUESTING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                data: []
            }
        case TODO_COMPLETE:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: state.data.map(todo => todo.id === action.payload ? ({ ...todo, completed: true }) : todo )
            }
        case TODO_ADD:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: state.data
            }
        case TODO_ADD_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: [action.payload].concat(state.data)
            }
        case TODO_ADD_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                data: state.data
            }
        default:
            return state
    }
}

export default reducer
