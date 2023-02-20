import { describe, test, expect, vi } from "vitest";
import { TaskStatus } from "@todo/entities";

import { TaskRepository } from "../ports/task-repository";

import { AddTaskUseCase } from "./add-task-use-case";
import { AddTaskUseCaseRequest } from "./add-task-use-case.request";
import { AddTaskUseCaseResponse } from "./add-task-use-case.response";

describe("AddTaskUseCase", () => {
  describe("execute", () => {
    test("should add task", async () => {
      // arrange
      const request: AddTaskUseCaseRequest = { description: "Task 1" };
      const taskRepository: TaskRepository = {
        add: vi.fn().mockReturnValue({
          id: 1,
          description: "",
          status: TaskStatus.Done,
          parentTaskId: undefined,
        }),
        getAll: vi.fn(),
        getSingle: vi.fn(),
        update: vi.fn(),
        delete: vi.fn(),
      };
      const addTask = new AddTaskUseCase(taskRepository);

      // act
      const response: AddTaskUseCaseResponse = await addTask.execute(request);

      // assert
      expect(response).toMatchObject({
        id: 1,
        description: "",
        status: TaskStatus.Done,
        parentTaskId: undefined,
      });
    });
  });
});
