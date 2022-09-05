import React from 'react';
import Todo from './Todo'
import Box from '@mui/material/Box';


export default function TodoList({ todos, toggleTodo, deleteTodo, saveEditedTodo }) {
  
  const todosList = todos.map(todo=> {
    return <Todo 
                key={todo.id} 
                todo={todo} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                saveEditedTodo={saveEditedTodo}
              />
  })  

  return (
    <Box sx={{ mt: 5, pl: 10 }}>
    <div className='todosList'>
      {todosList}
    </div>
    </Box>
  )
}
