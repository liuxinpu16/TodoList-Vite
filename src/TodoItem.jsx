import { useState } from "react";

function TodoItem({ completed, id, title, toggleTodp, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  return (
    <li>
      {editing ? (
        <>
          <input
            className="editInput"
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => setEditing(false)}>
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              editTodo(id, titleValue);
              setEditing(false);
            }}
          >
            Set Todo
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => {
                toggleTodp(id, e.target.checked);
              }}
            />
            {title}
          </label>
          <button className="btn btn-primary" onClick={() => setEditing(true)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
