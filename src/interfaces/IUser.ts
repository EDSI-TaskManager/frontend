import { ITeam } from "./ITeam";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  office: string;
  role: string;
  team: ITeam;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
