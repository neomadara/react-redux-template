import React, {useEffect} from 'react'
import './App.css';
import {connect} from 'react-redux'
import List from './components/List'
import {getTodosFunc} from './actions/todos'
import Input from "./components/Input";

const App = ({state, getTodosFunc}) => {

    useEffect(() => {
        getTodosFunc()
    }, [])


    if (state.isLoading) {
        return (
            <div>loading TODOS...</div>
        )
    }

    return (
        <div>
            <h1>TODO APP</h1>
            <Input />
            <List todos={state.data}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {state: state.todos}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodosFunc: () => dispatch(getTodosFunc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
