import TodoListItem from "./TodoListItem";

const todoList = [
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

const TodoList = () => {
  return (
  <>
    <ul>{todoList.map(function (todo) {
       return TodoListItem(todo)
      })}
      </ul>
  </>)
};

export default TodoList
