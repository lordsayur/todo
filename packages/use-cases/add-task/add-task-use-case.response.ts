import { TaskStatus } from "@todo/entities";

export type AddTaskUseCaseResponse = {
  id: number;
  description: string;
  status: TaskStatus;
  parentTaskId?: number;
};
