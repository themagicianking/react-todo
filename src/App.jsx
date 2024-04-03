import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState( () => {
    const savedTodoList = localStorage.getItem('savedTodoList');
    const parsedTodoList = JSON.parse(savedTodoList);
    return parsedTodoList || "";
  })
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])
  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  return (
    <>
    <h1>Todo List</h1>
    <AddTodoForm onAddTodo={addTodo}/>
    <React.Fragment>
      <TodoList todoList={todoList} />
    </React.Fragment>
    </>
  );
};

export default App
