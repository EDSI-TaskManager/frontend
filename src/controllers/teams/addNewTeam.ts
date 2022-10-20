import { ITeam, ITeamDTO } from "../../interfaces";
import { api } from "../../services/api";

type FunctionType = (body: ITeamDTO) => Promise<ITeam>;

export const listAllTeams: FunctionType = async (body) => {
  const response = await api.post("/teams", body);

  return response.data;
};
