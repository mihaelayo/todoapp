import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TodoList from './TodoList';
import uuid from 'react-uuid';



export default function Todo() {
  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  const [ todos, setTodos ] = useState([])
  const todoNameRef = useRef()

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false  }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function deleteTodo(id) {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  function saveEditedTodo(id, newName){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.name = newName
    setTodos(newTodos)
  }

  
  return (
    <section>
        <TextField
              inputRef={todoNameRef}
              margin="normal"
              id="todo"
              name="todo"
              autoFocus
            />
        <Button
              onClick={handleAddTodo}
              variant="contained"
              sx={{ mt: 3, mb: 2, ml:3 }}
            >
              Add
        </Button>
        <Button
              onClick={handleClearTodo}
              variant="contained"
              sx={{ mt: 3, mb: 2, ml:3}}
            >
              Clear completed
        </Button>
        <TodoList 
              todos={todos} 
              toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo} 
              saveEditedTodo={saveEditedTodo}
            />
        <div>You have {todos.filter(todo => !todo.complete).length} todos to complete</div>
    </section>
  )
}
