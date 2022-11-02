import { BaseController } from "./BaseController";
import { ITask, ITaskDTO } from "../interfaces";

export class TaskController extends BaseController<ITask, ITaskDTO> {}
