import { useMutation } from "@tanstack/react-query";
import queryClient from "../queryClient";
import { updateTodo } from "../api/todos";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface UpdateTodoVariables {
  id: number;
  updatedTodo: Todo;
}

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: ({ id, updatedTodo }: UpdateTodoVariables) =>
      updateTodo(id, updatedTodo),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
