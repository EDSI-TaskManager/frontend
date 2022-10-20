export interface ITask {
  id: number;
  name: string;
  start_time: Date;
  end_time: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface ITaskDTO {
  name: string;
  start_time: Date;
  end_time: Date;
}
