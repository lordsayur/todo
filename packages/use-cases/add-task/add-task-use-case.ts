import { Task } from "@todo/entities";
import { TaskRepository } from "../ports/task-repository";
import { AddTaskUseCaseRequest } from "./add-task-use-case.request";
import { AddTaskUseCaseResponse } from "./add-task-use-case.response";

export class AddTaskUseCase {
  constructor(private readonly _taskRepository: TaskRepository) {}

  public async execute(
    request: AddTaskUseCaseRequest
  ): Promise<AddTaskUseCaseResponse> {
    const addedTask = await this._taskRepository.add(
      request.userId,
      request.description,
      request.status,
      request.parentTaskId
    );

    const response: AddTaskUseCaseResponse = {
      id: addedTask.id,
      description: addedTask.description,
      status: addedTask.status,
      parentTaskId: addedTask.parentTaskId,
    };

    return response;
  }
}
