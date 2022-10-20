import { ITask } from "../../interfaces";
import { api } from "../../services/api";

type FunctionType = () => Promise<ITask[]>;

export const listAllTasks: FunctionType = async () => {
  const response = await api.get("/tasks");

  return response.data;
};
