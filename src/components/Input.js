import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodoFunc} from '../actions/todos'

const Input = ({submit}) => {
    const [text, setText] = useState('')
    const ENTER = 'Enter';

    const handleChange = (val) => setText(val.target.value)

    const handleSubmit = (event) => {
        if (event.key === ENTER)
            submit(text)
            setText('')
            event.target.value = ''
    }

    return (
        <div>
            <input onChange={handleChange} onKeyDown={handleSubmit}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => dispatch(addTodoFunc(text))
    }
}

export default connect(null, mapDispatchToProps)(Input)
