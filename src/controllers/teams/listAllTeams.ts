import { ITeam } from "../../interfaces";
import { api } from "../../services/api";

type FunctionType = () => Promise<ITeam[]>;

export const listAllTeams: FunctionType = async () => {
  const response = await api.get("/teams");

  return response.data;
};
