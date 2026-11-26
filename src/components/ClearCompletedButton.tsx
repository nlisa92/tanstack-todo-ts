import { useTodos } from "../hooks/useTodos";
import { useDeleteTodo } from "../hooks/useDeleteTodo";

function ClearCompletedButton() {
  const { data: todos = [] } = useTodos();

  const { mutate: deleteMutate } = useDeleteTodo();

  const handleClearCompleted = (): void => {
    const completedTodos = todos.filter(
      (todo) => todo.completed
    );

    completedTodos.forEach((todo) => {
      deleteMutate(todo.id);
    });
  };

  return (
    <button onClick={handleClearCompleted}>
      Clear all todos
    </button>
  );
}

export default ClearCompletedButton;