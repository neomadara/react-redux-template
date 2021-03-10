import React from 'react'
import {connect} from 'react-redux'
import { completeFunc } from '../actions/todos'

const List = ({todos, complete}) => {
    const listItems = todos.map((todo) => {
        if (!todo.completed) {
            return <li key={todo.id}>{todo.title} - <button onClick={() => complete(todo.id)}>completar</button></li>
        }
        return <li key={todo.id}><span style={{textDecoration: 'line-through'}}>{todo.title}</span> - <button disabled={true}>completado</button></li>
    })
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        complete: (id) => dispatch(completeFunc(id))
    }
}

export default connect(null, mapDispatchToProps)(List)
