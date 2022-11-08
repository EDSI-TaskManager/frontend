import { BaseController } from "./BaseController";
import { ENDPOINTS } from "../constants/endpoints";
import { IManager, IManagerDTO } from "../interfaces";

export class ManagerController extends BaseController<IManager, IManagerDTO> {
  protected endpoint = ENDPOINTS.managers;
}
