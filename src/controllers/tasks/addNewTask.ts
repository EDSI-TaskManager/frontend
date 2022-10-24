import { ITask, ITaskDTO } from "../../interfaces";
import { api } from "../../services/api";

type FunctionType = (body: ITaskDTO) => Promise<ITask[]>;

export const addNewTask: FunctionType = async (body) => {
  const response = await api.post("/tasks", body);

  return response.data;
};
