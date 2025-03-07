import { useQuery } from "@tanstack/react-query";
import { todoApi } from "../api/todos";

const fetchTodos = async () => {
  const res = await todoApi.get("/todos");
  return res.data;
};

export const useTodosQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};
