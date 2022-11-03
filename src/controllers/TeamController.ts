import { BaseController } from "./BaseController";
import { ITeam, ITeamDTO } from "../interfaces";
import { ENDPOINTS } from "../constants/endpoints";

export class TeamController extends BaseController<ITeam, ITeamDTO> {
  protected endpoint = ENDPOINTS.teams;
}
