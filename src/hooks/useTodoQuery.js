import { useParams } from "react-router-dom";
import { todoApi } from "../api/todos";
import { useQuery } from "@tanstack/react-query";

const fetchTodo = async (id) => {
  const res = await todoApi.get(`/todos/${id}`);
  return res.data;
};

export const useTodoQuery = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: ["todos", id],
    queryFn: fetchTodo(id),
    enabled: id !== undefined,
  });
};
