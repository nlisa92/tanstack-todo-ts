
import axiosInstance from "./axiosInstance";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

export type CreateTodoDto = {
  title: string;
  description: string;
};

export type UpdateTodoDto = Partial<CreateTodoDto>;

export const getTodos = async (): Promise<Todo[]> => {
  const res = await axiosInstance.get<{ data: Todo[] }>("/todos");

  console.log("Полученные задачи:", res.data);

  return res.data.data;
};

export const createTodo = async (
  todo: CreateTodoDto
): Promise<Todo> => {
  try {
    const res = await axiosInstance.post<{ data: Todo }>(
      "/todos",
      todo
    );

    console.log("Созданная задача:", res.data);

    return res.data.data;
  } catch (error) {
    console.error("Ошибка создания задачи:", error);
    throw error;
  }
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/todos/${id}`);
};

export const updateTodo = async (
  id: number,
  updatedTodo: UpdateTodoDto
): Promise<Todo> => {
  const res = await axiosInstance.patch<{ data: Todo }>(
    `/todos/${id}`,
    updatedTodo
  );

  return res.data.data;
};
