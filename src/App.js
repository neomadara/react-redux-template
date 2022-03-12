import React, {useEffect} from 'react'
import './App.css';
import {connect} from 'react-redux'
import List from './components/List'
import {GetTodos} from './actions/todos'
import Input from "./components/Input";
import PropTypes from 'prop-types';

const App = ({state, GetTodos}) => {

    useEffect(() => {
        GetTodos()
    }, [GetTodos])


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
        GetTodos: () => dispatch(GetTodos())
    }
}

App.propTypes = {
    state: PropTypes.object,
    GetTodos: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
