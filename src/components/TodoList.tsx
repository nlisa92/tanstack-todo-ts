import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";
import type { TodoFilter } from "../types/todo";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  filter: TodoFilter;
}

function TodoList({ filter }: TodoListProps) {
  const { data = [], isLoading, isError } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error</p>;

  let filteredTodos: Todo[] = data;

  if (filter === "active") {
    filteredTodos = data.filter((todo) => !todo.completed);
  }

  if (filter === "completed") {
    filteredTodos = data.filter((todo) => todo.completed);
  }

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
