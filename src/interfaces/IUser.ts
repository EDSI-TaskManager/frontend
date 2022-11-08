import { ITeam } from "./ITeam";

export type Role = "Manager" | "Employee";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  office: string;
  role: Role;
  team: ITeam;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
