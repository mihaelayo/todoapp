import React, { useState, useRef } from 'react'
import './todo.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Todo({todo, toggleTodo, deleteTodo, saveEditedTodo }) {

  const [isBeingEdited, setIsBeingEdited] = useState(false)

  const todoEditedNameRef = useRef()

  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  function handleDeleteClick() {
    deleteTodo(todo.id)
  }

  function handleEditClick() {
    setIsBeingEdited(true);
  }

  function handleSaveTodo() {
    setIsBeingEdited(false);
    saveEditedTodo(todo.id, todoEditedNameRef.current.value);
  }

  function cancelSaveTodo() {
    setIsBeingEdited(false);
  }

  if(isBeingEdited){
    return (
      <section>
        <TextField
              inputRef={todoEditedNameRef}
              margin="normal"
              id="todo"
              name="todo"
              autoFocus
              defaultValue={todo.name}
            />
        <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, ml:3 }}
              onClick={handleSaveTodo}
            >
              Save
        </Button>
        <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, ml:3}}
              onClick={cancelSaveTodo}
            >
              Cancel
        </Button>
    </section>
    )
  }
  else{
    return (  
      <Box className='todo-box' sx={{ p: 2, border: '1px solid lightgrey', borderRadius: '4px' }}>
        <label className='todo-label'>
          <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}></input>
            {todo.name}
        </label>
        <Button 
              className='button-todo' 
              onClick={handleDeleteClick} 
              sx={{minWidth: 20, maxHeight: 20, border: '1px solid grey' }}
            >
              x
        </Button>
        <Button 
              className='button-todo' 
              onClick={handleEditClick} 
              sx={{minWidth: 20, maxHeight: 20, border: '1px solid grey' }}
            >
              Edit
        </Button>
      </Box>
    )
  }
}
