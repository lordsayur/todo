import { TaskStatus, Task } from "@todo/entities";
import { TaskRepository } from "@todo/use-cases";

export class InMemoryTaskRepository implements TaskRepository {
  constructor(private readonly _tasks: Task[], private _latestId: number = 0) {}

  add(
    createdByUserId: number,
    description: string,
    taskStatus?: TaskStatus,
    parentTaskId?: number
  ): Task {
    const newTask = new Task(
      ++this._latestId,
      createdByUserId,
      description,
      taskStatus,
      parentTaskId
    );

    this._tasks.push(newTask);

    return newTask;
  }

  getAll(): Task[] | Task[] {
    throw new Error("Method not implemented.");
  }

  getSingle(): Task | Task {
    throw new Error("Method not implemented.");
  }

  update(): Task | Task {
    throw new Error("Method not implemented.");
  }

  delete(): Task | Task {
    throw new Error("Method not implemented.");
  }
}
