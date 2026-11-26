import { useMutation } from "@tanstack/react-query";
import queryClient from "../queryClient";
import { deleteTodo } from "../api/todos";

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: deleteTodo,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
