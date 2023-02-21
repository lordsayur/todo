import { Task, TaskStatus } from "@todo/entities";

export interface TaskRepository {
  add(
    createdByUserId: number,
    description: string,
    taskStatus?: TaskStatus,
    parentTaskId?: number
  ): Promise<Task> | Task;
  getAll(): Promise<Task[]> | Task[];
  getSingle(): Promise<Task> | Task;
  update(): Promise<Task> | Task;
  delete(): Promise<Task> | Task;
}
