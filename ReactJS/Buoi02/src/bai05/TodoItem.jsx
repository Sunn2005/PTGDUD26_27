import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
        {todo}
        <button onClick={onDelete} style={{marginLeft: "10px"}}>Delete</button>
    </div>
  )
}

export default TodoItem