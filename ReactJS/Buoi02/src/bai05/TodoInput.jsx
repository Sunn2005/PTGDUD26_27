import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("")

    const handleAddTodo = () => {
        addTodo(text)
        setText("")
    }

  return (
    <div>
       <div>
            <h3>Những công việc cần làm...</h3>
       </div>
        <input 
            type="text" 
            placeholder="Nhập công việc..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        
        />
        <button onClick={handleAddTodo}>
            Add
        </button>
    </div>
  )
}

export default TodoInput