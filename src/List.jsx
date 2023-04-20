import TodoItem from "./TodoItem";
function TodoList({ todos, deleteTodo, toggleTodp, editTodo }) {
  return (
    <ul className="list">
      {todos.length > 0
        ? todos.map((todo) => (
            <TodoItem
              {...todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              toggleTodp={toggleTodp}
              editTodo={editTodo}
            />
          ))
        : "No To dos"}
    </ul>
  );
}

export default TodoList;
