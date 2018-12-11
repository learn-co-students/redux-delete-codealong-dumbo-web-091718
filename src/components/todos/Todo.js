import React from 'react'

const Todo = props => {
  return (
    <li>
    {props.text}
    <button onClick={()=>props.handleSubmit(props.id)} value={props.key} >
    Delete
    </button>
    </li>

  )
}
export default Todo;
