const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.todoTitle.value;
    props.onAddTodo(todoTitle);
    event.target.reset();
  }
  return (
    <>
      <form onSubmit={handleAddTodo}><label htmlFor="todoTitle" name="title">Title</label>
        <input id="todoTitle" name="todoTitle" required/>
        <button type="submit">Add</button>
      </form>
    </>
  )
};

export default AddTodoForm