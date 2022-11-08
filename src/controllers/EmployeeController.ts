import { BaseController } from "./BaseController";
import { ENDPOINTS } from "../constants/endpoints";
import { IEmployee, IEmployeeDTO } from "../interfaces";

export class EmployeeController extends BaseController<
  IEmployee,
  IEmployeeDTO
> {
  protected endpoint = ENDPOINTS.employees;
}
