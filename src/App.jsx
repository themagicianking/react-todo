import { useState } from 'react'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'

function App() {
  const [todoList, setTodoList] = useState([])
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  return (
    <>
    <h1>Todo List</h1>
    <TodoList todoList={todoList} />
    <AddTodoForm onAddTodo={addTodo}/>
    </>
  );
};

export default App
