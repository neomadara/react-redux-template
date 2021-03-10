import React, {Component} from 'react'
import './App.css';
import {connect} from 'react-redux'
import List from './components/List'
import {getTodosFunc} from './actions/todos'
import Input from "./components/Input";

class App extends Component {
    componentDidMount() {
        this.props.getTodosFunc('que paaahooo')
    }

    render() {
        const {state} = this.props
        if (state.isLoading) {
            return (
                <div>Cargando TODOS...</div>
            )
        }

        return (
            <div>
                <h1>TODOS APP</h1>
                <Input />
                <List todos={state.data}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {state: state.todos}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodosFunc: (text) => dispatch(getTodosFunc(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
