import { describe, test, expect } from "vitest";

import { TaskStatus } from "@todo/entities";
import {
  AddTaskUseCase,
  AddTaskUseCaseRequest,
  AddTaskUseCaseResponse,
} from "@todo/use-cases";
import { InMemoryTaskRepository } from "@todo/in-memory";

describe("add-task", () => {
  test("should add task", async () => {
    // arrange
    const tasks = [];
    const inMemoryRepo = new InMemoryTaskRepository(tasks);

    const addTask = new AddTaskUseCase(inMemoryRepo);
    const request: AddTaskUseCaseRequest = {
      userId: 1,
      description: "description",
    };

    // act
    const result = await addTask.execute(request);

    // assert
    expect(result).toMatchObject<AddTaskUseCaseResponse>({
      id: 1,
      description: request.description,
      parentTaskId: null,
      status: TaskStatus.ToDo,
    });
    expect(tasks).toHaveLength(1);
  });
});
