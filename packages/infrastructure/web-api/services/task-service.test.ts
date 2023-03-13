import { describe, test, expect } from "vitest";
import { Task } from "@todo/entities";
import { InMemoryTaskRepository } from "@todo/in-memory";
import { AddTaskUseCaseRequest } from "@todo/use-cases";

import { TaskService } from "./task-service";

describe("TaskService", () => {
  test("should be able to add task", async () => {
    // arrange
    const tasks: Task[] = [];
    const repository = new InMemoryTaskRepository(tasks);
    const service = new TaskService(repository);
    const request: AddTaskUseCaseRequest = {
      userId: 1,
      description: "New Task",
    };

    // act
    const addedTask = await service.addTaskUseCase.execute(request);

    // assert
    expect(addedTask.description).toBe(request.description);
  });
});
