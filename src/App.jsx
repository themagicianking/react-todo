import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let todoList = [
  { id: 525600,
    title: "finish homework"
  },
  { id: 420,
    title: "feed the cats"},
  { id: 96000,
    title: "add work schedule to calendar"},
  { id: 36,
    title: "clean the apartment"},
  { id: 9,
    title: "go swimming"}
];

function App() {

  return (
    <>
      <h1>Todo List</h1>
      <ul>{todoList.map(function (item) {
        return <li key={item.id}>{item.title}</li>;
      })}
      </ul>
    </>
  );
};

export default App
