import { ITeam } from "./ITeam";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  office: string;
  role: "Manager" | "Employee";
  team: ITeam;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
