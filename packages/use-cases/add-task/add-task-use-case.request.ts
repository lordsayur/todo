import { TaskStatus } from "@todo/entities";

export type AddTaskUseCaseRequest = {
  userId: number;
  description: string;
  status?: TaskStatus;
  parentTaskId?: number;
};
