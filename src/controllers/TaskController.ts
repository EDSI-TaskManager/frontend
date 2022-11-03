import { BaseController } from "./BaseController";
import { ITask, ITaskDTO } from "../interfaces";
import { ENDPOINTS } from "../constants/endpoints";

export class TaskController extends BaseController<ITask, ITaskDTO> {
  protected endpoint = ENDPOINTS.tasks;
}
