import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div>
        {todos.map((todo, index) => (
            <TodoItem
                key={index}
                todo={todo}
                onDelete={() => deleteTodo(index)}
            
            />
        ))}
        
    </div>
  )
}

export default TodoList