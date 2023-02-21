import { TaskRepository, AddTaskUseCase } from "@todo/use-cases";

export class TaskService {
  private _addTaskUseCase: AddTaskUseCase;

  constructor(taskRepository: TaskRepository) {
    this._addTaskUseCase = new AddTaskUseCase(taskRepository);
  }

  get addTaskUseCase() {
    return this._addTaskUseCase;
  }
}
