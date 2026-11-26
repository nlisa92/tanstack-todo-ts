import { useMutation } from "@tanstack/react-query";
import queryClient from "../queryClient";
import { createTodo } from "../api/todos";

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.error("Ошибка при создании задачи:", error);
    },
  });
};
