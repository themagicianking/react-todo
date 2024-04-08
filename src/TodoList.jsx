import TodoListItem from "./TodoListItem";

const TodoList = ({todoList}) => {
  return (
  <>
    <ul>{todoList.map(function (todo) {
       return TodoListItem(todo)
      })}
      </ul>
  </>)
};

export default TodoList
