import { useState } from "react";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useUpdateTodo } from "../hooks/useUpdateTodo";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const [title, setTitle] = useState<string>(todo.title);

  const { mutate: deleteMutate } = useDeleteTodo();
  const { mutate: updateMutate } = useUpdateTodo();

  const handleSave = () => {
    updateMutate({
      id: todo.id,
      updatedTodo: {
        ...todo,
        title,
      },
    });
  };

  const handleToggle = () => {
    updateMutate({
      id: todo.id,
      updatedTodo: {
        ...todo,
        completed: !todo.completed,
      },
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />

      <input
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />

      <button onClick={handleSave}>Save</button>

      <button onClick={() => deleteMutate(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;