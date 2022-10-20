export interface IManager {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IManagerDTO {
  name: string;
  email: string;
}
