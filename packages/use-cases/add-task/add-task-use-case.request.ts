import { TaskStatus } from "@todo/entities";

export type AddTaskUseCaseRequest = {
  description: string;
  status?: TaskStatus;
  parentTaskId?: number;
};
