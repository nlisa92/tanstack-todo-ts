import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import type { TodoFilter } from "../types/todo";
import LogoutButton from "../components/LogoutButton";
import ClearCompletedButton from "../components/ClearCompletedButton";

function TodosPage() {
  const [filter, setFilter] = useState<TodoFilter>("all");

  return (
    <div>
      <LogoutButton />
      <h1>Todo App</h1>

      <TodoForm />

      <TodoList filter={filter} />

      <button onClick={() => setFilter("all")}>All</button>

      <button onClick={() => setFilter("active")}>Active</button>

      <button onClick={() => setFilter("completed")}>Completed</button>
      <ClearCompletedButton />
    </div>
  );
}

export default TodosPage;
