import React, {useState} from 'react'
import {connect} from 'react-redux'
import {AddTodo} from '../actions/todos'
import PropTypes from 'prop-types';

const Input = ({submit}) => {
    const [text, setText] = useState('')
    const ENTER = 'Enter';

    const handleChange = (val) => setText(val.target.value)

    const handleSubmit = (event) => {
        if (event.key === ENTER) {
            submit(text)
            setText('')
            event.target.value = ''
        }
    }

    return (
        <div>
            <input onChange={handleChange} onKeyDown={handleSubmit} placeholder={"press enter to add a Todo"}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => dispatch(AddTodo(text))
    }
}

Input.propTypes = {
    submit: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Input)
