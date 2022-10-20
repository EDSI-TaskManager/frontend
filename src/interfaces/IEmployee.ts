export interface IEmployee {
  id: number;
  name: string;
  email: string;
  office: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IEmployeeDTO {
  name: string;
  email: string;
  office: string;
  password: string;
}
