import TodoApp from "./TodoApp";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Hi</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/todos" element={<TodoApp />} />
        <Route path="/" element={<h1>Hi</h1>} />
      </Routes>
    </>
  );
}

export default App;
