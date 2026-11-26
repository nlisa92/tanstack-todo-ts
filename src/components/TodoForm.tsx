import { useState, type FormEvent, type ChangeEvent } from "react";
import { useCreateTodo } from "../hooks/useCreateTodo";

const TodoForm = () => {
  const [text, setText] = useState<string>("");
  const { mutate, isPending } = useCreateTodo();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!text.trim()) return;

    mutate({
      title: text.trim(),
      description: text.trim(),
    });

    setText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={handleChange}
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "Loading..." : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
