import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./List";

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return localStorageTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(title) {
    setTodos((pre) => {
      return [
        ...pre,
        { title: title, id: crypto.randomUUID(), completed: false },
      ];
    });
  }

  function toggleTodp(id, completed) {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((pre) => {
      return pre.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id, newtodo) {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newtodo };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <Form addtodo={handleSubmit} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodp={toggleTodp}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default TodoApp;
